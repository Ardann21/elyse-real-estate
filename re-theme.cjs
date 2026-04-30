const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts') || dirFile.endsWith('.css')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const brightBg = '#FBFBFA';
const darkText = '#111111';

for (const file of walkSync('./src')) {
  let content = fs.readFileSync(file, 'utf8');

  // Skip Hero.tsx mostly, or be careful with text-white
  if (file.endsWith('Hero.tsx')) {
    // Keep it as is since it's an overlay on an image
    continue;
  }

  // Swap Core Theme Colors
  content = content.replace(/bg-\[\#0A0A0A\]/g, `bg-[${brightBg}]`);
  content = content.replace(/text-\[\#E8E6E1\]/g, `text-[${darkText}]`);

  // Specific to index.css
  if (file.endsWith('index.css')) {
    content = content.replace(/--color-sand: #0A0A0A;/g, `--color-sand: ${brightBg};`);
    content = content.replace(/--color-ink: #E8E6E1;/g, `--color-ink: ${darkText};`);
  }

  // Handle transparent white to transparent black (glass borders and overlays)
  content = content.replace(/border-white\/([0-9]+)/g, 'border-black/$1');
  
  // Need to be careful with text-white in Navbar because of transparency over Hero
  if (file.endsWith('Navbar.tsx')) {
    // text-white is already conditional for the transparent un-scrolled state. Keep text-white there!
    // But change the other white/transparency
    content = content.replace(/bg-white\//g, 'bg-black/');
  } else if (file.endsWith('App.tsx') || file.endsWith('Footer.tsx') || file.endsWith('Contact.tsx') || file.endsWith('FAQ.tsx') || file.endsWith('Residences.tsx') || file.endsWith('Amenities.tsx') || file.endsWith('Vision.tsx')) {
    // For other components, replace text-white with text-black (especially borders and opacities)
    content = content.replace(/text-white\/([0-9]+)/g, 'text-black/$1');
    content = content.replace(/border-white/g, 'border-black');
    content = content.replace(/bg-white\/([0-9]+)/g, 'bg-black/$1');
    content = content.replace(/text-white/g, 'text-black');
    content = content.replace(/bg-white/g, 'bg-black');
    // But wait! Contact.tsx has an input with bg-white - wait, we just made bg-white bg-black.
  }

  fs.writeFileSync(file, content);
}
console.log('Flipped to brighter theme!');
