# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Justin Luk, hosted at jluk.me via GitHub Pages. Pure static site with no build process.

## Tech Stack

- **HTML/CSS only** - No JavaScript framework, no build tools
- **Font**: IBM Plex Sans (Google Fonts)
- **Hosting**: GitHub Pages with custom domain (CNAME: jluk.me)

## Development

Open `index.html` directly in a browser to preview. No server or build step required.

## Deployment

Push to `main` branch - GitHub Pages auto-deploys.

## File Structure

- `index.html` - Single-page portfolio with all content
- `styles.css` - All styling including CSS variables, animations, responsive design
- `music.mp3` - Background audio for MySpace-style music player
- `screenshots/` - Project screenshot images (pm-roast.png, portfolio.png)
- `CNAME` - Custom domain configuration

## Design System

CSS variables in `:root`:
- `--bg`, `--bg-elevated` - Background colors (dark theme)
- `--text`, `--text-secondary`, `--text-muted` - Text hierarchy
- `--border`, `--border-hover` - Border colors
- `--max-width` - Content width constraint (760px)

## Key Sections

Hero → About → Building Now (projects) → Experience (CV) → Education → Things I've Launched → Projects & Writing → 2026 Personal Goals → Contact

## Fixed UI Elements

- **Social sidebar** (`.social-sidebar`) - Fixed left side, LinkedIn/X/GitHub icons, hidden on mobile
- **Music player** (`.music-player`) - Fixed bottom-right, MySpace-style audio toggle

## Project Cards

"Building Now" section uses `.project-card` with:
- `.project-screenshot` - 16:10 aspect ratio image container
  - Add `.has-video` class for hover video effect (static img → video on hover)
  - Videos auto-play on hover, reset on mouse leave
- `.project-status` - "Active" badge
- `.project-tech` - Tech stack footer

Current projects: PM Roast (pmroast.com), Portfolio (jluk.me)

Assets needed in `screenshots/`:
- `pm-roast.png` - 3D mockup static image
- `pm-roast-demo.mp4` - ~2s screen recording of LLM streaming
- `portfolio.png` - Portfolio screenshot
