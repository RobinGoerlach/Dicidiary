# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Matteus campanatti
Mathias Zeibig

Get started with Tailwind CSS
https://tailwindcss.com/docs/installation/play-cdn

npm create vite@latest
git init
git config --global init.defaultBranch main

npm install
npm run dev
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D daisyui@latest

tailwind.config.js
import daisyui from "daisyui"

content: [
"./index.html",
"./src/\*_/_.{js,ts,jsx,tsx}",

plugins: [
daisyui

./src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
