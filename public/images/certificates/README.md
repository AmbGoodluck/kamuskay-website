# Certificates & Awards Images

Drop all certificate and award photos/scans into this folder.
They will automatically appear in the slideshow on the Academics page.

## How to add a new certificate

1. Save the image here as a `.jpg`, `.jpeg`, or `.png` file.
2. Open `components/ui/CertificatesSlider.tsx`.
3. Add a new entry to the `certificates` array:

```ts
{
  src: "/images/certificates/your-filename.jpg",
  alt: "Certificate name – short description",
  label: "Certificate / Award Title",
  year: "2025",           // optional
  issuer: "Issuing body", // optional
},
```

## Recommended file names

| File | Description |
|------|-------------|
| `mlk-award.jpg` | MLK Student Leadership Award |
| `deans-list-fall23.jpg` | Dean's List – Fall 2023 |
| `deans-list-spring24.jpg` | Dean's List – Spring 2024 |
| `deans-list-fall24.jpg` | Dean's List – Fall 2024 |
| `parker-scholarship.jpg` | Father Henry L. Parker Scholarship |
| `graham-service-award.jpg` | Graham Volunteer Service Award |
| `entrepreneur-ala.jpg` | Entrepreneur of the Year – ALA 2021 |
| `news-decoder.jpg` | News Decoder Award |
| `buris-presentation.jpg` | BURIS Research Symposium certificate |

## Guidelines
- Preferred format: JPEG at 1200 × 900 px or larger
- Landscape orientation works best in the slider
- Scanned certificates: save at 150 dpi minimum for clarity
