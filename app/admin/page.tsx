"use client";

import { useState, useEffect, useRef } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { auth, db, storage, googleProvider, ADMIN_EMAIL } from "@/lib/firebase";

// ─── Types ────────────────────────────────────────────────────────────────────

type Activity = {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  tag: string;
  focus: string;
  storagePath: string;
  createdAt: { seconds: number } | null;
};

type GalleryItem = {
  id: string;
  imageUrl: string;
  caption: string;
  storagePath: string;
  createdAt: { seconds: number } | null;
};

type Certificate = {
  id: string;
  src: string;
  alt: string;
  storagePath: string;
  createdAt: { seconds: number } | null;
};

type Award = {
  id: string;
  title: string;
  year: string;
  emoji: string;
  createdAt: { seconds: number } | null;
};

type Project = {
  id: string;
  role: string;
  name: string;
  bullets: string[];
  whyItMatters: string;
  createdAt: { seconds: number } | null;
};

type Tab = "activities" | "gallery" | "certificates" | "awards" | "projects";

// ─── Upload helper ─────────────────────────────────────────────────────────────

async function uploadImage(
  file: File,
  path: string,
  onProgress?: (pct: number) => void
): Promise<{ url: string; storagePath: string }> {
  const storagePath = `${path}/${Date.now()}_${file.name}`;
  const storageRef = ref(storage, storagePath);
  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, file);
    task.on(
      "state_changed",
      (snap) => {
        const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        onProgress?.(pct);
      },
      reject,
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve({ url, storagePath });
      }
    );
  });
}

async function removeFromStorage(storagePath: string) {
  if (!storagePath) return;
  try {
    await deleteObject(ref(storage, storagePath));
  } catch {
    // ignore — file may already be gone
  }
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("activities");

  useEffect(() => {
    if (!auth) { setAuthLoading(false); return; }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
        <div className="w-8 h-8 border-4 border-[#0B1F3B] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return <LoginScreen />;

  const email = user.email ?? "";
  const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F7] gap-4">
        <p className="text-[#0B1F3B] font-bold text-lg">Access denied.</p>
        <p className="text-[#666] text-sm">{email} is not an authorized admin.</p>
        <button
          type="button"
          onClick={() => signOut(auth)}
          className="px-4 py-2 bg-[#0B1F3B] text-white rounded-xl text-sm font-semibold"
        >
          Sign out
        </button>
      </div>
    );
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: "activities", label: "Activities" },
    { key: "gallery", label: "Gallery" },
    { key: "certificates", label: "Certificates" },
    { key: "awards", label: "Awards & Honors" },
    { key: "projects", label: "Projects" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Header */}
      <header className="bg-[#0B1F3B] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#F2A93B] flex items-center justify-center font-black text-[#0B1F3B] text-sm">
            K
          </div>
          <div>
            <p className="font-black text-sm font-poppins">Kamuskay Admin</p>
            <p className="text-white/50 text-xs">{email}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => signOut(auth)}
          className="text-white/70 hover:text-white text-xs font-semibold border border-white/20 px-3 py-1.5 rounded-lg hover:border-white/50 transition-colors"
        >
          Sign out
        </button>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-[#e8e8e8] px-6 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {tabs.map((t) => (
            <button
              type="button"
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-3.5 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                tab === t.key
                  ? "border-[#F2A93B] text-[#0B1F3B]"
                  : "border-transparent text-[#888] hover:text-[#0B1F3B]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {tab === "activities" && <ActivitiesTab />}
        {tab === "gallery" && <GalleryTab />}
        {tab === "certificates" && <CertificatesTab />}
        {tab === "awards" && <AwardsTab />}
        {tab === "projects" && <ProjectsTab />}
      </main>
    </div>
  );
}

// ─── Login Screen ──────────────────────────────────────────────────────────────

