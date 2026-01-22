# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Justin Luk, hosted at jluk.me via GitHub Pages. Pure static site with no build process.

## Tech Stack

- **HTML/CSS/Vanilla JS** - No frameworks, no build tools
- **Font**: IBM Plex Sans (Google Fonts)
- **Hosting**: GitHub Pages with custom domain (CNAME: jluk.me)

## Development

Open `index.html` directly in a browser to preview. No server or build step required.

## Deployment

Push to `main` branch - GitHub Pages auto-deploys.

## File Structure

- `index.html` - Single-page portfolio with all content and inline JavaScript
- `styles.css` - All styling including CSS variables, animations, responsive design
- `music.mp3` - Background audio for MySpace-style music player
- `screenshots/` - Card images (your-pm-card.png, justin.jpeg)
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

## Interactive Trading Cards

"Building Now" section features Pokemon-style trading cards instead of screenshots:

### PM Roast Card (`.pm-card-*`)
- Pink/Vision theme (#ec4899, #db2777)
- Front: Card stats, moves, flavor text, pmroast.com branding
- Back: PM ROAST badge, archetype reveal, career score
- Image: `screenshots/your-pm-card.png`

### Personal Site Card (`.jluk-card-*`)
- Purple/Strategy theme (#8b5cf6, #7c3aed)
- Front: "Ship It" and "Vibe Code" moves, jluk.me branding
- Back: "Built by Justin Luk", vibe score
- Image: `screenshots/justin.jpeg`

### Card Interactions (vanilla JS)
- **Click to flip** - 3D flip animation between front/back
- **Hover tilt** - 3D perspective tilt following mouse position
- **Holographic glare** - Light effect follows cursor on hover
- **Glow animation** - Pulsing background glow behind cards

### Card CSS Structure
Each card has matching class prefixes (`.pm-card-*` or `.jluk-card-*`):
- `-container` - Wrapper with glow effect
- `-flip` - Perspective container for 3D transforms
- `-inner` - Transform target for flip animation
- `-front` / `-back` - Card faces with backface-visibility
- `-header`, `-image-frame`, `-moves`, `-flavor`, `-footer` - Card sections

## Background

Animated forest gradient (`.bg-gradient`) with subtle green shades against near-black, using layered pseudo-elements for shimmer effects.
