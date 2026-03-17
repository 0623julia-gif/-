import fs from 'fs';
let code = fs.readFileSync('src/pages/Category.tsx', 'utf8');
code = code.replace(/referrerPolicy="no-referrer"/g, 'referrerPolicy="no-referrer"\n                loading="lazy"\n                decoding="async"');
fs.writeFileSync('src/pages/Category.tsx', code);
