/** Фото из папки public/Image (синхронизировано с папкой Image в корне проекта) */
const IMAGE_FILES = [
  'Screenshot from 2026-02-23 16-48-50.png',
  'Screenshot from 2026-02-23 16-49-04.png',
  'Screenshot from 2026-02-23 16-49-20.png',
  'Screenshot from 2026-02-23 16-49-34.png',
  'Screenshot from 2026-02-23 16-50-16.png',
  'Screenshot from 2026-02-23 16-50-33.png',
  'Screenshot from 2026-02-23 16-50-46.png',
  'Screenshot from 2026-02-23 16-51-17.png',
  'Screenshot from 2026-02-23 16-52-27.png',
  'Screenshot from 2026-02-23 16-52-40.png',
  'Screenshot from 2026-02-23 16-52-48.png',
  'Screenshot from 2026-02-23 16-53-13.png',
  'Screenshot from 2026-02-23 16-53-23.png',
  'Screenshot from 2026-02-23 16-53-34.png',
  'Screenshot from 2026-02-23 16-54-23.png',
  'Screenshot from 2026-02-23 16-54-42.png',
  'Screenshot from 2026-02-23 16-54-51.png',
];

function imagePath(filename: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}Image/${encodeURIComponent(filename)}`;
}

/** Фон главного экрана */
export const heroImage = imagePath(IMAGE_FILES[0]);

/** Фото мастера в блоке «О мастере» */
export const masterImage = imagePath(IMAGE_FILES[1]);

/**
 * Портфолио: 9 фото, равномерно по времени — гармоничная сетка (брови / губы / веки по кругу).
 */
const PORTFOLIO_IMAGE_FILES = [
  IMAGE_FILES[2],   // 16-49-20
  IMAGE_FILES[4],   // 16-50-16
  IMAGE_FILES[6],   // 16-50-46
  IMAGE_FILES[8],   // 16-52-27
  IMAGE_FILES[10],  // 16-52-48
  IMAGE_FILES[11],  // 16-53-13
  IMAGE_FILES[13],  // 16-53-34
  IMAGE_FILES[14],  // 16-54-23
  IMAGE_FILES[16],  // 16-54-51
];

export const portfolioImages = PORTFOLIO_IMAGE_FILES.map(imagePath);
