import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import type { projects } from "../../data";
import "./ProjectPreview.css";

type Release = { version?: string; date: string | null; note: string };
type Media = { src: string; poster?: string };
type Preview = { media: Media[]; versions: (Release | string | null)[] };

const previews: Record<string, Preview> = {
  "Jada-Mod-Manager": {
    media: [
      { src: "/projects/jada/jada.webp" },
      { src: "/projects/jada/jada-v2.webp" },
      { src: "/projects/jada/jada-suggestion.webp" },
    ],
    versions: [
      { version: "1", date: "2024-10-22", note: "Select mods to install. Jada extracts their files and places them in the game folders." },
      { version: "2", date: "2025-01-20", note: "Choose a game from a visual library, switch between games, or add another game from the same screen." },
      { version: "3", date: null, note: "Work in progress includes detecting game installation folders and updating Jada from within the app." },
    ],
  },
  "Password-Manager": {
    media: [{ src: "/projects/password-manager/password-manager-demo-hd.mp4", poster: "/projects/password-manager/password-manager-poster.webp" }],
    versions: [
      { date: "2025-07-30", note: "Generate passwords with a chosen length and character types, then save, edit, or delete them locally." },
      { date: "2026-05-04", note: "Added a Copy button and displayed saved accounts and passwords in separate columns." },
      { date: "2026-08-28", note: "Rebuilt the desktop app with an encrypted vault, master passphrase, automatic locking, and encrypted backups." },
      { date: "2026-09-08", note: "Added a read-only Android app for opening encrypted backups and searching, revealing, or copying passwords." },
      { date: "2026-09-28", note: "Updated the generator to create passwords of 8 to 64 characters and include at least one character from each selected group." },
      { date: "2026-11-15", note: "Fixed the password visibility control. The eye button now shows whether the password is visible and announces its state to screen readers." },
    ],
  },
  "Unknown-Pixel": {
    media: [
      { src: "/projects/unknown-pixel/unknown-pixel-old.webp" },
      { src: "/projects/unknown-pixel/unknown-pixel.webp" },
      { src: "/projects/unknown-pixel/unknown-pixel-video.mp4", poster: "/projects/unknown-pixel/unknown-pixel-poster.webp" },
    ],
    versions: ["2025-08-10", "2026-02-10"],
  },
  "Violet-Player": {
    media: [{ src: "/projects/violet-player/violet-player.webp" }],
    versions: ["2026-07-15"],
  },
  EchoDeck: {
    media: [{ src: "/projects/echodeck/EchoDeck-Feature-Tour.mp4", poster: "/projects/echodeck/echodeck-poster.webp" }],
    versions: [
      { version: "3.6.3", date: "2026-11-25", note: "The master volume slider now brightens on keyboard focus. The per-song gain slider keeps its teal underline." },
      { version: "3.6.2", date: "2026-11-23", note: "Shuffle scrolls directly to the chosen track. Closing Lyrics brings the current track back into view." },
      { version: "3.6.1", date: "2026-11-23", note: "Keyboard focus brightens buttons and underlines sliders, making the active control easier to see." },
      { version: "3.6.0", date: "2026-11-20", note: "Discord shows the current track as a listening activity." },
      { version: "3.5.0", date: "2026-11-19", note: "Press Ctrl + Numpad 0 to switch between the playlist and lyrics." },
      { version: "3.4.1", date: "2026-11-19", note: "Improved contrast on the selected playback button." },
      { version: "3.4.0", date: "2026-11-19", note: "The player remembers the master volume between sessions, including mute." },
      { version: "3.3.0", date: "2026-11-19", note: "Looks up lyrics automatically and highlights the current line when synced lyrics are available." },
      { version: "3.2.0", date: "2026-11-15", note: "Played tracks fade to gray so you can see which songs are left in the current round." },
      { version: "3.1.1", date: "2026-11-12", note: "The Play button starts a saved playlist immediately after launch." },
      { version: "3.1.0", date: "2026-11-12", note: "The player reopens at its last window position, including on a second monitor." },
      { version: "3.0.3", date: "2026-10-09", note: "The current track scrolls toward the top of the playlist when playback changes." },
      { version: "3.0.2", date: "2026-10-09", note: "Manage saved playlists and share the current song through Discord Rich Presence." },
      { version: "2.8", date: "2026-08-27", note: "Adjust the gain of individual songs to balance tracks with different recording levels." },
      { version: "2.7", date: "2024-08-30", note: "Added shuffle playback." },
      { version: "2.5", date: "2024-08-29", note: "Added a settings screen for player preferences." },
      { version: "2.4", date: "2024-07-26", note: "Fixed playlist scrolling to the current song." },
      { version: "2.3", date: "2024-06-09", note: "Added automatic lyrics scrolling, a playlist loop toggle, and scrolling to the current song." },
      { version: "2.0", date: "2024-04-16", note: "Reworked the playback interface and renderer for better performance." },
      { version: "1.10", date: "2024-04-16", note: "Added volume shortcuts and seeking from the progress bar." },
      { version: "1.7", date: "2024-04-05", note: "Global shortcuts control playback while another app is in focus." },
      { version: "1.5", date: "2024-04-01", note: "Added a screen for reading lyrics." },
      { version: "1.3", date: "2024-03-24", note: "Added controls to move backward and forward during playback." },
      { version: "1.2", date: "2024-03-19", note: "Fixed the playback progress bar." },
      { version: "1.1", date: "2024-03-17", note: "Click a song in the list to play it directly." },
      { version: "1.0", date: "2024-03-16", note: "First desktop release for playing local MP3 files." },
    ],
  },
};

