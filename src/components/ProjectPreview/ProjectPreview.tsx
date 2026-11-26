import { useState } from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import type { projects } from "../../data";
import "./ProjectPreview.css";

type Preview = { media: string[]; versions: (string | null)[] };

const previews: Record<string, Preview> = {
  "Jada-Mod-Manager": {
    media: ["/projects/jada/jada.webp", "/projects/jada/jada-v2.webp", "/projects/jada/jada-suggestion.webp"],
    versions: ["2024-10-22", "2025-01-20", null],
  },
  "Password-Manager": {
    media: ["/projects/password-manager/password-manager-demo-hd.mp4"],
    versions: ["2025-07-30", "2026-05-04", "2026-08-28", "2026-09-08", "2026-09-28", "2026-11-15"],
  },
  "Unknown-Pixel": {
    media: ["/projects/unknown-pixel/unknown-pixel-old.webp", "/projects/unknown-pixel/unknown-pixel.webp", "/projects/unknown-pixel/unknown-pixel-video.mp4"],
    versions: ["2025-08-10", "2026-02-10"],
  },
  "Violet-Player": {
    media: ["/projects/violet-player/violet-player.webp"],
    versions: ["2026-07-15"],
  },
  EchoDeck: {
    media: ["/projects/echodeck/EchoDeck-Feature-Tour.mp4"],
    versions: [],
  },
};

export default function ProjectPreview({ project, onClose }: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);
  const { media, versions } = previews[project.url] ?? { media: [project.image], versions: [] };
  const src = media[index];
  const dateFormat = new Intl.DateTimeFormat(i18n.language, { dateStyle: "medium", timeZone: "UTC" });

  return (
    <Dialog open onClose={onClose} maxWidth="lg" fullWidth aria-labelledby="project-preview-title"
      PaperProps={{ className: "project-preview" }}>
      <header className="preview-heading">
        <h2 id="project-preview-title">{t(project.title)}</h2>
        <IconButton onClick={onClose} aria-label={t("Close")} color="inherit"><CloseIcon /></IconButton>
      </header>
      <div className="preview-body">
        <div className="preview-media">
          {src.endsWith(".mp4")
            ? <video key={src} src={src} controls playsInline preload="metadata" aria-label={project.title} />
            : <img src={src} alt={`${project.title} — ${t("Demonstration")} ${index + 1}`} />}
        </div>
        {media.length > 1 && (
          <div className="preview-navigation">
            <IconButton color="inherit" aria-label={t("Previous")} onClick={() => setIndex((index + media.length - 1) % media.length)}><ChevronLeft /></IconButton>
            <span aria-live="polite">{index + 1} / {media.length}</span>
            <IconButton color="inherit" aria-label={t("Next")} onClick={() => setIndex((index + 1) % media.length)}><ChevronRight /></IconButton>
          </div>
        )}
        {versions.length > 0 && (
          <section className="preview-versions">
            <h3>{t("Versions")}</h3>
            <ul>{versions.map((date, i) => (
              <li key={i}><strong>V{i + 1}</strong> {date
                ? <time dateTime={date}>{dateFormat.format(new Date(date))}</time>
                : t("In progress")}</li>
            ))}</ul>
          </section>
        )}
      </div>
    </Dialog>
  );
}
