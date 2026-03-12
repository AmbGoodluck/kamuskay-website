"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
              aria-label="Close video"
            >
              <HiX size={20} />
            </button>
            {videoUrl ? (
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Campaign video"
              />
            ) : (
              // TODO: Replace with actual campaign video embed URL
              <div className="w-full h-full flex items-center justify-center text-white/60 text-center p-8">
                <div>
                  <div className="text-5xl mb-4">🎬</div>
                  <p className="text-lg font-medium">Campaign Video Coming Soon</p>
                  <p className="text-sm mt-2 text-white/40">
                    Replace this placeholder with the actual video embed URL.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