function PreviewMedia({ media, placeholder, label }: {
  media: Media;
  placeholder: string;
  label: string;
}) {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const ready = () => setStatus("ready");
  const failed = () => setStatus("error");

  return (
    <div className="preview-media" data-state={status} aria-busy={status === "loading"}>
      <img className="preview-placeholder" src={placeholder} alt="" aria-hidden="true" />
      {media.src.endsWith(".mp4") ? (
        <video className="preview-content" src={media.src} poster={media.poster ?? placeholder}
          controls playsInline preload="metadata" aria-label={label}
          onLoadedMetadata={ready} onError={failed} />
      ) : (
        <img className="preview-content" src={media.src} alt={label}
          decoding="async" fetchPriority="high" onLoad={ready} onError={failed} />
      )}
      {status === "loading" && (
        <div className="preview-loading" role="status">
          <span className="preview-sr-only">{t("Loading preview")}</span>
        </div>
      )}
      {status === "error" && (
        <p className="preview-error" role="alert">{t("Could not load this preview.")}</p>
      )}
    </div>
  );
}

export default function ProjectPreview({ project, onClose }: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);
  const preview = previews[project.url];
  const media = preview?.media ?? [{ src: project.image }];
  const versions = preview?.versions ?? [];
  const currentMedia = media[index];
  useEffect(() => {
    for (const item of preview?.media ?? []) {
      const imageSrc = item.poster ?? (!item.src.endsWith(".mp4") ? item.src : undefined);
      if (imageSrc) {
        const image = new Image();
        image.decoding = "async";
        image.fetchPriority = "low";
        image.src = imageSrc;
      }
    }
  }, [preview]);
  const dateFormat = new Intl.DateTimeFormat(i18n.language, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const newestFirst = versions.map((entry, index) => {
    const release = typeof entry === "object" ? entry : null;
    return {
      number: release?.version ?? String(index + 1),
      date: typeof entry === "string" ? entry : release?.date ?? "",
      note: release?.note,
    };
  }).sort((a, b) =>
    b.number.localeCompare(a.number, "en", { numeric: true }) || b.date.localeCompare(a.date)
  );

  return (
    <Dialog open onClose={onClose} maxWidth="lg" fullWidth aria-labelledby="project-preview-title"
      PaperProps={{ className: "project-preview" }}>
      <header className="preview-heading">
        <h2 id="project-preview-title">{t(project.title)}</h2>
        <IconButton onClick={onClose} aria-label={t("Close")} color="inherit"><CloseIcon /></IconButton>
      </header>
      <div className="preview-body">
        <PreviewMedia key={currentMedia.src} media={currentMedia} placeholder={project.image}
          label={`${project.title} — ${t("Demonstration")} ${index + 1}`} />
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
            <ul>{newestFirst.map(({ number, date, note }) => {
              const label = <><strong>V{number}</strong> {date
                ? <time dateTime={date}>{dateFormat.format(new Date(date))}</time>
                : t("In progress")}</>;
              return (
                <li key={number} className={note ? "preview-release" : undefined}>
                  {note ? (
                    <details name={`${project.url}-releases`}>
                      <summary>{label}</summary>
                      <p>{t(note)}</p>
                    </details>
                  ) : label}
                </li>
              );
            })}</ul>
          </section>
        )}
      </div>
    </Dialog>
  );
}
