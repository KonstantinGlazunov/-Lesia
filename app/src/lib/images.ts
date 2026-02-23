/** Фото из папки public/Image (скриншоты из Instagram) */
const IMAGE_FILES = [
  'Screenshot from 2026-02-23 16-48-50.png',
  'Screenshot from 2026-02-23 16-49-04.png',
  'Screenshot from 2026-02-23 16-49-20.png',
  'Screenshot from 2026-02-23 16-49-34.png',
  'Screenshot from 2026-02-23 16-49-48.png',
  'Screenshot from 2026-02-23 16-50-02.png',
  'Screenshot from 2026-02-23 16-50-16.png',
  'Screenshot from 2026-02-23 16-50-33.png',
  'Screenshot from 2026-02-23 16-50-46.png',
  'Screenshot from 2026-02-23 16-51-00.png',
  'Screenshot from 2026-02-23 16-51-17.png',
  'Screenshot from 2026-02-23 16-51-47.png',
  'Screenshot from 2026-02-23 16-52-00.png',
  'Screenshot from 2026-02-23 16-52-27.png',
  'Screenshot from 2026-02-23 16-52-40.png',
  'Screenshot from 2026-02-23 16-52-48.png',
  'Screenshot from 2026-02-23 16-53-13.png',
  'Screenshot from 2026-02-23 16-53-23.png',
  'Screenshot from 2026-02-23 16-53-34.png',
  'Screenshot from 2026-02-23 16-53-50.png',
  'Screenshot from 2026-02-23 16-54-13.png',
  'Screenshot from 2026-02-23 16-54-23.png',
  'Screenshot from 2026-02-23 16-54-42.png',
  'Screenshot from 2026-02-23 16-54-51.png',
];

function imagePath(filename: string) {
  return `/Image/${encodeURIComponent(filename)}`;
}

/** Фон главного экрана */
export const heroImage = imagePath(IMAGE_FILES[0]);

/** Фото мастера в блоке «О мастере» */
export const masterImage = imagePath(IMAGE_FILES[1]);

/** Фото для портфолио (9 штук: брови, губы, веки) */
export const portfolioImages = IMAGE_FILES.slice(2, 11).map(imagePath);
