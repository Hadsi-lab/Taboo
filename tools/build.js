// Builds two outputs from src/:
//   dist/artifact.html  - page body for publishing as a claude.ai Artifact
//   index.html          - standalone page for any static host (GitHub Pages etc.), installable + offline
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const cards = fs.readFileSync(path.join(root, 'src/cards.js'), 'utf8');
const game = fs.readFileSync(path.join(root, 'src/game.html'), 'utf8').replace('/*CARDS*/', () => cards);

fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/artifact.html'), game);

const head = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Don't Say It">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);box-sizing:border-box}[hidden]{display:none!important}</style>
`;
const sw = `<script>if ('serviceWorker' in navigator && location.protocol === 'https:') { addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {})); }</script>`;
fs.writeFileSync(path.join(root, 'index.html'), head + game.replace(/(<\/style>\n)/, '$1</head>\n<body>\n') + '\n' + sw + '\n</body>\n</html>\n');
console.log('built dist/artifact.html and index.html');
