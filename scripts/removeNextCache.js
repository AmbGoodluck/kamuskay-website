// scripts/removeNextCache.js
// Cross-platform script to remove the .next/cache directory

const fs = require('fs');
const path = require('path');

const cachePath = path.join(__dirname, '..', '.next', 'cache');

function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`Removed: ${dirPath}`);
  } else {
    console.log(`Not found: ${dirPath}`);
  }
}

removeDir(cachePath);