function LoginScreen() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-sm text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#0B1F3B] flex items-center justify-center mx-auto mb-5">
          <span className="text-[#F2A93B] font-black text-2xl font-poppins">K</span>
        </div>
        <h1 className="text-xl font-black text-[#0B1F3B] font-poppins mb-1">Admin Dashboard</h1>
        <p className="text-[#888] text-sm mb-8">Sign in with your Google account to continue.</p>
        {error && (
          <p className="text-red-500 text-xs mb-4 bg-red-50 px-3 py-2 rounded-xl">{error}</p>
        )}
        <button
          type="button"
          onClick={handleGoogle}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#e0e0e0] rounded-xl text-sm font-semibold text-[#333] hover:bg-[#F5F5F7] transition-colors disabled:opacity-50"
        >
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.6 2.5 30.1 0 24 0 14.6 0 6.6 5.5 2.7 13.5l7.8 6C12.4 13.1 17.8 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8C43.7 37.3 46.5 31.3 46.5 24.5z"/>
            <path fill="#FBBC05" d="M10.5 28.5a14.6 14.6 0 010-9l-7.8-6A23.9 23.9 0 000 24c0 3.9.9 7.5 2.7 10.5l7.8-6z"/>
            <path fill="#34A853" d="M24 48c6.1 0 11.2-2 14.9-5.5l-7.5-5.8c-2 1.4-4.6 2.2-7.4 2.2-6.2 0-11.5-3.6-13.5-8.9l-7.8 6C6.6 42.5 14.6 48 24 48z"/>
          </svg>
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
}

// ─── Shared UI ─────────────────────────────────────────────────────────────────

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-black text-[#0B1F3B] font-poppins">{title}</h2>
      <p className="text-[#888] text-sm mt-0.5">{description}</p>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-[#e8e8e8] overflow-hidden mb-6">
      {children}
    </div>
  );
}

function CardHeader({ title }: { title: string }) {
  return (
    <div className="px-6 py-4 border-b border-[#f0f0f0]">
      <p className="font-bold text-[#0B1F3B] text-sm">{title}</p>
    </div>
  );
}

function ProgressBar({ value }: { value: number }) {
  if (value === 0 || value === 100) return null;
  return (
    <progress
      value={value}
      max={100}
      aria-label="Upload progress"
      className="w-full h-1.5 mt-2 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-[#e8e8e8] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[#30A38A]"
    />
  );
}

function DeleteBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs text-red-500 hover:text-red-700 font-semibold px-2 py-1 rounded-lg hover:bg-red-50 transition-colors shrink-0"
    >
      Delete
    </button>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <p className="text-[#aaa] text-sm text-center py-8">{label}</p>
  );
}

// ─── Activities Tab ────────────────────────────────────────────────────────────

