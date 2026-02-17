# Image Assets

Static image assets for Urgent Care Indy, organized to match site architecture.

## Directory Structure

| Path | Purpose |
|------|---------|
| `branding/` | Logos, favicons, social/Open Graph images |
| `home/hero/` | Hero section backgrounds |
| `home/trust-signals/` | Feature section graphics (e.g. trust badges, marquee assets) |
| `services/urgent-care/` | Imagery for urgent care (bandages, exam, etc.) |
| `services/diagnostics/` | Conceptual imagery (labs, X-ray, microscope) |
| `services/occ-med/` | Occupational health (workers, DOT, drug screening) |
| `clinic/exterior/` | Building, parking, signage |
| `clinic/interior/` | Lobby, waiting room, exam rooms |
| `clinic/providers/` | Team and provider photos |
| `employers/` | Corporate/B2B imagery (workplace, HR, compliance) |
| `ui/` | Shared UI elements: patterns, abstract shapes, textures |

**Why this split:**  
- **Clinic** = real photos of your location (building, lobby).  
- **Services** = conceptual photos (microscope, bandage, worker).  
- **UI** = non-photo assets (patterns, blobs) for visual flair.

## Naming Convention

- Use **kebab-case** for all filenames.
- Examples: `hero-waiting-room.jpg`, `logo-primary.svg`, `og-default.png`, `provider-dr-smith.jpg`.
- Keep names short and descriptive; add size or variant only when needed (e.g. `icon-192.png`, `icon-512.png`).

## Git

Empty folders are kept in the repo via `.gitkeep` in each leaf directory so the structure is preserved before you add JPGs/PNGs.
