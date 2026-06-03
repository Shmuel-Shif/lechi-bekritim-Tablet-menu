/**
 * Converts dish PNGs to WebP with slug filenames.
 * Run: node scripts/convert-dishes-to-webp.mjs
 */
import { readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DISHES_DIR = path.join(__dirname, '..', 'assets', 'images', 'dishes');

/** Hebrew filename (as on disk) → slug id for webp */
const FILE_TO_ID = {
  'פלטת סלטים לפתיחה.png': 'salad-plate',
  'חומוס הבית.png': 'hummus',
  'אנטיפסטי צבעוני_.png': 'antipasti',
  'פטריות חמות.png': 'mushrooms',
  'צ_יפס פריך.png': 'fries',
  'שעועית ירוקה מוקפצת_.png': 'green-beans',
  'תפוחי אדמה אפויים.png': 'baked-potatoes',
  'השניצל של השף.png': 'schnitzel',
  'סטייק פרגית בגריל.png': 'chicken-steak',
  'פילה דניס בתנור.png': 'denis',
  'נתח סלמון צרוב.png': 'salmon',
  'מתי סלמון צרוב.png': 'salmon',
  'נודלס סלמון אסייתי.png': 'noodles',
  'אורז לבן עסיסי.png': 'white-rice',
  'טורטייה סלמון ואבוקדו_.png': 'tortilla-salmon',
  'סלט פרגית עשיר.png': 'chicken-salad',
  'סלט קצוץ ישראלי.png': 'israeli-salad',
  'סלט עלים ירוקים_.png': 'green-salad',
  'פלטת פירות העונה.png': 'fruit-plate',
  'שייק פירות מרענן.png': 'fruit-shake',
  'קוקה קולה.png': 'coke',
  'קוקה קולה זירו.png': 'coke-zero',
  'פיוזטי.png': 'fuzetea',
  'סודה.png': 'soda',
  'מים מינרלים.png': 'water',
  'אספרסו.png': 'espresso',
  'קפה הפוך.png': 'cappuccino',
  'קפה שחור.png': 'black-coffee',
  'קפה קר ומרענן.png': 'iced-coffee',
  'תה חם עם נענע.png': 'mint-tea',
};

const WEBP_QUALITY = 85;

async function main() {
  const files = await readdir(DISHES_DIR);
  const pngs = files.filter((f) => f.toLowerCase().endsWith('.png'));

  for (const png of pngs) {
    const id = FILE_TO_ID[png];
    if (!id) {
      console.warn(`Skip (no mapping): ${png}`);
      continue;
    }

    const inputPath = path.join(DISHES_DIR, png);
    const outPath = path.join(DISHES_DIR, `${id}.webp`);

    const { size: before } = await import('node:fs/promises').then((fs) =>
      fs.stat(inputPath)
    );

    await sharp(inputPath)
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(outPath);

    const { size: after } = await import('node:fs/promises').then((fs) =>
      fs.stat(outPath)
    );

    await unlink(inputPath);
    const pct = ((1 - after / before) * 100).toFixed(0);
    console.log(`${png} → ${id}.webp (−${pct}%)`);
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