function ActivitiesTab() {
  const [items, setItems] = useState<Activity[]>([]);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [tag, setTag] = useState("");
  const [focus, setFocus] = useState("center");
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = query(collection(db, "activities"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Activity)));
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title || !caption || !tag) return;
    setSaving(true);
    try {
      const { url, storagePath } = await uploadImage(file, "activities", setProgress);
      await addDoc(collection(db, "activities"), {
        title, caption, tag, focus,
        imageUrl: url, storagePath,
        createdAt: serverTimestamp(),
      });
      setTitle(""); setCaption(""); setTag(""); setFocus("center");
      setFile(null); setProgress(0);
      if (fileRef.current) fileRef.current.value = "";
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item: Activity) => {
    await removeFromStorage(item.storagePath);
    await deleteDoc(doc(db, "activities", item.id));
  };

  return (
    <div>
      <SectionHeader title="Featured Activities" description="These appear on the home page highlights section." />

      <Card>
        <CardHeader title="Add New Activity" />
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              value={title} onChange={(e) => setTitle(e.target.value)}
              placeholder="Title (e.g. Track & Field Athlete)"
              required
              className="border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B]"
            />
            <input
              value={tag} onChange={(e) => setTag(e.target.value)}
              placeholder="Tag (e.g. Athletics, Leadership)"
              required
              className="border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B]"
            />
          </div>
          <textarea
            value={caption} onChange={(e) => setCaption(e.target.value)}
            placeholder="Caption — short description of this activity"
            required rows={2}
            className="w-full border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B] resize-none"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="activity-image" className="text-xs text-[#888] font-semibold uppercase tracking-widest block mb-1.5">Image</label>
              <input
                id="activity-image"
                ref={fileRef} type="file" accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                required
                className="text-sm text-[#555] file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-[#0B1F3B] file:text-white file:text-xs file:font-semibold hover:file:bg-[#132d57] file:cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="activity-focus" className="text-xs text-[#888] font-semibold uppercase tracking-widest block mb-1.5">Image Focus</label>
              <select
                id="activity-focus"
                title="Image focus position"
                value={focus} onChange={(e) => setFocus(e.target.value)}
                className="border border-[#e0e0e0] rounded-xl px-3 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B] w-full"
              >
                <option value="center">Center</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
              </select>
            </div>
          </div>
          <ProgressBar value={progress} />
          <button
            type="submit" disabled={saving}
            className="px-6 py-2.5 bg-[#0B1F3B] text-white rounded-xl text-sm font-semibold hover:bg-[#132d57] disabled:opacity-50 transition-colors"
          >
            {saving ? "Uploading..." : "Add Activity"}
          </button>
        </form>
      </Card>

      <Card>
        <CardHeader title={`Activities (${items.length})`} />
        <div className="divide-y divide-[#f0f0f0]">
          {items.length === 0 && <EmptyState label="No activities yet. Add your first one above." />}
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4">
              <img src={item.imageUrl} alt={item.title} className="w-16 h-12 object-cover rounded-xl shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-[#0B1F3B] truncate">{item.title}</p>
                <p className="text-xs text-[#888] truncate">{item.caption}</p>
                <span className="inline-block mt-1 text-[10px] font-bold bg-[#F5F5F7] text-[#555] px-2 py-0.5 rounded-full">{item.tag}</span>
              </div>
              <DeleteBtn onClick={() => handleDelete(item)} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── Gallery Tab ───────────────────────────────────────────────────────────────

function GalleryTab() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() } as GalleryItem)));
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setSaving(true);
    try {
      const { url, storagePath } = await uploadImage(file, "gallery", setProgress);
      await addDoc(collection(db, "gallery"), {
        imageUrl: url, caption, storagePath,
        createdAt: serverTimestamp(),
      });
      setCaption(""); setFile(null); setProgress(0);
      if (fileRef.current) fileRef.current.value = "";
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item: GalleryItem) => {
    await removeFromStorage(item.storagePath);
    await deleteDoc(doc(db, "gallery", item.id));
  };

  return (
    <div>
      <SectionHeader title="Gallery" description="Photos displayed in the scrolling gallery on the home page." />

      <Card>
        <CardHeader title="Add Photo" />
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            value={caption} onChange={(e) => setCaption(e.target.value)}
            placeholder="Caption (optional)"
            className="w-full border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B]"
          />
          <label htmlFor="gallery-image" className="sr-only">Gallery photo</label>
          <input
            id="gallery-image"
            ref={fileRef} type="file" accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            required
            className="text-sm text-[#555] file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-[#0B1F3B] file:text-white file:text-xs file:font-semibold hover:file:bg-[#132d57] file:cursor-pointer"
          />
          <ProgressBar value={progress} />
          <button
            type="submit" disabled={saving}
            className="px-6 py-2.5 bg-[#0B1F3B] text-white rounded-xl text-sm font-semibold hover:bg-[#132d57] disabled:opacity-50 transition-colors"
          >
            {saving ? "Uploading..." : "Add Photo"}
          </button>
        </form>
      </Card>

      <Card>
        <CardHeader title={`Photos (${items.length})`} />
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.length === 0 && <p className="text-[#aaa] text-sm col-span-4 text-center py-6">No photos yet.</p>}
          {items.map((item) => (
            <div key={item.id} className="relative group rounded-xl overflow-hidden aspect-square bg-[#F5F5F7]">
              <img src={item.imageUrl} alt={item.caption || "Gallery"} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => handleDelete(item)}
                  className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── Certificates Tab ──────────────────────────────────────────────────────────

function CertificatesTab() {
  const [items, setItems] = useState<Certificate[]>([]);
  const [alt, setAlt] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = query(collection(db, "certificates"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Certificate)));
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setSaving(true);
    try {
      const { url, storagePath } = await uploadImage(file, "certificates", setProgress);
      await addDoc(collection(db, "certificates"), {
        src: url,
        alt: alt || "Certificate",
        storagePath,
        createdAt: serverTimestamp(),
      });
      setAlt(""); setFile(null); setProgress(0);
      if (fileRef.current) fileRef.current.value = "";
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item: Certificate) => {
    await removeFromStorage(item.storagePath);
    await deleteDoc(doc(db, "certificates", item.id));
  };

  return (
    <div>
      <SectionHeader title="Certificates & Recognition" description="Displayed in the slider on the Academics page." />

      <Card>
        <CardHeader title="Add Certificate" />
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            value={alt} onChange={(e) => setAlt(e.target.value)}
            placeholder="Description (e.g. MLK Leadership Certificate 2026)"
            className="w-full border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B]"
          />
          <label htmlFor="cert-image" className="sr-only">Certificate image</label>
          <input
            id="cert-image"
            ref={fileRef} type="file" accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            required
            className="text-sm text-[#555] file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-[#0B1F3B] file:text-white file:text-xs file:font-semibold hover:file:bg-[#132d57] file:cursor-pointer"
          />
          <ProgressBar value={progress} />
          <button
            type="submit" disabled={saving}
            className="px-6 py-2.5 bg-[#0B1F3B] text-white rounded-xl text-sm font-semibold hover:bg-[#132d57] disabled:opacity-50 transition-colors"
          >
            {saving ? "Uploading..." : "Add Certificate"}
          </button>
        </form>
      </Card>

      <Card>
        <CardHeader title={`Certificates (${items.length})`} />
        <div className="divide-y divide-[#f0f0f0]">
          {items.length === 0 && <EmptyState label="No certificates yet. Add your first one above." />}
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4">
              <img src={item.src} alt={item.alt} className="w-20 h-14 object-contain rounded-lg border border-[#e8e8e8] shrink-0 bg-[#F5F5F7]" />
              <p className="flex-1 text-sm text-[#555] min-w-0 truncate">{item.alt}</p>
              <DeleteBtn onClick={() => handleDelete(item)} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── Awards Tab ────────────────────────────────────────────────────────────────

function AwardsTab() {
  const [items, setItems] = useState<Award[]>([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [emoji, setEmoji] = useState("🏆");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "awards"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Award)));
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !year) return;
    setSaving(true);
    try {
      await addDoc(collection(db, "awards"), {
        title, year, emoji,
        createdAt: serverTimestamp(),
      });
      setTitle(""); setYear(""); setEmoji("🏆");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "awards", id));
  };

  return (
    <div>
      <SectionHeader title="Awards & Honors" description="Displayed in the dark strip on the Academics page." />

      <Card>
        <CardHeader title="Add Award" />
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              value={emoji} onChange={(e) => setEmoji(e.target.value)}
              placeholder="Emoji (e.g. 🏆)"
              required
              className="border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B]"
            />
            <input
              value={title} onChange={(e) => setTitle(e.target.value)}
              placeholder="Award title"
              required
              className="sm:col-span-2 border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B]"
            />
          </div>
          <input
            value={year} onChange={(e) => setYear(e.target.value)}
            placeholder="Year (e.g. 2026 or Fall 2023, Spring 2024)"
            required
            className="w-full border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B]"
          />
          <button
            type="submit" disabled={saving}
            className="px-6 py-2.5 bg-[#0B1F3B] text-white rounded-xl text-sm font-semibold hover:bg-[#132d57] disabled:opacity-50 transition-colors"
          >
            {saving ? "Saving..." : "Add Award"}
          </button>
        </form>
      </Card>

      <Card>
        <CardHeader title={`Awards (${items.length})`} />
        <div className="divide-y divide-[#f0f0f0]">
          {items.length === 0 && <EmptyState label="No awards yet. Add your first one above." />}
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4">
              <span className="text-2xl shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-[#0B1F3B]">{item.title}</p>
                <p className="text-xs text-[#888]">{item.year}</p>
              </div>
              <DeleteBtn onClick={() => handleDelete(item.id)} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── Projects Tab ──────────────────────────────────────────────────────────────

function ProjectsTab() {
  const [items, setItems] = useState<Project[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [bullets, setBullets] = useState(["", ""]);
  const [whyItMatters, setWhyItMatters] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Project)));
    });
  }, []);

  const updateBullet = (i: number, val: string) => {
    setBullets((prev) => prev.map((b, idx) => (idx === i ? val : b)));
  };

  const addBullet = () => setBullets((prev) => [...prev, ""]);
  const removeBullet = (i: number) => setBullets((prev) => prev.filter((_, idx) => idx !== i));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !name) return;
    setSaving(true);
    try {
      await addDoc(collection(db, "projects"), {
        role, name,
        bullets: bullets.filter((b) => b.trim()),
        whyItMatters,
        createdAt: serverTimestamp(),
      });
      setRole(""); setName(""); setBullets(["", ""]); setWhyItMatters("");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "projects", id));
  };

  return (
    <div>
      <SectionHeader title="Projects & Experience" description="Displayed as research project cards on the Academics page." />

      <Card>
        <CardHeader title="Add Project" />
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              value={role} onChange={(e) => setRole(e.target.value)}
              placeholder="Role (e.g. Research Associate)"
              required
              className="border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B]"
            />
            <input
              value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Project name (e.g. The FREE Zion Project)"
              required
              className="border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B]"
            />
          </div>
          <div>
            <label className="text-xs text-[#888] font-semibold uppercase tracking-widest block mb-2">Bullet Points</label>
            <div className="space-y-2">
              {bullets.map((b, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    value={b} onChange={(e) => updateBullet(i, e.target.value)}
                    placeholder={`Bullet ${i + 1}`}
                    className="flex-1 border border-[#e0e0e0] rounded-xl px-4 py-2 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B]"
                  />
                  {bullets.length > 1 && (
                    <button type="button" onClick={() => removeBullet(i)} className="text-red-400 hover:text-red-600 text-sm px-2">✕</button>
                  )}
                </div>
              ))}
            </div>
            <button type="button" onClick={addBullet} className="mt-2 text-xs text-[#30A38A] font-semibold hover:underline">
              + Add bullet
            </button>
          </div>
          <textarea
            value={whyItMatters} onChange={(e) => setWhyItMatters(e.target.value)}
            placeholder="Why it matters for students"
            rows={2}
            className="w-full border border-[#e0e0e0] rounded-xl px-4 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#0B1F3B] resize-none"
          />
          <button
            type="submit" disabled={saving}
            className="px-6 py-2.5 bg-[#0B1F3B] text-white rounded-xl text-sm font-semibold hover:bg-[#132d57] disabled:opacity-50 transition-colors"
          >
            {saving ? "Saving..." : "Add Project"}
          </button>
        </form>
      </Card>

      <Card>
        <CardHeader title={`Projects (${items.length})`} />
        <div className="divide-y divide-[#f0f0f0]">
          {items.length === 0 && <EmptyState label="No projects yet. Add your first one above." />}
          {items.map((item) => (
            <div key={item.id} className="p-4 flex gap-4">
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[10px] font-bold bg-[#30A38A]/10 text-[#30A38A] px-2 py-0.5 rounded-full mb-1">{item.role}</span>
                <p className="font-semibold text-sm text-[#0B1F3B]">{item.name}</p>
                {item.bullets?.length > 0 && (
                  <ul className="mt-1 space-y-0.5">
                    {item.bullets.slice(0, 2).map((b, i) => (
                      <li key={i} className="text-xs text-[#888] flex gap-1.5">
                        <span className="text-[#30A38A] shrink-0">•</span>{b}
                      </li>
                    ))}
                    {item.bullets.length > 2 && (
                      <li className="text-xs text-[#aaa]">+{item.bullets.length - 2} more</li>
                    )}
                  </ul>
                )}
              </div>
              <DeleteBtn onClick={() => handleDelete(item.id)} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
