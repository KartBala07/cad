# Torque — FRC Onshape Academy

A Duolingo-style learning app that teaches FRC students how to design robots
in Onshape, from absolute basics to advanced/pro workflows.

## Features

- **24 bite-sized lessons** across 4 stages (Onshape Foundations → Power &
  Motion → Whole-Robot Design → Pro Workflow), each with slides, an
  illustration, and a quick-check quiz.
- **Text-to-speech**: every lesson slide can be read aloud via the browser's
  built-in Web Speech API, with voice and speed controls.
- **Duolingo-style path map**: a winding skill path with locked/unlocked/
  completed lesson nodes, per-stage progress bars, and an overall course
  progress bar.
- **XP, streaks, and progress tracking**, all persisted to `localStorage` —
  no backend required.
- **Dark + lime green theme** throughout.
- **Resources page** linking out to real material on
  [FRCDesign.org](https://frcdesign.org/) and Onshape's own Learning Center —
  the curriculum here is structured after FRCDesign.org's own staged
  Learning Course.

This is an independent educational project and is not affiliated with
Onshape, FRCDesign.org, or FIRST.

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS
- React Router (hash-based, so it works from a static file host with no
  server-side rewrite rules)
- Browser `SpeechSynthesis` API for text-to-speech
- `localStorage` for progress persistence — no backend/database

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build
```

## Project structure

```
src/
  data/          # curriculum content (stages, lessons, slides, quizzes) + resource links
  lib/           # progress/XP/streak store (React context + localStorage), TTS hook
  components/    # Icon set, path nodes, progress bar, layout, TTS controls
  pages/         # Home (path map), Lesson player, Resources, Profile
```
