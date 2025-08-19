// scripts/structure.js
import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();

// Ignore lists for a clean output
const ignoredFolders = new Set([
  'node_modules',
  '.git',
  '.vscode',
  'dist',
  'build',
  'out',
  '.next',    // Kept for general use, even if not in this project
  '.svelte-kit',
  '.venv',
  'venv',
]);

const ignoredFiles = new Set([
  'package-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
  '.env',
  '.env.local',
  '.DS_Store',
]);

const ignoredExtensions = new Set([
  '.log',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.svg',
  '.ico',
  '.webp',
  '.pdf',
  '.mp4',
]);

function generateTree(directory, prefix = '') {
  let files;
  try {
    files = fs.readdirSync(directory);
  } catch (error) {
    // Ignore directories we can't read (e.g., due to permissions)
    return;
  }

  // Process files to determine which to show
  const items = files.map(file => {
    const fullPath = path.join(directory, file);
    try {
      const stats = fs.statSync(fullPath);
      return { file, stats, fullPath };
    } catch (e) {
      return null; // Ignore files that can't be stat'd
    }
  }).filter(item => {
    if (!item) return false; // Remove nulls from failed stats
    if (item.stats.isDirectory()) {
      return !ignoredFolders.has(item.file);
    }
    return !ignoredFiles.has(item.file) && !ignoredExtensions.has(path.extname(item.file));
  });

  // Print the filtered list
  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    console.log(prefix + connector + item.file);

    if (item.stats.isDirectory()) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      generateTree(item.fullPath, newPrefix);
    }
  });
}

console.log(`\nProject Structure for: ${path.basename(rootDir)}\n`);
console.log(`./${path.basename(rootDir)}`);
generateTree(rootDir);
console.log('\n');