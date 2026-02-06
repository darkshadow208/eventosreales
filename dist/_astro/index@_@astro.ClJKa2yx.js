/* empty css                        */
import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderScript, b as renderTemplate, A as AstroError, E as ExpectedImage, L as LocalImageUsedWrongly, M as MissingImageDimension, U as UnsupportedImageFormat, I as IncompatibleDescriptorOptions, d as UnsupportedImageConversion, t as toStyleString, N as NoImageMetadata, F as FailedToFetchRemoteImageDimensions, e as ExpectedImageOptions, f as ExpectedNotESMImage, g as InvalidImageService, h as ImageMissingAlt, i as addAttribute, s as spreadAttributes, j as ExperimentalFontsNotEnabled, k as FontFamilyNotFound, u as unescapeHTML, l as renderComponent, n as renderHead, o as renderSlot } from './astro/server.BpeNOtHH.js';
import 'piccolore';
import 'clsx';
import { joinPaths, isRemotePath } from '@astrojs/internal-helpers/path';
import { isRemoteAllowed } from '@astrojs/internal-helpers/remote';
import * as mime from 'mrmime';
import '../renderers.mjs';

const $$Astro$7 = createAstro("https://www.tusanagustin.com");
const $$ScrollToTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ScrollToTop;
  return renderTemplate`${maybeRenderHead()}<button id="scroll-to-top" class="fixed bottom-6 right-6 z-[100] p-4 bg-[#333638] text-white rounded-full shadow-2xl border-2 border-white/20 transform translate-y-20 opacity-0 transition-all duration-500 hover:scale-110 active:scale-95 group cursor-pointer" aria-label="Ir al inicio" data-astro-cid-hnzwq3ap> <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4EAC9F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-hnzwq3ap></div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="relative z-10" data-astro-cid-hnzwq3ap> <path d="m18 15-6-6-6 6" data-astro-cid-hnzwq3ap></path> </svg> </button> ${renderScript($$result, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/ui/ScrollToTop.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/ui/ScrollToTop.astro", void 0);

const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

const DEFAULT_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  960,
  // older horizontal phones
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  1920,
  // 1080p
  2048,
  // QXGA
  2560,
  // WQXGA
  3200,
  // QHD+
  3840,
  // 4K
  4480,
  // 4.5K
  5120,
  // 5K
  6016
  // 6K
];
const LIMITED_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  2048,
  // QXGA
  2560
  // WQXGA
];
const getWidths = ({
  width,
  layout,
  breakpoints = DEFAULT_RESOLUTIONS,
  originalWidth
}) => {
  const smallerThanOriginal = (w) => !originalWidth || w <= originalWidth;
  if (layout === "full-width") {
    return breakpoints.filter(smallerThanOriginal);
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  const maxSize = originalWidth ? Math.min(doubleWidth, originalWidth) : doubleWidth;
  if (layout === "fixed") {
    return originalWidth && width > originalWidth ? [originalWidth] : [width, maxSize];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      ...breakpoints
    ].filter((w) => w <= maxSize).sort((a, b) => a - b);
  }
  return [];
};
const getSizesAttribute = ({
  width,
  layout
}) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    // If screen is wider than the max size then image width is the max size,
    // otherwise it's the width of the screen
    case "constrained":
      return `(min-width: ${width}px) ${width}px, 100vw`;
    // Image is always the same width, whatever the size of the screen
    case "fixed":
      return `${width}px`;
    // Image is always the width of the screen
    case "full-width":
      return `100vw`;
    case "none":
    default:
      return void 0;
  }
};

function isESMImportedImage(src) {
  return typeof src === "object" || typeof src === "function" && "src" in src;
}
function isRemoteImage(src) {
  return typeof src === "string";
}
async function resolveSrc(src) {
  if (typeof src === "object" && "then" in src) {
    const resource = await src;
    return resource.default ?? resource;
  }
  return src;
}

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const sortNumeric = (a, b) => a - b;
function verifyOptions(options) {
  if (!options.src || !isRemoteImage(options.src) && !isESMImportedImage(options.src)) {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        JSON.stringify(options.src),
        typeof options.src,
        JSON.stringify(options, (_, v) => v === void 0 ? null : v)
      )
    });
  }
  if (!isESMImportedImage(options.src)) {
    if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
      throw new AstroError({
        ...LocalImageUsedWrongly,
        message: LocalImageUsedWrongly.message(options.src)
      });
    }
    let missingDimension;
    if (!options.width && !options.height) {
      missingDimension = "both";
    } else if (!options.width && options.height) {
      missingDimension = "width";
    } else if (options.width && !options.height) {
      missingDimension = "height";
    }
    if (missingDimension) {
      throw new AstroError({
        ...MissingImageDimension,
        message: MissingImageDimension.message(missingDimension, options.src)
      });
    }
  } else {
    if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
      throw new AstroError({
        ...UnsupportedImageFormat,
        message: UnsupportedImageFormat.message(
          options.src.format,
          options.src.src,
          VALID_SUPPORTED_FORMATS
        )
      });
    }
    if (options.widths && options.densities) {
      throw new AstroError(IncompatibleDescriptorOptions);
    }
    if (options.src.format === "svg" && options.format !== "svg" || options.src.format !== "svg" && options.format === "svg") {
      throw new AstroError(UnsupportedImageConversion);
    }
  }
}
const baseService = {
  validateOptions(options) {
    if (isESMImportedImage(options.src) && options.src.format === "svg") {
      options.format = "svg";
    }
    verifyOptions(options);
    if (!options.format) {
      options.format = DEFAULT_OUTPUT_FORMAT;
    }
    if (options.width) options.width = Math.round(options.width);
    if (options.height) options.height = Math.round(options.height);
    if (options.layout && options.width && options.height) {
      options.fit ??= "cover";
      delete options.layout;
    }
    if (options.fit === "none") {
      delete options.fit;
    }
    return options;
  },
  getHTMLAttributes(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const {
      src,
      width,
      height,
      format,
      quality,
      densities,
      widths,
      formats,
      layout,
      priority,
      fit,
      position,
      ...attributes
    } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getSrcSet(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const aspectRatio = targetWidth / targetHeight;
    const { widths, densities } = options;
    const targetFormat = options.format ?? DEFAULT_OUTPUT_FORMAT;
    let transformedWidths = (widths ?? []).sort(sortNumeric);
    let imageWidth = options.width;
    let maxWidth = Infinity;
    if (isESMImportedImage(options.src)) {
      imageWidth = options.src.width;
      maxWidth = imageWidth;
      if (transformedWidths.length > 0 && transformedWidths.at(-1) > maxWidth) {
        transformedWidths = transformedWidths.filter((width) => width <= maxWidth);
        transformedWidths.push(maxWidth);
      }
    }
    transformedWidths = Array.from(new Set(transformedWidths));
    const {
      width: transformWidth,
      height: transformHeight,
      ...transformWithoutDimensions
    } = options;
    let allWidths = [];
    if (densities) {
      const densityValues = densities.map((density) => {
        if (typeof density === "number") {
          return density;
        } else {
          return parseFloat(density);
        }
      });
      const densityWidths = densityValues.sort(sortNumeric).map((density) => Math.round(targetWidth * density));
      allWidths = densityWidths.map((width, index) => ({
        width,
        descriptor: `${densityValues[index]}x`
      }));
    } else if (transformedWidths.length > 0) {
      allWidths = transformedWidths.map((width) => ({
        width,
        descriptor: `${width}w`
      }));
    }
    return allWidths.map(({ width, descriptor }) => {
      const height = Math.round(width / aspectRatio);
      const transform = { ...transformWithoutDimensions, width, height };
      return {
        transform,
        descriptor,
        attributes: {
          type: `image/${targetFormat}`
        }
      };
    });
  },
  getURL(options, imageConfig) {
    const searchParams = new URLSearchParams();
    if (isESMImportedImage(options.src)) {
      searchParams.append("href", options.src.src);
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      searchParams.append("href", options.src);
    } else {
      return options.src;
    }
    const params = {
      w: "width",
      h: "height",
      q: "quality",
      f: "format",
      fit: "fit",
      position: "position"
    };
    Object.entries(params).forEach(([param, key]) => {
      options[key] && searchParams.append(param, options[key].toString());
    });
    const imageEndpoint = joinPaths("/.", imageConfig.endpoint.route);
    let url = `${imageEndpoint}?${searchParams}`;
    if (imageConfig.assetQueryParams) {
      const assetQueryString = imageConfig.assetQueryParams.toString();
      if (assetQueryString) {
        url += "&" + assetQueryString;
      }
    }
    return url;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q"),
      fit: params.get("fit"),
      position: params.get("position") ?? void 0
    };
    return transform;
  }
};
function getTargetDimensions(options) {
  let targetWidth = options.width;
  let targetHeight = options.height;
  if (isESMImportedImage(options.src)) {
    const aspectRatio = options.src.width / options.src.height;
    if (targetHeight && !targetWidth) {
      targetWidth = Math.round(targetHeight * aspectRatio);
    } else if (targetWidth && !targetHeight) {
      targetHeight = Math.round(targetWidth / aspectRatio);
    } else if (!targetWidth && !targetHeight) {
      targetWidth = options.src.width;
      targetHeight = options.src.height;
    }
  }
  return {
    targetWidth,
    targetHeight
  };
}

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

const cssFitValues = ["fill", "contain", "cover", "scale-down"];
function addCSSVarsToStyle(vars, styles) {
  const cssVars = Object.entries(vars).filter(([_, value]) => value !== void 0 && value !== false).map(([key, value]) => `--${key}: ${value};`).join(" ");
  if (!styles) {
    return cssVars;
  }
  const style = typeof styles === "string" ? styles : toStyleString(styles);
  return `${cssVars} ${style}`;
}

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  avis: "avif",
  // avif-sequence
  mif1: "heif",
  msf1: "heif",
  // heif-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected || "avis" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(i);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function imageMetadata(data, src) {
  let result;
  try {
    result = lookup(data);
  } catch {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  if (!result.height || !result.width || !result.type) {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  const { width, height, type, orientation } = result;
  const isPortrait = (orientation || 0) >= 5;
  return {
    width: isPortrait ? height : width,
    height: isPortrait ? width : height,
    format: type,
    orientation
  };
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

const PLACEHOLDER_BASE = "astro://placeholder";
function createPlaceholderURL(pathOrUrl) {
  return new URL(pathOrUrl, PLACEHOLDER_BASE);
}
function stringifyPlaceholderURL(url) {
  return url.href.replace(PLACEHOLDER_BASE, "");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './sharp.ByE98NkR.js'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  let originalWidth;
  let originalHeight;
  if (options.inferSize && isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    originalWidth = result.width;
    originalHeight = result.height;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  if (isESMImportedImage(clonedSrc)) {
    originalWidth = clonedSrc.width;
    originalHeight = clonedSrc.height;
  }
  if (originalWidth && originalHeight) {
    const aspectRatio = originalWidth / originalHeight;
    if (resolvedOptions.height && !resolvedOptions.width) {
      resolvedOptions.width = Math.round(resolvedOptions.height * aspectRatio);
    } else if (resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.height = Math.round(resolvedOptions.width / aspectRatio);
    } else if (!resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.width = originalWidth;
      resolvedOptions.height = originalHeight;
    }
  }
  resolvedOptions.src = clonedSrc;
  const layout = options.layout ?? imageConfig.layout ?? "none";
  if (resolvedOptions.priority) {
    resolvedOptions.loading ??= "eager";
    resolvedOptions.decoding ??= "sync";
    resolvedOptions.fetchpriority ??= "high";
    delete resolvedOptions.priority;
  } else {
    resolvedOptions.loading ??= "lazy";
    resolvedOptions.decoding ??= "async";
    resolvedOptions.fetchpriority ??= "auto";
  }
  if (layout !== "none") {
    resolvedOptions.widths ||= getWidths({
      width: resolvedOptions.width,
      layout,
      originalWidth,
      breakpoints: imageConfig.breakpoints?.length ? imageConfig.breakpoints : isLocalService(service) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS
    });
    resolvedOptions.sizes ||= getSizesAttribute({ width: resolvedOptions.width, layout });
    delete resolvedOptions.densities;
    resolvedOptions.style = addCSSVarsToStyle(
      {
        fit: cssFitValues.includes(resolvedOptions.fit ?? "") && resolvedOptions.fit,
        pos: resolvedOptions.position
      },
      resolvedOptions.style
    );
    resolvedOptions["data-astro-image"] = layout;
  }
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  const matchesValidatedTransform = (transform) => transform.width === validatedOptions.width && transform.height === validatedOptions.height && transform.format === validatedOptions.format;
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesValidatedTransform(srcSet.transform) ? imageURL : await service.getURL(srcSet.transform, imageConfig),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    })
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesValidatedTransform(srcSet.transform) ? imageURL : globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    });
  } else if (imageConfig.assetQueryParams) {
    const imageURLObj = createPlaceholderURL(imageURL);
    imageConfig.assetQueryParams.forEach((value, key) => {
      imageURLObj.searchParams.set(key, value);
    });
    imageURL = stringifyPlaceholderURL(imageURLObj);
    srcSets = srcSets.map((srcSet) => {
      const urlObj = createPlaceholderURL(srcSet.url);
      imageConfig.assetQueryParams.forEach((value, key) => {
        urlObj.searchParams.set(key, value);
      });
      return {
        ...srcSet,
        url: stringifyPlaceholderURL(urlObj)
      };
    });
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$6 = createAstro("https://www.tusanagustin.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  if (layout !== "none") {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  const { class: className, ...attributes } = { ...additionalAttributes, ...image.attributes };
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/node_modules/astro/components/Image.astro", void 0);

const $$Astro$5 = createAstro("https://www.tusanagustin.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  const useResponsive = layout !== "none";
  if (useResponsive) {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  const { class: className, ...attributes } = {
    ...imgAdditionalAttributes,
    ...fallbackImage.attributes
  };
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/node_modules/astro/components/Picture.astro", void 0);

const fontsMod = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

function filterPreloads(data, preload) {
  if (!preload) {
    return null;
  }
  if (preload === true) {
    return data;
  }
  return data.filter(
    ({ weight, style, subset }) => preload.some((p) => {
      if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) {
        return false;
      }
      if (p.style !== void 0 && p.style !== style) {
        return false;
      }
      if (p.subset !== void 0 && p.subset !== subset) {
        return false;
      }
      return true;
    })
  );
}
function checkWeight(input, target) {
  const trimmedInput = input.trim();
  if (trimmedInput.includes(" ")) {
    return trimmedInput === target;
  }
  if (target.includes(" ")) {
    const [a, b] = target.split(" ");
    const parsedInput = Number.parseInt(input);
    return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
  }
  return input === target;
}

const $$Astro$4 = createAstro("https://www.tusanagustin.com");
const $$Font = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Font;
  const { internalConsumableMap } = fontsMod;
  if (!internalConsumableMap) {
    throw new AstroError(ExperimentalFontsNotEnabled);
  }
  const { cssVariable, preload = false } = Astro2.props;
  const data = internalConsumableMap.get(cssVariable);
  if (!data) {
    throw new AstroError({
      ...FontFamilyNotFound,
      message: FontFamilyNotFound.message(cssVariable)
    });
  }
  const filteredPreloadData = filterPreloads(data.preloadData, preload);
  return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/node_modules/astro/components/Font.astro", void 0);

const assetQueryParams = undefined;
							const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[],"responsiveStyles":false};
							Object.defineProperty(imageConfig, 'assetQueryParams', {
								value: assetQueryParams,
								enumerable: false,
								configurable: true,
							});
							const getImage = async (options) => await getImage$1(options, imageConfig);

const logoVerde$1 = new Proxy({"src":"/_astro/logo-verde.rX9kckO8.webp","width":300,"height":156,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/logo-verde.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/logo-verde.webp");
							return target[name];
						}
					});

const $$SearchModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="search-modal" class="fixed inset-0 z-[150] bg-black/40 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 flex items-center justify-center px-4"> <!-- Modal Content --> <div class="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl p-6 md:p-8 transform scale-95 transition-transform duration-300 relative overflow-hidden"> <!-- Close Button --> <button id="close-search" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 z-10" aria-label="Cerrar búsqueda"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"></path></svg> </button> <div class="flex flex-col items-center text-center"> <!-- Logo --> ${renderComponent($$result, "Image", $$Image, { "src": logoVerde$1, "alt": "San Agust\xEDn Logo", "class": "h-12 md:h-16 w-auto mb-6 object-contain", "width": 150, "height": 78, "loading": "lazy" })} <h2 class="text-xl md:text-2xl font-bold text-[#2D3748] mb-4" style="font-family: 'Poppins', sans-serif;">
¿Qué estás buscando?
</h2> <!-- Search Form --> <form id="search-form" class="w-full relative group"> <input type="text" id="search-input" placeholder="Escribe aquí tu búsqueda..." class="w-full bg-gray-100 border-2 border-transparent focus:border-[#4EAC9F] focus:bg-white text-gray-800 px-6 py-3.5 rounded-2xl outline-none transition-all text-base placeholder:text-gray-400 font-normal" style="font-family: 'Poppins', sans-serif;"> <button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2 bg-[#333638] text-white p-2.5 rounded-xl hover:bg-[#4EAC9F] transition-all shadow-lg active:scale-95"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> </button> </form> <p class="mt-6 text-gray-400 text-sm font-light italic" style="font-family: 'Poppins', sans-serif;">
Presiona Enter para buscar lo mejor para tu próximo evento
</p> </div> <!-- Decorative background elements --> <div class="absolute -top-24 -left-24 w-48 h-48 bg-[#4EAC9F]/5 rounded-full blur-3xl"></div> <div class="absolute -bottom-24 -right-24 w-48 h-48 bg-[#D1C1A3]/10 rounded-full blur-3xl"></div> </div> </div> ${renderScript($$result, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/ui/SearchModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/ui/SearchModal.astro", void 0);

const $$Astro$3 = createAstro("https://www.tusanagustin.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta itemprop="name" content="HISTORIAS DE EVENTOS REALES"><meta itemprop="description" content="HISTORIAS DE EVENTOS REALES"><meta itemprop="image" content=" https://www.tusanagustin.com/modules/iblog/img/post/default.jpg"><!-- Open Graph para Facebook--><meta property="og:title" content="HISTORIAS DE EVENTOS REALES"><meta property="og:type" content="article"><meta property="og:url" content="https://www.tusanagustin.com/historias-de-eventos-reales"><meta property="og:image" content="https://www.tusanagustin.com/modules/iblog/img/post/default.jpg"><meta property="og:description" content="HISTORIAS DE EVENTOS REALES"><meta property="og:site_name" content="Tu San Agustin"><meta property="og:locale" content="es_LA"><title>  HISTORIAS DE EVENTOS REALES  | Tu San Agustin</title>${renderHead()}</head> <meta name="keywords" content="Viajes y turismo san agustín"> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta name="csrf-token" content="Sn6woLackUqYanWzaUZGKRRqVT9twqtK2XgC4UVm"> <title>  BODAS IGUALITARIAS EN MEDELLÍN | Tu San Agustin</title> <body class="min-h-screen font-sans antialiased"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ScrollToTop", $$ScrollToTop, {})} ${renderComponent($$result, "SearchModal", $$SearchModal, {})} </body></html>`;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/layouts/Layout.astro", void 0);

const bannerImage = new Proxy({"src":"/_astro/banner_tu_san_agustin_lugares_para_eventos_historias_001.CMchUtyK.webp","width":2955,"height":1164,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/banner_tu_san_agustin_lugares_para_eventos_historias_001.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/banner_tu_san_agustin_lugares_para_eventos_historias_001.webp");
							return target[name];
						}
					});

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-[calc(100%-8px)] md:w-[calc(100%-16px)] max-w-[2000px] h-[650px] md:h-[800px] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden mx-auto" data-astro-cid-kggsjsm4> ${renderComponent($$result, "Image", $$Image, { "src": bannerImage, "class": "absolute inset-0 w-full h-full object-cover banner-zoom-animation", "style": "object-position: center;", "alt": "Amor Sin etiquetas", "loading": "eager", "fetchpriority": "high", "width": 1600, "height": 900, "widths": [480, 768, 1024, 1280, 1600], "sizes": "(max-width: 768px) 100vw, 1600px", "format": "avif", "quality": 75, "data-astro-cid-kggsjsm4": true })} <!-- Text Overlay --> <div class="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-24 text-white z-20 pointer-events-none" data-astro-cid-kggsjsm4> <div class="text-center max-w-4xl mx-auto" data-astro-cid-kggsjsm4> <h1 class="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold drop-shadow-2xl leading-tight tracking-tight mb-2" style="font-family: 'Poppins', sans-serif;" data-astro-cid-kggsjsm4>
Historias de
</h1> <h1 class="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold drop-shadow-2xl leading-tight tracking-tight" style="font-family: 'Poppins', sans-serif;" data-astro-cid-kggsjsm4>
Eventos reales
</h1> <p class="text-2xl md:text-3xl lg:text-4xl font-poppins italic drop-shadow-2xl leading-tight mt-4 opacity-90 hidden" data-astro-cid-kggsjsm4>
Crafting Your Legacy in Paradise
</p> </div> </div> <!-- Navigation Bar (Top) --> <div class="absolute top-0 left-0 right-0 z-30 w-full px-4 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-start justify-between gap-5 bg-gradient-to-b from-black/90 via-black/40 to-transparent" data-astro-cid-kggsjsm4> <!-- Left Menu --> <div class="hidden md:flex flex-1 justify-start gap-8 pb-1 items-center" data-astro-cid-kggsjsm4> <a href="https://www.tusanagustin.com/" class="nav-text-link" data-astro-cid-kggsjsm4>Inicio</a> <!-- Eventos Dropdown --> <div class="relative group" data-astro-cid-kggsjsm4> <button class="nav-text-link flex items-center gap-1 focus:outline-none" data-astro-cid-kggsjsm4>
Eventos
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180" data-astro-cid-kggsjsm4><path d="m6 9 6 6 6-6" data-astro-cid-kggsjsm4></path></svg> </button> <div class="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 text-left overflow-hidden border border-white/20" data-astro-cid-kggsjsm4> <a href="https://www.tusanagustin.com/eventos/bodas" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Bodas</a> <a href="https://www.tusanagustin.com/eventos/bodas-destino" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Bodas Destino</a> <a href="https://www.tusanagustin.com/eventos/15-anos" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Quinces Años</a> <a href="https://www.tusanagustin.com/eventos/corporativos" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Corporativos</a> <a href="https://www.tusanagustin.com/eventos/sociales" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Sociales</a> </div> </div> <!-- Servicios Dropdown --> <div class="relative group" data-astro-cid-kggsjsm4> <button class="nav-text-link flex items-center gap-1 focus:outline-none" data-astro-cid-kggsjsm4>
Servicios
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180" data-astro-cid-kggsjsm4><path d="m6 9 6 6 6-6" data-astro-cid-kggsjsm4></path></svg> </button> <div class="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 text-left overflow-hidden border border-white/20" data-astro-cid-kggsjsm4> <a href="https://www.tusanagustin.com/servicios/catering" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Catering</a> <a href="https://www.tusanagustin.com/servicios/decoracion" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Decoración</a> <a href="https://www.tusanagustin.com/servicios/event-wedding-planner" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Event & Wedding Planner</a> <a href="https://www.tusanagustin.com/servicios/lugares" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Lugares para eventos</a> <a href="https://www.tusanagustin.com/servicios/artistas" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Artistas y espectáculos</a> <a href="https://www.tusanagustin.com/servicios/fotografia" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Fotografía y video</a> <a href="https://www.tusanagustin.com/servicios/audiovisuales" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Ayudas audiovisuales</a> <a href="https://www.tusanagustin.com/servicios/carros-antiguos" class="block px-6 py-3 text-gray-800 hover:bg-[#4EAC9F] hover:text-white transition-colors font-medium border-b border-gray-100 last:border-0" data-astro-cid-kggsjsm4>Carros antiguos</a> </div> </div> <!-- Added Historias based on screenshot, though not in previous menu --> <a href="https://www.tusanagustin.com/historias-de-eventos-reales" class="nav-text-link" data-astro-cid-kggsjsm4>Historias</a> </div> <!-- Right Menu --> <div class="hidden md:flex flex-1 justify-end gap-8 pb-1 items-center" data-astro-cid-kggsjsm4> <a href="https://www.tusanagustin.com/blog" class="nav-text-link" data-astro-cid-kggsjsm4>Blog</a> <a href="https://www.tusanagustin.com/bodas-destino" class="nav-text-link" data-astro-cid-kggsjsm4>Bodas de Destino</a> <a href="https://www.tusanagustin.com/quienes-somos" class="nav-text-link" data-astro-cid-kggsjsm4>Nosotros</a> </div> </div> </div>   ${renderScript($$result, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/Banner.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/Banner.astro", void 0);

const imgMain1 = new Proxy({"src":"/_astro/Screenshot_5_converted.B2Tktzmx.webp","width":1017,"height":793,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_5_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_5_converted.webp");
							return target[name];
						}
					});

const imgSub1_1 = new Proxy({"src":"/_astro/Screenshot_6_converted.DStmsz7x.webp","width":331,"height":265,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_6_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_6_converted.webp");
							return target[name];
						}
					});

const imgSub1_2 = new Proxy({"src":"/_astro/Screenshot_7_converted.fKtpB42E.webp","width":337,"height":264,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_7_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_7_converted.webp");
							return target[name];
						}
					});

const imgSub1_3 = new Proxy({"src":"/_astro/Screenshot_8_converted.Co0Acq_s.webp","width":332,"height":265,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_8_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_8_converted.webp");
							return target[name];
						}
					});

const imgMain2 = new Proxy({"src":"/_astro/001_tu_san_agustin_15_anos_mariam_forest_lugares_para_eventos_historias.CU84Kgwb.webp","width":2497,"height":1956,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/001_tu_san_agustin_15_anos_mariam_forest_lugares_para_eventos_historias.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/001_tu_san_agustin_15_anos_mariam_forest_lugares_para_eventos_historias.webp");
							return target[name];
						}
					});

const imgSub2_1 = new Proxy({"src":"/_astro/Screenshot_1_converted.B6221Dv6.webp","width":442,"height":372,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_1_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_1_converted.webp");
							return target[name];
						}
					});

const imgSub2_2 = new Proxy({"src":"/_astro/Screenshot_2_converted.DVjUOIX9.webp","width":446,"height":373,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_2_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_2_converted.webp");
							return target[name];
						}
					});

const imgSub2_3 = new Proxy({"src":"/_astro/Screenshot_3_converted.8cyUN60M.webp","width":443,"height":372,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_3_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Screenshot_3_converted.webp");
							return target[name];
						}
					});

const $$HeroHistory = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#FDF5E9] pt-20 pb-16 px-4 font-poppins" data-astro-cid-iye3kqpv> <div class="max-w-7xl mx-auto text-center" data-astro-cid-iye3kqpv> <!-- Main Title --> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins" data-astro-cid-iye3kqpv> <span class="text-[#4EAC9F]" data-astro-cid-iye3kqpv>Detrás de</span> <span class="text-[#333638]" data-astro-cid-iye3kqpv>cada Evento</span> </h1> <!-- Subtitle --> <h2 class="text-3xl md:text-4xl text-[#4EAC9F] mb-8 font-poppins" data-astro-cid-iye3kqpv>
Hay una historia
</h2> <!-- Description --> <p class="max-w-4xl mx-auto text-[#333638] text-lg leading-relaxed mb-10 font-poppins" data-astro-cid-iye3kqpv>
Revive la magia de bodas, 15 años y celebraciones empresariales. Explora nuestro portafolio de éxitos y descubre las historias detrás de los mejores lugares y locaciones para eventos inolvidables.
</p> <!-- Testimonials Button --> <div class="inline-flex items-center bg-[#333638] rounded-full px-8 py-3 mb-20 shadow-lg" data-astro-cid-iye3kqpv> <span class="text-white font-semibold mr-4" data-astro-cid-iye3kqpv>Ver testimonios</span> <div class="flex gap-1" data-astro-cid-iye3kqpv> ${[...Array(5)].map(() => renderTemplate`<svg class="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-iye3kqpv> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-iye3kqpv></path> </svg>`)} </div> </div> <!-- Clusters --> <div class="grid md:grid-cols-2 gap-12 text-left" data-astro-cid-iye3kqpv> <!-- Bodas Cluster --> <div class="space-y-6" data-astro-cid-iye3kqpv> <h3 class="text-3xl font-bold text-[#4EAC9F] text-center mb-6 font-poppins" data-astro-cid-iye3kqpv>Bodas</h3> <div class="space-y-2" data-astro-cid-iye3kqpv> <!-- Main Big Image --> <div class="rounded-[32px] overflow-hidden aspect-square shadow-xl" data-astro-cid-iye3kqpv> ${renderComponent($$result, "Image", $$Image, { "src": imgMain1, "alt": "Boda Principal", "class": "w-full h-full object-cover", "data-astro-cid-iye3kqpv": true })} </div> <!-- Small Images Grid --> <div class="grid grid-cols-3 gap-2" data-astro-cid-iye3kqpv> <div class="rounded-[16px] overflow-hidden aspect-square shadow-md" data-astro-cid-iye3kqpv> ${renderComponent($$result, "Image", $$Image, { "src": imgSub1_1, "alt": "Boda Detalle 1", "class": "w-full h-full object-cover", "data-astro-cid-iye3kqpv": true })} </div> <div class="rounded-[16px] overflow-hidden aspect-square shadow-md" data-astro-cid-iye3kqpv> ${renderComponent($$result, "Image", $$Image, { "src": imgSub1_2, "alt": "Boda Detalle 2", "class": "w-full h-full object-cover", "data-astro-cid-iye3kqpv": true })} </div> <div class="rounded-[16px] overflow-hidden aspect-square shadow-md" data-astro-cid-iye3kqpv> ${renderComponent($$result, "Image", $$Image, { "src": imgSub1_3, "alt": "Boda Detalle 3", "class": "w-full h-full object-cover", "data-astro-cid-iye3kqpv": true })} </div> </div> </div> </div> <!-- 15 Años Cluster --> <div class="space-y-6" data-astro-cid-iye3kqpv> <h3 class="text-3xl font-bold text-[#4EAC9F] text-center mb-6 font-poppins" data-astro-cid-iye3kqpv>Fiestas de 15 Años</h3> <div class="space-y-2" data-astro-cid-iye3kqpv> <!-- Main Big Image --> <div class="rounded-[32px] overflow-hidden aspect-square shadow-xl" data-astro-cid-iye3kqpv> ${renderComponent($$result, "Image", $$Image, { "src": imgMain2, "alt": "15 A\xF1os Principal", "class": "w-full h-full object-cover", "data-astro-cid-iye3kqpv": true })} </div> <!-- Small Images Grid --> <div class="grid grid-cols-3 gap-2" data-astro-cid-iye3kqpv> <div class="rounded-[16px] overflow-hidden aspect-square shadow-md" data-astro-cid-iye3kqpv> ${renderComponent($$result, "Image", $$Image, { "src": imgSub2_1, "alt": "15 A\xF1os Detalle 1", "class": "w-full h-full object-cover", "data-astro-cid-iye3kqpv": true })} </div> <div class="rounded-[16px] overflow-hidden aspect-square shadow-md" data-astro-cid-iye3kqpv> ${renderComponent($$result, "Image", $$Image, { "src": imgSub2_2, "alt": "15 A\xF1os Detalle 2", "class": "w-full h-full object-cover", "data-astro-cid-iye3kqpv": true })} </div> <div class="rounded-[16px] overflow-hidden aspect-square shadow-md" data-astro-cid-iye3kqpv> ${renderComponent($$result, "Image", $$Image, { "src": imgSub2_3, "alt": "15 A\xF1os Detalle 3", "class": "w-full h-full object-cover", "data-astro-cid-iye3kqpv": true })} </div> </div> </div> </div> </div> </div> </section> `;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/HeroHistory.astro", void 0);

const $$Astro$2 = createAstro("https://www.tusanagustin.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const {
    title,
    description,
    image,
    variant = "default",
    url = "#",
    width = 450,
    height = 450,
    loading = "lazy",
    fetchpriority = "auto",
    borderColor = "#FDF5E9",
    largeArrow = false
  } = Astro2.props;
  const isAsset = typeof image !== "string";
  return renderTemplate`${maybeRenderHead()}<div class="swiper-slide group cursor-grab active:cursor-grabbing pb-12 text-center"> <div class="relative w-full h-80 md:h-64 mb-6"> <a${addAttribute(url, "href")} class="block w-full h-full rounded-[32px] overflow-hidden"> ${isAsset ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "alt": title, "width": width, "height": height, "loading": loading, "fetchpriority": fetchpriority, "class": "w-full h-full object-cover rounded-[32px] shadow-md pointer-events-none select-none", "widths": [400, 600, 800], "quality": 70 })}` : renderTemplate`<img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover rounded-[32px] shadow-md pointer-events-none select-none"${addAttribute(loading, "loading")}${addAttribute(fetchpriority, "fetchpriority")}${addAttribute(width, "width")}${addAttribute(height, "height")}>`} </a> <a${addAttribute(url, "href")} class="absolute -bottom-4 -right-4 bg-[#333638] text-white w-14 h-14 rounded-full flex items-center justify-center border-[6px] transition-transform group-hover:scale-110 z-20"${addAttribute(`border-color: ${borderColor};`, "style")}> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(largeArrow ? "32" : "20", "width")}${addAttribute(largeArrow ? "32" : "20", "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> </a> </div> <div class="px-4"> <h3 class="text-xl font-bold text-[#4EAC9F] mb-2" style="font-family: 'Poppins', sans-serif;"> <a${addAttribute(url, "href")} class="hover:text-[#333638] transition-colors duration-300"> ${title} </a> </h3> ${description && renderTemplate`<p class="text-[#333638] text-sm leading-relaxed" style="font-family: 'Poppins', sans-serif;">${description}</p>`} </div> </div>`;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/ui/ServiceCard.astro", void 0);

const img1 = new Proxy({"src":"/_astro/bodascampestreszonae_tu_san_agustin_lugares_para_eventos_historias_006.2M5XuE6V.webp","width":570,"height":391,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/bodascampestreszonae_tu_san_agustin_lugares_para_eventos_historias_006.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/bodascampestreszonae_tu_san_agustin_lugares_para_eventos_historias_006.webp");
							return target[name];
						}
					});

const img2 = new Proxy({"src":"/_astro/fiestade15anosvivaldi_tu_san_agustin_lugares_para_eventos_historias_007.B11k6KWE.webp","width":570,"height":391,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/fiestade15anosvivaldi_tu_san_agustin_lugares_para_eventos_historias_007.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/fiestade15anosvivaldi_tu_san_agustin_lugares_para_eventos_historias_007.webp");
							return target[name];
						}
					});

const img3 = new Proxy({"src":"/_astro/bodahaciendaelromeral_tu_san_agustin_lugares_para_eventos_historias_008.B8p0SK1l.webp","width":570,"height":391,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/bodahaciendaelromeral_tu_san_agustin_lugares_para_eventos_historias_008.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/bodahaciendaelromeral_tu_san_agustin_lugares_para_eventos_historias_008.webp");
							return target[name];
						}
					});

const img4 = new Proxy({"src":"/_astro/bodaforestcampestre_tu_san_agustin_lugares_para_eventos_historias_009.Cf9FS_KF.webp","width":570,"height":391,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/bodaforestcampestre_tu_san_agustin_lugares_para_eventos_historias_009.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/bodaforestcampestre_tu_san_agustin_lugares_para_eventos_historias_009.webp");
							return target[name];
						}
					});

const img5 = new Proxy({"src":"/_astro/image104_converted.DlH5EueN.webp","width":1379,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/image104_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/image104_converted.webp");
							return target[name];
						}
					});

const img6 = new Proxy({"src":"/_astro/image105_converted.3bfbIdjH.webp","width":1379,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/image105_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/image105_converted.webp");
							return target[name];
						}
					});

const img7 = new Proxy({"src":"/_astro/image107_converted.fzGVM7wn.webp","width":1379,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/image107_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/image107_converted.webp");
							return target[name];
						}
					});

const img8 = new Proxy({"src":"/_astro/image108_converted.DvZyhzq3.webp","width":1379,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/image108_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/image108_converted.webp");
							return target[name];
						}
					});

const img9 = new Proxy({"src":"/_astro/image109_converted.IOmlyBnU.webp","width":1379,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/image109_converted.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/image109_converted.webp");
							return target[name];
						}
					});

const img10 = new Proxy({"src":"/_astro/0J8A4840.CFhMaFbV.webp","width":4480,"height":6720,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/0J8A4840.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/0J8A4840.webp");
							return target[name];
						}
					});

const img11 = new Proxy({"src":"/_astro/MPYV8199.Bgw0o3JM.webp","width":4176,"height":2784,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/MPYV8199.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/MPYV8199.webp");
							return target[name];
						}
					});

const events = [
    {
        title: "Bodas Campestres Tu San Agustín Zona E",
        image: img1,
        url: "https://www.tusanagustin.com/historias-de-eventos-reales/bodas-campestres-tu-san-agustin-zonae"
    },
    {
        title: "Fiesta de 15 Años Centro de Eventos Salón Vivaldi, Laureles",
        image: img2,
        url: "#"
    },
    {
        title: "Boda Hacienda El Romeral",
        image: img3,
        url: "https://www.tusanagustin.com/historias-de-eventos-reales/boda-hacienda-el-romeral"
    },
    {
        title: "Boda Forest Campestre",
        image: img4,
        url: "https://www.tusanagustin.com/historias-de-eventos-reales/boda-forest-campestre"
    },
    {
        title: "Fiesta de 15 Años Gran Salon",
        image: img5,
        url: "https://www.tusanagustin.com/historias-de-eventos-reales/fiesta-de-15-anos-gran-salon"
    },
    {
        title: "Fiesta de 15 Años Villa Celeste",
        image: img6,
        url: "https://www.tusanagustin.com/historias-de-eventos-reales/fiesta-de-15-anos-villa-celeste"
    },
    {
        title: "Fiesta de 15 Años Montpellier",
        image: img7,
        url: "https://www.tusanagustin.com/historias-de-eventos-reales/fiesta-de-15-anos-montpellier"
    },
    {
        title: "Boda Igualitaria Jardín Botánico",
        image: img8,
        url: "https://www.tusanagustin.com/historias-de-eventos-reales/boda-igualitaria-jardin-botanico"
    },
    {
        title: "Boda Hacienda San Francisco",
        image: img9,
        url: "https://www.tusanagustin.com/historias-de-eventos-reales/boda-hacienda-san-francisco"
    },
    {
        title: "Bodas Campestres Tu San Agustín Zona E (Pág 2)",
        image: img10,
        url: "https://www.tusanagustin.com/historias-de-eventos-reales/bodas-campestres-tu-san-agustin-zonae-pagina-2"
    },
    {
        title: "Fiesta de 15 Años Centro de Eventos Salón Vivaldi, Laureles (Pág 2)",
        image: img11,
        url: "https://www.tusanagustin.com/historias-de-eventos-reales/fiesta-de-15-anos-centro-de-eventos-salon-vivaldi-laureles-pagina-2"
    }
];

const $$Astro$1 = createAstro("https://www.tusanagustin.com");
const $$EventsPagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EventsPagination;
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#FDF5E9] py-16 px-4 font-poppins" id="events-section" data-astro-cid-bear462z> <div class="max-w-7xl mx-auto" data-astro-cid-bear462z> <div id="events-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" data-astro-cid-bear462z> ${events.map((event, index) => renderTemplate`<div class="event-card-wrapper hidden flex-col items-center group"${addAttribute(index, "data-index")} data-astro-cid-bear462z> <h3 class="text-[#4EAC9F] text-lg font-bold text-center mb-6 h-12 flex items-center justify-center max-w-[250px]" style="font-family: 'Poppins', sans-serif;" data-astro-cid-bear462z> <a${addAttribute(event.url, "href")} class="hover:text-[#333638] transition-colors duration-300 block w-full" data-astro-cid-bear462z> ${event.title} </a> </h3> <div class="w-full" data-astro-cid-bear462z> ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "title": event.title, "image": event.image, "url": event.url, "data-astro-cid-bear462z": true })} </div> <style is:global>
                        /* Hide the description and title inside ServiceCard since we have our own */
                        .event-card-wrapper h3 + div .px-4 {
                            display: none;
                        }
                        /* Adjust the card rounded corners if needed to match image exactly */
                        .event-card-wrapper img {
                            border-radius: 40px !important;
                        }
                        /* Remove the bottom padding from ServiceCard slide */
                        .event-card-wrapper .swiper-slide {
                            padding-bottom: 0 !important;
                        }
                    </style> </div>`)} </div> <!-- Pagination --> <div class="flex justify-center items-center gap-4 mt-20" data-astro-cid-bear462z> <button id="prev-btn" class="text-[#4EAC9F] hover:scale-110 transition-transform disabled:opacity-30 disabled:cursor-not-allowed" data-astro-cid-bear462z> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" data-astro-cid-bear462z> <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" data-astro-cid-bear462z></path> </svg> </button> <div id="pagination-numbers" class="flex gap-2" data-astro-cid-bear462z> <!-- Page numbers will be rendered here --> </div> <button id="next-btn" class="text-[#4EAC9F] hover:scale-110 transition-transform disabled:opacity-30 disabled:cursor-not-allowed" data-astro-cid-bear462z> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" data-astro-cid-bear462z> <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" data-astro-cid-bear462z></path> </svg> </button> </div> </div> </section> ${renderScript($$result, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/EventsPagination.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/EventsPagination.astro", void 0);

const imgRionegro = new Proxy({"src":"/_astro/loc-rionegro.Dkf_W0fO.webp","width":560,"height":448,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/loc-rionegro.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/loc-rionegro.webp");
							return target[name];
						}
					});

const imgEnvigado = new Proxy({"src":"/_astro/Montview.rlyTY66U.jpeg","width":1280,"height":854,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Montview.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Montview.jpeg");
							return target[name];
						}
					});

const imgMedellin = new Proxy({"src":"/_astro/6CED1B6E-E6A6-42B3-982B-814ED01A55AC-_1_.DDezl_v_.webp","width":3213,"height":5712,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/6CED1B6E-E6A6-42B3-982B-814ED01A55AC-_1_.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/6CED1B6E-E6A6-42B3-982B-814ED01A55AC-_1_.webp");
							return target[name];
						}
					});

const $$Locaciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#333638] py-8 md:py-16" data-astro-cid-ffgfcf5z> <div class="max-w-7xl mx-auto px-4 md:px-16" data-astro-cid-ffgfcf5z> <h2 class="text-3xl md:text-5xl text-center mb-12 font-alice font-bold leading-tight" style="font-family: 'Alice', serif;" data-astro-cid-ffgfcf5z> <span class="text-[#4EAC9F]" data-astro-cid-ffgfcf5z>Locaciones de ensueño</span> <br data-astro-cid-ffgfcf5z> <span class="text-white" data-astro-cid-ffgfcf5z>Para tus eventos</span> </h2> <div class="relative w-full group" data-astro-cid-ffgfcf5z> <button class="swiper-prev-locaciones-fixed absolute left-0 md:-left-14 top-[40%] -translate-y-1/2 z-50 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-100 text-gray-800 cursor-pointer" data-astro-cid-ffgfcf5z> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ffgfcf5z><path d="m15 18-6-6 6-6" data-astro-cid-ffgfcf5z></path></svg> </button> <button class="swiper-next-locaciones-fixed absolute right-0 md:-right-14 top-[40%] -translate-y-1/2 z-50 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-100 text-gray-800 cursor-pointer" data-astro-cid-ffgfcf5z> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ffgfcf5z><path d="m9 18 6-6-6-6" data-astro-cid-ffgfcf5z></path></svg> </button> <div class="swiper swiperLocacionesFixed !p-6" data-astro-cid-ffgfcf5z> <div class="swiper-wrapper" data-astro-cid-ffgfcf5z> ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "borderColor": "#333638", "largeArrow": true, "title": "Rionegro", "image": imgRionegro, "url": "https://www.tusanagustin.com/lugares/rionegro", "data-astro-cid-ffgfcf5z": true })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "borderColor": "#333638", "largeArrow": true, "title": "Envigado", "image": imgEnvigado, "url": "https://www.tusanagustin.com/lugares/envigado", "data-astro-cid-ffgfcf5z": true })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "borderColor": "#333638", "largeArrow": true, "title": "Medell\xEDn", "image": imgMedellin, "url": "https://www.tusanagustin.com/lugares/medellin", "data-astro-cid-ffgfcf5z": true })}  ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "borderColor": "#333638", "largeArrow": true, "title": "Rionegro", "description": "", "image": imgRionegro, "url": "https://www.tusanagustin.com/lugares/rionegro", "data-astro-cid-ffgfcf5z": true })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "borderColor": "#333638", "largeArrow": true, "title": "Envigado", "description": "", "image": imgEnvigado, "url": "https://www.tusanagustin.com/lugares/envigado", "data-astro-cid-ffgfcf5z": true })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "borderColor": "#333638", "largeArrow": true, "title": "Medell\xEDn", "description": "", "image": imgMedellin, "url": "https://www.tusanagustin.com/lugares/medellin", "data-astro-cid-ffgfcf5z": true })}  ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "borderColor": "#333638", "largeArrow": true, "title": "Rionegro", "description": "", "image": imgRionegro, "url": "https://www.tusanagustin.com/lugares/rionegro", "data-astro-cid-ffgfcf5z": true })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "borderColor": "#333638", "largeArrow": true, "title": "Envigado", "description": "", "image": imgEnvigado, "url": "https://www.tusanagustin.com/lugares/envigado", "data-astro-cid-ffgfcf5z": true })} ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "borderColor": "#333638", "largeArrow": true, "title": "Medell\xEDn", "description": "", "image": imgMedellin, "url": "https://www.tusanagustin.com/lugares/medellin", "data-astro-cid-ffgfcf5z": true })} </div> </div> </div> <div class="flex justify-center mt-8 mb-12" data-astro-cid-ffgfcf5z> <a href="https://wa.me/573168753305?text=Hola!" class="bg-[#FDF5E9] text-[#333638] px-10 py-3 rounded-full hover:bg-opacity-90 transition-all font-medium font-poppins shadow-lg hover:scale-105 transform duration-300" data-astro-cid-ffgfcf5z>
Quiero Reservar
</a> </div> </div> </div>  ${renderScript($$result, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/Locaciones.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/Locaciones.astro", void 0);

const flagColombia = new Proxy({"src":"/_astro/colombia.gIt7YGB2.webp","width":32,"height":32,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/colombia.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/colombia.webp");
							return target[name];
						}
					});

const iconFb = new Proxy({"src":"/_astro/Facebook.BK6UR8KJ.webp","width":16,"height":28,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Facebook.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Facebook.webp");
							return target[name];
						}
					});

const iconIg = new Proxy({"src":"/_astro/Instagram.kjCPTWja.webp","width":28,"height":28,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Instagram.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Instagram.webp");
							return target[name];
						}
					});

const iconTk = new Proxy({"src":"/_astro/TikTock.B63molJW.webp","width":25,"height":28,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/TikTock.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/TikTock.webp");
							return target[name];
						}
					});

const iconLi = new Proxy({"src":"/_astro/Link.DdrVHlIV.webp","width":30,"height":28,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Link.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Link.webp");
							return target[name];
						}
					});

const iconYt = new Proxy({"src":"/_astro/Youtube.D-jMaSlS.webp","width":40,"height":28,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Youtube.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Youtube.webp");
							return target[name];
						}
					});

const iconWa = new Proxy({"src":"/_astro/Whatsapp.BjEMeso6.webp","width":28,"height":28,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Whatsapp.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Whatsapp.webp");
							return target[name];
						}
					});

const logoVerde = new Proxy({"src":"/_astro/LogoSanAgustínGris.C3VFR1cj.webp","width":126,"height":66,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/LogoSanAgustínGris.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/LogoSanAgustínGris.webp");
							return target[name];
						}
					});

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="sidebar-overlay" class="fixed inset-0 bg-black/50 z-40 opacity-0 pointer-events-none transition-opacity duration-300" data-astro-cid-ssfzsv2f></div> <aside id="sidebar" class="fixed top-0 right-0 h-full w-[85%] max-w-md bg-[#FDF5E9] z-50 transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl flex flex-col" data-astro-cid-ssfzsv2f> <!-- Header with Close Button --> <div class="flex items-center justify-between p-6 border-b border-gray-100" data-astro-cid-ssfzsv2f> ${renderComponent($$result, "Image", $$Image, { "src": logoVerde, "alt": "San Agust\xEDn Logo", "class": "h-10 w-auto object-contain", "width": 150, "height": 78, "loading": "lazy", "data-astro-cid-ssfzsv2f": true })} <button id="close-sidebar" class="p-2 rounded-full hover:bg-gray-100 transition-colors group" aria-label="Cerrar menú" data-astro-cid-ssfzsv2f> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-hover:text-[#4EAC9F] transition-colors" data-astro-cid-ssfzsv2f><path d="M18 6 6 18" data-astro-cid-ssfzsv2f></path><path d="m6 6 12 12" data-astro-cid-ssfzsv2f></path></svg> </button> </div> <!-- Scrollable Content --> <div class="flex-1 overflow-y-auto py-8 px-8 space-y-10" data-astro-cid-ssfzsv2f> <!-- Navigation Links --> <nav class="flex flex-col space-y-4" data-astro-cid-ssfzsv2f> <a href="https://www.tusanagustin.com/" class="text-3xl font-serif text-[#333638] hover:text-[#4EAC9F] hover:pl-4 transition-all duration-300 cursor-pointer" data-astro-cid-ssfzsv2f>Inicio</a> <!-- Eventos Accordion --> <details class="group" data-astro-cid-ssfzsv2f> <summary class="flex items-center justify-between text-3xl font-serif text-[#333638] hover:text-[#4EAC9F] hover:pl-4 transition-all duration-300 cursor-pointer list-none" data-astro-cid-ssfzsv2f>
Eventos
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-open:rotate-180" data-astro-cid-ssfzsv2f><path d="m6 9 6 6 6-6" data-astro-cid-ssfzsv2f></path></svg> </summary> <div class="pl-4 mt-2 space-y-2 border-l-2 border-[#4EAC9F]/30 ml-2" data-astro-cid-ssfzsv2f> <a href="https://www.tusanagustin.com/eventos/bodas" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Bodas</a> <a href="https://www.tusanagustin.com/eventos/bodas-destino" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Bodas Destino</a> <a href="https://www.tusanagustin.com/eventos/15-anos" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Quinces Años</a> <a href="https://www.tusanagustin.com/eventos/corporativos" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Corporativos</a> <a href="https://www.tusanagustin.com/eventos/sociales" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Sociales</a> </div> </details> <!-- Servicios Accordion --> <details class="group" data-astro-cid-ssfzsv2f> <summary class="flex items-center justify-between text-3xl font-serif text-[#333638] hover:text-[#4EAC9F] hover:pl-4 transition-all duration-300 cursor-pointer list-none" data-astro-cid-ssfzsv2f>
Servicios
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-open:rotate-180" data-astro-cid-ssfzsv2f><path d="m6 9 6 6 6-6" data-astro-cid-ssfzsv2f></path></svg> </summary> <div class="pl-4 mt-2 space-y-2 border-l-2 border-[#4EAC9F]/30 ml-2" data-astro-cid-ssfzsv2f> <a href="https://www.tusanagustin.com/servicios/catering" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Catering</a> <a href="https://www.tusanagustin.com/servicios/decoracion" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Decoración</a> <a href="https://www.tusanagustin.com/servicios/event-wedding-planner" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Event & Wedding Planner</a> <a href="https://www.tusanagustin.com/servicios/lugares" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Lugares para eventos</a> <a href="https://www.tusanagustin.com/servicios/artistas" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Artistas y espectáculos</a> <a href="https://www.tusanagustin.com/servicios/fotografia" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Fotografía y video</a> <a href="https://www.tusanagustin.com/servicios/audiovisuales" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Ayudas audiovisuales</a> <a href="https://www.tusanagustin.com/servicios/carros-antiguos" class="block text-xl text-gray-600 hover:text-[#4EAC9F] py-1" data-astro-cid-ssfzsv2f>Carros antiguos</a> </div> </details> <a href="https://www.tusanagustin.com/blog" class="text-3xl font-serif text-[#333638] hover:text-[#4EAC9F] hover:pl-4 transition-all duration-300 cursor-pointer" data-astro-cid-ssfzsv2f>Blog</a> <a href="https://www.tusanagustin.com/bodas-destino" class="text-3xl font-serif text-[#333638] hover:text-[#4EAC9F] hover:pl-4 transition-all duration-300 cursor-pointer" data-astro-cid-ssfzsv2f>Bodas de Destino</a> <a href="https://www.tusanagustin.com/quienes-somos" class="text-3xl font-serif text-[#333638] hover:text-[#4EAC9F] hover:pl-4 transition-all duration-300 cursor-pointer" data-astro-cid-ssfzsv2f>Nosotros</a> </nav> <hr class="border-gray-100" data-astro-cid-ssfzsv2f> <!-- Language Selector --> <div class="space-y-4" data-astro-cid-ssfzsv2f> <p class="text-sm uppercase tracking-widest text-gray-400 font-medium" data-astro-cid-ssfzsv2f>Idioma</p> <div class="flex items-center gap-4" data-astro-cid-ssfzsv2f> <button class="lang-btn active group flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 hover:border-[#4EAC9F] transition-all bg-white shadow-sm" data-lang="es" data-astro-cid-ssfzsv2f> ${renderComponent($$result, "Image", $$Image, { "src": flagColombia, "alt": "Colombia", "class": "w-6 h-6 object-cover rounded-full shadow-sm", "width": 24, "height": 24, "loading": "lazy", "data-astro-cid-ssfzsv2f": true })} <span class="text-sm font-medium text-gray-600 group-hover:text-[#4EAC9F]" data-astro-cid-ssfzsv2f>Español</span> </button> <button class="lang-btn group flex items-center gap-3 px-4 py-2 rounded-full border border-transparent hover:bg-white hover:shadow-sm hover:border-gray-200 transition-all opacity-50 hover:opacity-100" data-lang="en" data-astro-cid-ssfzsv2f> <!-- USA Flag SVG since local image might not exist, ensuring visual consistency --> <div class="w-6 h-6 rounded-full overflow-hidden shadow-sm relative" data-astro-cid-ssfzsv2f> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="w-full h-full object-cover" data-astro-cid-ssfzsv2f> <path fill="#bd3d44" d="M0 0h640v480H0" data-astro-cid-ssfzsv2f></path> <path stroke="#fff" stroke-width="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" data-astro-cid-ssfzsv2f></path> <path fill="#192f5d" d="M0 0h364.8v258.5H0" data-astro-cid-ssfzsv2f></path> </svg> </div> <span class="text-sm font-medium text-gray-600 group-hover:text-[#4EAC9F]" data-astro-cid-ssfzsv2f>English</span> </button> </div> </div> <!-- Social Media --> <div class="space-y-4" data-astro-cid-ssfzsv2f> <p class="text-sm uppercase tracking-widest text-gray-400 font-medium" data-astro-cid-ssfzsv2f>Síguenos</p> <div class="flex gap-4 flex-wrap" data-astro-cid-ssfzsv2f> <a href="https://www.facebook.com/tusanagustineventos/" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#4EAC9F] hover:bg-[#4EAC9F] hover:text-white transition-all shadow-sm" data-astro-cid-ssfzsv2f> ${renderComponent($$result, "Image", $$Image, { "src": iconFb, "alt": "Facebook", "class": "h-5 w-5 object-contain", "width": 20, "height": 20, "data-astro-cid-ssfzsv2f": true })} </a> <a href="https://www.instagram.com/tusanagustin/" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#4EAC9F] hover:bg-[#4EAC9F] hover:text-white transition-all shadow-sm" data-astro-cid-ssfzsv2f> ${renderComponent($$result, "Image", $$Image, { "src": iconIg, "alt": "Instagram", "class": "h-5 w-5 object-contain", "width": 20, "height": 20, "data-astro-cid-ssfzsv2f": true })} </a> <a href="https://www.tiktok.com/@tusanagustin" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#4EAC9F] hover:bg-[#4EAC9F] hover:text-white transition-all shadow-sm" data-astro-cid-ssfzsv2f> ${renderComponent($$result, "Image", $$Image, { "src": iconTk, "alt": "TikTok", "class": "h-5 w-5 object-contain", "width": 20, "height": 20, "data-astro-cid-ssfzsv2f": true })} </a> <a href="https://www.linkedin.com/company/tusanagustin/" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#4EAC9F] hover:bg-[#4EAC9F] hover:text-white transition-all shadow-sm" data-astro-cid-ssfzsv2f> ${renderComponent($$result, "Image", $$Image, { "src": iconLi, "alt": "LinkedIn", "class": "h-5 w-5 object-contain", "width": 20, "height": 20, "data-astro-cid-ssfzsv2f": true })} </a> <a href="https://www.youtube.com/@tusanagustin" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#4EAC9F] hover:bg-[#4EAC9F] hover:text-white transition-all shadow-sm" data-astro-cid-ssfzsv2f> ${renderComponent($$result, "Image", $$Image, { "src": iconYt, "alt": "YouTube", "class": "h-5 w-5 object-contain", "width": 20, "height": 20, "data-astro-cid-ssfzsv2f": true })} </a> <a href="https://wa.me/573168753305?text=Hola!" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#4EAC9F] hover:bg-[#4EAC9F] hover:text-white transition-all shadow-sm" data-astro-cid-ssfzsv2f> ${renderComponent($$result, "Image", $$Image, { "src": iconWa, "alt": "WhatsApp", "class": "h-5 w-5 object-contain", "width": 20, "height": 20, "data-astro-cid-ssfzsv2f": true })} </a> </div> </div> </div> </aside> ${renderScript($$result, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/Sidebar.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/Sidebar.astro", void 0);

const iconPh = new Proxy({"src":"/_astro/Telefono.D3SvoQZb.webp","width":38,"height":40,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Telefono.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Telefono.webp");
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="w-full bg-[#FDF5E9] border-b border-gray-100 py-2 sm:py-3 relative z-30 font-['Poppins']" data-astro-cid-5blmo7yk> <div class="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between" data-astro-cid-5blmo7yk> <!-- Left Section: Language & Socials (Hidden on mobile) --> <div class="hidden md:flex items-center gap-4 sm:gap-6 flex-1 justify-start" data-astro-cid-5blmo7yk> <!-- Language Toggle Desktop --> <button id="lang-toggle-desktop" class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group relative" aria-label="Cambiar idioma" data-astro-cid-5blmo7yk> <div class="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200 shadow-sm group-hover:shadow-md transition-all" data-astro-cid-5blmo7yk> <!-- Colombia Flag (Default) --> ${renderComponent($$result, "Image", $$Image, { "id": "flag-col", "src": flagColombia, "alt": "Colombia", "class": "absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100", "width": 28, "height": 28, "loading": "eager", "data-astro-cid-5blmo7yk": true })} <!-- USA Flag (Hidden by default) --> <div id="flag-usa" class="absolute inset-0 w-full h-full bg-white transition-opacity duration-300 opacity-0" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="w-full h-full object-cover" data-astro-cid-5blmo7yk> <path fill="#bd3d44" d="M0 0h640v480H0" data-astro-cid-5blmo7yk></path> <path stroke="#fff" stroke-width="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" data-astro-cid-5blmo7yk></path> <path fill="#192f5d" d="M0 0h364.8v258.5H0" data-astro-cid-5blmo7yk></path> </svg> </div> </div> <span id="lang-text" class="text-gray-800 text-sm font-medium w-6" data-astro-cid-5blmo7yk>ES</span> </button> <div class="h-4 w-px bg-gray-300" data-astro-cid-5blmo7yk></div> <div class="flex items-center gap-3" data-astro-cid-5blmo7yk> <a href="https://www.facebook.com/tusanagustineventos/" class="hover:scale-110 transition-transform" data-astro-cid-5blmo7yk>${renderComponent($$result, "Image", $$Image, { "src": iconFb, "alt": "Facebook", "class": "h-4 w-4 object-contain text-[#4EAC9F]", "width": 16, "height": 16, "loading": "eager", "data-astro-cid-5blmo7yk": true })}</a> <a href="https://www.instagram.com/tusanagustin/" class="hover:scale-110 transition-transform" data-astro-cid-5blmo7yk>${renderComponent($$result, "Image", $$Image, { "src": iconIg, "alt": "Instagram", "class": "h-4 w-4 object-contain text-[#4EAC9F]", "width": 16, "height": 16, "loading": "eager", "data-astro-cid-5blmo7yk": true })}</a> <a href="https://www.tiktok.com/@tusanagustin" class="hover:scale-110 transition-transform" data-astro-cid-5blmo7yk>${renderComponent($$result, "Image", $$Image, { "src": iconTk, "alt": "TikTok", "class": "h-4 w-4 object-contain text-[#4EAC9F]", "width": 16, "height": 16, "loading": "eager", "data-astro-cid-5blmo7yk": true })}</a> <a href="https://www.linkedin.com/company/tusanagustin/" class="hover:scale-110 transition-transform" data-astro-cid-5blmo7yk>${renderComponent($$result, "Image", $$Image, { "src": iconLi, "alt": "LinkedIn", "class": "h-4 w-4 object-contain text-[#4EAC9F]", "width": 16, "height": 16, "loading": "eager", "data-astro-cid-5blmo7yk": true })}</a> <a href="https://www.youtube.com/@tusanagustin" class="hover:scale-110 transition-transform" data-astro-cid-5blmo7yk>${renderComponent($$result, "Image", $$Image, { "src": iconYt, "alt": "YouTube", "class": "h-4 w-4 object-contain text-[#4EAC9F]", "width": 16, "height": 16, "loading": "eager", "data-astro-cid-5blmo7yk": true })}</a> <a href="https://wa.me/573168753305?text=Hola!" class="hover:scale-110 transition-transform" data-astro-cid-5blmo7yk>${renderComponent($$result, "Image", $$Image, { "src": iconWa, "alt": "WhatsApp", "class": "h-4 w-4 object-contain text-[#4EAC9F]", "width": 16, "height": 16, "loading": "eager", "data-astro-cid-5blmo7yk": true })}</a> </div> </div> <!-- Center: Logo (Absolute centered on mobile to handle the hamburger) --> <div class="flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex-1 md:flex md:justify-center" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Image", $$Image, { "src": logoVerde, "alt": "San Agust\xEDn Logo", "class": "h-10 sm:h-12 md:h-14 w-auto object-contain", "width": 150, "height": 78, "loading": "eager", "data-astro-cid-5blmo7yk": true })} </div> <!-- Right Section: Contact & Menu --> <div class="flex items-center gap-2 md:gap-4 flex-1 justify-end" data-astro-cid-5blmo7yk> <!-- Contact (Hidden mobile) --> <div class="hidden md:flex items-center gap-2 md:gap-4 mr-4" data-astro-cid-5blmo7yk> <div class=" p-1.5 hover:scale-110 transition-transform" data-astro-cid-5blmo7yk> <a href="https://wa.me/573168753305?text=Hola!" data-astro-cid-5blmo7yk>${renderComponent($$result, "Image", $$Image, { "src": iconPh, "alt": "Telefono ", "class": "h-4 w-4 object-contain", "width": 16, "height": 16, "loading": "eager", "data-astro-cid-5blmo7yk": true })}</a> </div> <a href="https://wa.me/573168753305?text=Hola!" class="flex flex-row items-center gap-2 hover:opacity-80 transition-opacity" data-astro-cid-5blmo7yk> <span class="text-gray-800 text-sm md:text-lg font-medium whitespace-nowrap font-['Poppins']" data-astro-cid-5blmo7yk>(+57) 316 875 33 05</span> <span class="text-xs text-[#4EAC9F] font-semibold uppercase tracking-wider shrink-0 font-['Poppins']" data-astro-cid-5blmo7yk>Llámanos</span> </a> </div> <!-- Search Button --> <button data-open-search class="p-2 rounded-full hover:bg-gray-100 transition-colors group" aria-label="Buscar" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700 group-hover:text-[#4EAC9F] transition-colors" data-astro-cid-5blmo7yk><circle cx="11" cy="11" r="8" data-astro-cid-5blmo7yk></circle><path d="m21 21-4.3-4.3" data-astro-cid-5blmo7yk></path></svg> </button> <!-- Hamburger Button (Mobile Only) --> <button id="menu-toggle" class="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors group" aria-label="Abrir menú" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700 group-hover:text-[#4EAC9F] transition-colors" data-astro-cid-5blmo7yk><line x1="3" x2="21" y1="6" y2="6" data-astro-cid-5blmo7yk></line><line x1="3" x2="21" y1="12" y2="12" data-astro-cid-5blmo7yk></line><line x1="3" x2="21" y1="18" y2="18" data-astro-cid-5blmo7yk></line></svg> </button> </div> </div> </nav> ${renderComponent($$result, "Sidebar", $$Sidebar, { "data-astro-cid-5blmo7yk": true })} ${renderScript($$result, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/Navbar.astro", void 0);

const imgPorcentaje = new Proxy({"src":"/_astro/porcentaje.BydswUy6.webp","width":174,"height":171,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/porcentaje.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/porcentaje.webp");
							return target[name];
						}
					});

const imgFontur = new Proxy({"src":"/_astro/cert-fontur.BgZSmE2p.webp","width":203,"height":203,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/cert-fontur.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/cert-fontur.webp");
							return target[name];
						}
					});

const imgCamara = new Proxy({"src":"/_astro/logo-camara-comercio-medellin.XRPUbkZx.webp","width":2983,"height":1220,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/logo-camara-comercio-medellin.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/logo-camara-comercio-medellin.webp");
							return target[name];
						}
					});

const imgTrayectoria = new Proxy({"src":"/_astro/cert-trayectoria.QMCjwiAI.webp","width":281,"height":195,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/cert-trayectoria.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/cert-trayectoria.webp");
							return target[name];
						}
					});

const $$BrandInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#FDF5E9 ] pt-4 pb-10 md:py-20 px-4 md:px-10" data-astro-cid-lpkfxxsj> <div class="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12" data-astro-cid-lpkfxxsj> <!-- Heading --> <h2 class="flex flex-col items-center leading-tight" data-astro-cid-lpkfxxsj> <span class="text-3xl md:text-5xl font-extrabold text-[#2D3748]" data-astro-cid-lpkfxxsj>Descubre más de</span> <span class="text-4xl md:text-7xl font-extrabold text-[#4EAC9F]" data-astro-cid-lpkfxxsj>Tu San Agustín</span> </h2> <!-- Subscription Form Section --> <div class="flex flex-col items-center gap-4 w-full max-w-2xl" data-astro-cid-lpkfxxsj> <p class="text-gray-600 text-sm md:text-base font-medium" data-astro-cid-lpkfxxsj>Suscríbete al boletín</p> <div class="flex gap-4 mb-2" data-astro-cid-lpkfxxsj> <!-- WhatsApp Icon (Teal) --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-[#4EAC9F] cursor-pointer hover:opacity-80" aria-label="WhatsApp" data-astro-cid-lpkfxxsj> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.063 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.933 3.659 1.423 5.631 1.423s3.945-.494 5.672-1.423l6.335 1.662-1.662-6.335a11.82 11.82 0 001.752-6.173c-.003-6.557-5.338-11.892-11.893-11.892z" fill="currentColor" data-astro-cid-lpkfxxsj></path> </svg> <!-- Email Icon (Teal) --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#4EAC9F] cursor-pointer hover:opacity-80" aria-label="Email" data-astro-cid-lpkfxxsj> <rect width="20" height="16" x="2" y="4" rx="2" data-astro-cid-lpkfxxsj></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" data-astro-cid-lpkfxxsj></path> </svg> </div> <!-- Custom Form --> <form class="flex w-full max-w-md bg-[#646464] rounded-full overflow-hidden shadow-lg h-10" aria-label="Boletín de suscripción" data-astro-cid-lpkfxxsj> <input type="email" placeholder="Escribe tu correo*" class="bg-transparent border-none text-white px-6 py-2 w-full text-xs md:text-sm focus:outline-none placeholder:text-gray-300 italic" required data-astro-cid-lpkfxxsj> <button type="submit" class="bg-[#4EAC9F] text-white px-8 py-2 text-xs md:text-sm font-medium hover:bg-opacity-90 transition-all" data-astro-cid-lpkfxxsj>
Suscribirme
</button> </form> </div> <!-- Badges Row --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 items-start pt-8 w-full max-w-5xl" data-astro-cid-lpkfxxsj> <!-- Calificación Badge --> <div class="flex flex-col items-center" data-astro-cid-lpkfxxsj> <span class="text-sm font-bold text-gray-700 mb-2 italic" data-astro-cid-lpkfxxsj>Calificación Anual</span> <span class="text-2xl font-black text-[#4EAC9F] mb-1" data-astro-cid-lpkfxxsj>4.7</span> <div class="w-24 h-24 flex items-center justify-center" data-astro-cid-lpkfxxsj> ${renderComponent($$result, "Image", $$Image, { "src": imgPorcentaje, "alt": "Calificaci\xF3n Anual", "class": "max-h-full object-contain drop-shadow-sm w-auto h-auto", "width": 96, "height": 96, "loading": "lazy", "data-astro-cid-lpkfxxsj": true })} </div> <div class="flex gap-1 mt-3" data-astro-cid-lpkfxxsj> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFD700" data-astro-cid-lpkfxxsj> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" data-astro-cid-lpkfxxsj></path> </svg>`)} </div> </div> <!-- FONTUR Badge --> <div class="flex flex-col items-center gap-4" data-astro-cid-lpkfxxsj> <span class="text-sm font-bold text-gray-700 italic" data-astro-cid-lpkfxxsj>Registro Nacional de Turismo</span> <div class="w-32 h-32 flex items-center justify-center" data-astro-cid-lpkfxxsj> ${renderComponent($$result, "Image", $$Image, { "src": imgFontur, "alt": "Registro Nacional de Turismo", "class": "max-h-full object-contain drop-shadow-sm w-auto h-auto", "width": 128, "height": 128, "loading": "lazy", "data-astro-cid-lpkfxxsj": true })} </div> </div> <!-- Camara de Comercio Badge --> <div class="flex flex-col items-center gap-4" data-astro-cid-lpkfxxsj> <span class="text-sm font-bold text-gray-700 italic" data-astro-cid-lpkfxxsj>Acreditación Mercantil</span> <div class="w-40 h-32 flex items-center justify-center" data-astro-cid-lpkfxxsj> ${renderComponent($$result, "Image", $$Image, { "src": imgCamara, "alt": "Acreditaci\xF3n Mercantil", "class": "max-h-full object-contain drop-shadow-sm w-auto h-auto", "width": 160, "height": 128, "loading": "lazy", "data-astro-cid-lpkfxxsj": true })} </div> </div> <!-- Years Badge --> <div class="flex flex-col items-center gap-4" data-astro-cid-lpkfxxsj> <span class="text-sm font-bold text-gray-700 italic" data-astro-cid-lpkfxxsj>Reconocimiento</span> <div class="w-32 h-32 flex items-center justify-center" data-astro-cid-lpkfxxsj> ${renderComponent($$result, "Image", $$Image, { "src": imgTrayectoria, "alt": "38 A\xF1os de Trayectoria", "class": "max-h-full object-contain drop-shadow-sm w-auto h-auto", "width": 128, "height": 128, "loading": "lazy", "data-astro-cid-lpkfxxsj": true })} </div> </div> </div> </div> </section> `;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/BrandInfo.astro", void 0);

const imgVisa = new Proxy({"src":"/_astro/visa.int71ITQ.webp","width":138,"height":56,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/visa.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/visa.webp");
							return target[name];
						}
					});

const imgMastercard = new Proxy({"src":"/_astro/mastercard.CtyX3pUV.webp","width":95,"height":56,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/mastercard.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/mastercard.webp");
							return target[name];
						}
					});

const imgPaypal = new Proxy({"src":"/_astro/paypal.CsAQGOL6.webp","width":197,"height":59,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/paypal.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/paypal.webp");
							return target[name];
						}
					});

const imgPse = new Proxy({"src":"/_astro/pse.BUFSsZyF.webp","width":155,"height":66,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/pse.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/pse.webp");
							return target[name];
						}
					});

const imgWompi = new Proxy({"src":"/_astro/wompi.CvLSIJPN.webp","width":140,"height":49,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/wompi.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/wompi.webp");
							return target[name];
						}
					});

const iconPi = new Proxy({"src":"/_astro/Pinterest _1.80luK4it.webp","width":22,"height":28,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Pinterest _1.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/Pinterest _1.webp");
							return target[name];
						}
					});

const award1 = new Proxy({"src":"/_astro/home_tusanagustin-29.DOPuVTPQ.webp","width":1282,"height":1282,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-29.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-29.webp");
							return target[name];
						}
					});

const award2 = new Proxy({"src":"/_astro/home_tusanagustin-30.Dhs0SYXa.webp","width":1114,"height":847,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-30.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-30.webp");
							return target[name];
						}
					});

const award3 = new Proxy({"src":"/_astro/home_tusanagustin-31.Cs9-dPnH.webp","width":1102,"height":999,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-31.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-31.webp");
							return target[name];
						}
					});

const award4 = new Proxy({"src":"/_astro/home_tusanagustin-32.CxsgrUDw.webp","width":1172,"height":1173,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-32.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-32.webp");
							return target[name];
						}
					});

const award5 = new Proxy({"src":"/_astro/home_tusanagustin-34-1.C2_XsAta.webp","width":1312,"height":1312,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-34-1.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-34-1.webp");
							return target[name];
						}
					});

const award6 = new Proxy({"src":"/_astro/home_tusanagustin-35.DFsvjQRI.webp","width":1102,"height":1072,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-35.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-35.webp");
							return target[name];
						}
					});

const award7 = new Proxy({"src":"/_astro/home_tusanagustin-36.VJVSOJ4y.webp","width":1133,"height":1137,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-36.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-36.webp");
							return target[name];
						}
					});

const award8 = new Proxy({"src":"/_astro/home_tusanagustin-37.Dli4IywY.webp","width":1102,"height":919,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-37.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-37.webp");
							return target[name];
						}
					});

const award9 = new Proxy({"src":"/_astro/home_tusanagustin-38.BzgRnXvU.webp","width":1102,"height":1327,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-38.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-38.webp");
							return target[name];
						}
					});

const award10 = new Proxy({"src":"/_astro/home_tusanagustin-41.DzLcKwvj.webp","width":1172,"height":1172,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-41.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/home_tusanagustin-41.webp");
							return target[name];
						}
					});

const award11 = new Proxy({"src":"/_astro/diseño-sin-título-10.DeXZggfe.webp","width":1080,"height":1350,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/diseño-sin-título-10.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/diseño-sin-título-10.webp");
							return target[name];
						}
					});

const award12 = new Proxy({"src":"/_astro/diseño-sin-título-2.Do--M1qd.webp","width":1080,"height":1350,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/diseño-sin-título-2.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/assets/images/diseño-sin-título-2.webp");
							return target[name];
						}
					});

const $$Astro = createAstro("https://www.tusanagustin.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const awards = [award1, award2, award3, award4, award5, award6, award7, award8, award9, award10, award11, award12];
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#FDF5E9 ] py-10 md:py-20 px-4 md:px-10" data-astro-cid-sz7xmlte> <div class="max-w-7xl mx-auto space-y-12 md:space-y-24" data-astro-cid-sz7xmlte> <!-- TOP SECTION: CONÓCENOS / QUIÉNES SOMOS --> <div class="flex flex-col lg:flex-row justify-between items-start gap-12" data-astro-cid-sz7xmlte> <div class="space-y-6 flex-1" data-astro-cid-sz7xmlte> <div class="space-y-2" data-astro-cid-sz7xmlte> <h3 class="text-2xl md:text-3xl font-extrabold text-[#4EAC9F] tracking-tight" data-astro-cid-sz7xmlte>Conócenos</h3> <h2 class="text-4xl md:text-7xl font-extrabold text-[#2D3748] leading-none" data-astro-cid-sz7xmlte>¿Quiénes Somos?</h2> </div> <!-- Description Box (Wider but Thinner) --> <div class="relative max-w-xl bg-[#D1C1A3] px-10 py-8 rounded-[40px] border border-white/5" data-astro-cid-sz7xmlte> <p class="text-sm md:text-lg leading-relaxed font-light text-white" data-astro-cid-sz7xmlte>
Somos Tu San Agustín, la empresa líder en operación de eventos. Con más de 35 años, ofrecemos soluciones integrales y personalizadas para cualquier tipo de evento.
</p> <div class="flex justify-end mt-4" data-astro-cid-sz7xmlte> <a href="https://www.tusanagustin.com/sobre-nosotros" class="bg-white text-black px-8 py-2.5 rounded-full text-xs hover:bg-opacity-90 transition-all uppercase tracking-widest shadow-lg inline-block" data-astro-cid-sz7xmlte>
Ver Mas
</a> </div> </div> </div> <!-- Awards Carousel with Arrows --> <div class="lg:w-1/3 w-full flex flex-col items-center gap-6 mt-6 md:mt-12" data-astro-cid-sz7xmlte> <p class="text-lg font-bold tracking-widest text-[#4EAC9F] text-center" data-astro-cid-sz7xmlte>Premios Y Certificaciones</p> <div class="relative w-80 mx-auto flex items-center justify-center" data-astro-cid-sz7xmlte> <!-- Custom Arrows (Absolutely positioned relative to this centered box) --> <div class="swiper-button-prev-awards absolute left-0 z-10 text-[#4EAC9F] cursor-pointer hover:scale-110 transition-transform" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte><path d="m15 18-6-6 6-6" data-astro-cid-sz7xmlte></path></svg> </div> <div class="swiper awardsSwiper w-40 h-56 overflow-hidden mx-auto" data-astro-cid-sz7xmlte> <div class="swiper-wrapper" data-astro-cid-sz7xmlte> ${awards.map((award) => {
    const isBig = award === award11 || award === award12;
    return renderTemplate`<div class="swiper-slide flex items-center justify-center" data-astro-cid-sz7xmlte> <div class="w-40 h-40 flex items-center justify-center p-2" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": award, "alt": "Premio o Certificaci\xF3n", "class": `max-h-full object-contain drop-shadow-lg ${isBig ? "scale-[1.7]" : ""}`, "width": 200, "height": 200, "loading": "lazy", "data-astro-cid-sz7xmlte": true })} </div> </div>`;
  })} </div> </div> <div class="swiper-button-next-awards absolute right-0 z-10 text-[#4EAC9F] cursor-pointer hover:scale-110 transition-transform" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte><path d="m9 18 6-6-6-6" data-astro-cid-sz7xmlte></path></svg> </div> </div> </div> </div> <!-- MIDDLE SECTION: CONTACT FORM --> <div class="flex flex-col items-center space-y-12" data-astro-cid-sz7xmlte> <h3 class="text-[#4EAC9F] text-4xl md:text-7xl font-extrabold mb-6 md:mb-12" data-astro-cid-sz7xmlte>Contáctanos</h3> <form class="w-full max-w-xl space-y-4" data-astro-cid-sz7xmlte> <div class="space-y-4" data-astro-cid-sz7xmlte> <input type="text" placeholder="Nombre y Apellido*" class="w-full bg-[#333638] text-white px-8 py-4 rounded-xl focus:outline-none focus:ring-2 ring-[#4EAC9F]/50 placeholder:text-gray-400 font-medium" data-astro-cid-sz7xmlte> <input type="tel" placeholder="Whatsapp*" class="w-full bg-[#333638] text-white px-8 py-4 rounded-xl focus:outline-none focus:ring-2 ring-[#4EAC9F]/50 placeholder:text-gray-400 font-medium" data-astro-cid-sz7xmlte> <input type="email" placeholder="Email*" class="w-full bg-[#333638] text-white px-8 py-4 rounded-xl focus:outline-none focus:ring-2 ring-[#4EAC9F]/50 placeholder:text-gray-400 font-medium" data-astro-cid-sz7xmlte> <select required class="w-full bg-[#333638] text-white px-8 py-4 rounded-xl focus:outline-none focus:ring-2 ring-[#4EAC9F]/50 appearance-none font-medium" aria-label="Tipo de Evento" data-astro-cid-sz7xmlte> <option value="" disabled selected hidden data-astro-cid-sz7xmlte>Tipo de Evento</option> <option data-astro-cid-sz7xmlte>Boda</option> <option data-astro-cid-sz7xmlte>Quince Años</option> <option data-astro-cid-sz7xmlte>Corporativo</option> <option data-astro-cid-sz7xmlte>Otro</option> </select> <textarea placeholder="Mensaje" rows="1" class="w-full bg-[#333638] text-white px-8 py-4 rounded-xl focus:outline-none focus:ring-2 ring-[#4EAC9F]/50 placeholder:text-gray-400 font-medium" data-astro-cid-sz7xmlte></textarea> </div> <div class="flex justify-center pt-4" data-astro-cid-sz7xmlte> <button type="submit" class="bg-[#4EAC9F] text-white px-16 py-3 rounded-xl text-lg  hover:bg-opacity-90 transition-all shadow-xl" data-astro-cid-sz7xmlte>
Enviar
</button> </div> </form> </div> </div> </section> <footer class="bg-[#333638] text-white py-10 md:py-20 px-4 md:px-10" data-astro-cid-sz7xmlte> <div class="max-w-7xl mx-auto" data-astro-cid-sz7xmlte> <!-- BOTTOM SECTION: BRANDING & LINKS --> <div class="pt-20 border-t border-white/5 flex flex-col lg:flex-row gap-16 lg:gap-24" data-astro-cid-sz7xmlte> <!-- Branding Column --> <div class="lg:w-1/3 space-y-8" data-astro-cid-sz7xmlte> <div class="relative inline-block" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": logoVerde, "alt": "San Agust\xEDn Logo", "class": "h-24 md:h-28 invert brightness-0 w-auto", "loading": "lazy", "data-astro-cid-sz7xmlte": true })} </div> <div class="space-y-4" data-astro-cid-sz7xmlte> <p class="text-[#4EAC9F] text-xl font-bold italic tracking-tight" data-astro-cid-sz7xmlte>Síguenos @tusanagustin</p> <div class="flex gap-4" data-astro-cid-sz7xmlte> <a href="https://www.facebook.com/tusanagustineventos/" class="hover:scale-110 transition-transform" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": iconFb, "alt": "Facebook", "class": "h-5 w-5 object-contain invert brightness-0", "loading": "lazy", "data-astro-cid-sz7xmlte": true })}</a> <a href="https://www.instagram.com/tusanagustin/" class="hover:scale-110 transition-transform" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": iconIg, "alt": "Instagram", "class": "h-5 w-5 object-contain invert brightness-0", "loading": "lazy", "data-astro-cid-sz7xmlte": true })}</a> <a href="https://wa.me/573168753305?text=Hola!" class="hover:scale-110 transition-transform" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": iconWa, "alt": "WhatsApp", "class": "h-5 w-5 object-contain invert brightness-0", "loading": "lazy", "data-astro-cid-sz7xmlte": true })}</a> <a href="https://www.tiktok.com/@tusanagustin" class="hover:scale-110 transition-transform" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": iconTk, "alt": "TikTok", "class": "h-5 w-5 object-contain invert brightness-0", "loading": "lazy", "data-astro-cid-sz7xmlte": true })}</a> <a href="https://www.youtube.com/@tusanagustin" class="hover:scale-110 transition-transform" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": iconYt, "alt": "YouTube", "class": "h-5 w-5 object-contain invert brightness-0", "loading": "lazy", "data-astro-cid-sz7xmlte": true })}</a> <a href="https://www.linkedin.com/company/tusanagustin/" class="hover:scale-110 transition-transform" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": iconLi, "alt": "LinkedIn", "class": "h-5 w-5 object-contain invert brightness-0", "loading": "lazy", "data-astro-cid-sz7xmlte": true })}</a> <a href="#" class="hover:scale-110 transition-transform" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": iconPi, "alt": "Pinterest", "class": "h-5 w-5 object-contain invert brightness-0", "loading": "lazy", "data-astro-cid-sz7xmlte": true })}</a> </div> </div> <div class="space-y-4" data-astro-cid-sz7xmlte> <p class="text-[#4EAC9F] text-lg font-bold" data-astro-cid-sz7xmlte>Contáctanos</p> <div class="space-y-4" data-astro-cid-sz7xmlte> <div class="flex items-center gap-3 group cursor-pointer" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": iconPh, "alt": "Telefono ", "class": "h-6 w-6 object-contain invert brightness-0 group-hover:scale-110 transition-transform", "loading": "lazy", "data-astro-cid-sz7xmlte": true })} <span class="text-base text-gray-300 font-medium" data-astro-cid-sz7xmlte>(+57) 316 875 33 05</span> </div> <div class="flex items-center gap-3 group cursor-pointer" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" class="group-hover:scale-110 transition-transform" data-astro-cid-sz7xmlte><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" data-astro-cid-sz7xmlte></path></svg> <span class="text-base text-gray-300 font-medium" data-astro-cid-sz7xmlte>contacto@tusanagustin.com</span> </div> </div> </div> </div> <div class="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8" data-astro-cid-sz7xmlte> <nav aria-label="Footer Navigation Primary" data-astro-cid-sz7xmlte> <ul class="space-y-1.5" data-astro-cid-sz7xmlte> ${[
    { name: "Inicio", url: "https://www.tusanagustin.com/" },
    { name: "Eventos", url: "https://www.tusanagustin.com/eventos" },
    { name: "Servicios", url: "https://www.tusanagustin.com/servicios" },
    { name: "Galer\xEDas", url: "https://www.tusanagustin.com/galeria" },
    { name: "Lugares", url: "https://www.tusanagustin.com/lugares" },
    { name: "Event Planners", url: "https://www.tusanagustin.com/event-planners" },
    { name: "Artistas", url: "https://www.tusanagustin.com/artistas" },
    { name: "Historias", url: "https://www.tusanagustin.com/historias" },
    { name: "Blog", url: "https://www.tusanagustin.com/blog" }
  ].map((link) => renderTemplate`<li data-astro-cid-sz7xmlte><a${addAttribute(link.url, "href")} class="text-gray-300 hover:text-[#4EAC9F] flex items-center gap-2 text-base font-medium transition-colors" style="font-family: 'Poppins', sans-serif;" data-astro-cid-sz7xmlte> <span class="w-1.5 h-1.5 rounded-full bg-[#4EAC9F]" data-astro-cid-sz7xmlte></span> ${link.name} </a></li>`)} </ul> </nav> <nav aria-label="Footer Navigation Secondary" data-astro-cid-sz7xmlte> <ul class="space-y-1.5" data-astro-cid-sz7xmlte> ${[
    { name: "Cont\xE1ctanos", url: "https://www.tusanagustin.com/contactanos" },
    { name: "Sobre nosotros", url: "https://www.tusanagustin.com/sobre-nosotros" },
    { name: "Preguntas frecuentes", url: "https://www.tusanagustin.com/preguntas-frecuentes" },
    { name: "Condiciones legales", url: "https://www.tusanagustin.com/condiciones-legales" },
    { name: "Pol\xEDticas de privacidad", url: "https://www.tusanagustin.com/politicas-de-privacidad" },
    { name: "Consentimiento de cookies", url: "https://www.tusanagustin.com/cookies" },
    { name: "Mapa del sitio", url: "https://www.tusanagustin.com/mapa-del-sitio" }
  ].map((link) => renderTemplate`<li data-astro-cid-sz7xmlte><a${addAttribute(link.url, "href")} class="text-gray-300 hover:text-[#4EAC9F] flex items-center gap-2 text-base font-medium transition-colors" style="font-family: 'Poppins', sans-serif;" data-astro-cid-sz7xmlte> <span class="w-1.5 h-1.5 rounded-full bg-[#4EAC9F]" data-astro-cid-sz7xmlte></span> ${link.name} </a></li>`)} </ul> </nav> <nav aria-label="Footer Navigation Tertiary" data-astro-cid-sz7xmlte> <ul class="space-y-1.5" data-astro-cid-sz7xmlte> ${[
    { name: "Trabaja con nosotros", url: "https://www.tusanagustin.com/trabaja-con-nosotros" },
    { name: "Events & Wedding Planners", url: "https://www.tusanagustin.com/planeadores" },
    { name: "Artistas y espect\xE1culos", url: "https://www.tusanagustin.com/artistas-y-espectaculos" },
    { name: "Lugares para eventos", url: "https://www.tusanagustin.com/lugares-eventos" },
    { name: "Proveedores", url: "https://www.tusanagustin.com/proveedores" }
  ].map((link) => renderTemplate`<li data-astro-cid-sz7xmlte><a${addAttribute(link.url, "href")} class="text-gray-300 hover:text-[#4EAC9F] flex items-center gap-2 text-base font-medium transition-colors" style="font-family: 'Poppins', sans-serif;" data-astro-cid-sz7xmlte> <span class="w-1.5 h-1.5 rounded-full bg-[#4EAC9F]" data-astro-cid-sz7xmlte></span> ${link.name} </a></li>`)} </ul> </nav> </div> </div> <!-- PAYMENT METHODS --> <div class="flex flex-col items-end w-full mt-10 pr-4" data-astro-cid-sz7xmlte> <div class="flex flex-col items-center space-y-2" data-astro-cid-sz7xmlte> <p class="text-[#4EAC9F] text-lg italic font-medium opacity-90" data-astro-cid-sz7xmlte>Medios de Pago</p> <div class="bg-[#E5E0D8] px-8 py-3 rounded-2xl flex flex-wrap justify-center items-center gap-6 shadow-md" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": imgVisa, "alt": "Visa", "class": "h-8 w-auto opacity-70 hover:opacity-100 transition-all duration-300", "loading": "lazy", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Image", $$Image, { "src": imgMastercard, "alt": "Mastercard", "class": "h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300", "loading": "lazy", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Image", $$Image, { "src": imgPaypal, "alt": "PayPal", "class": "h-8 w-auto opacity-70 hover:opacity-100 transition-all duration-300", "loading": "lazy", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Image", $$Image, { "src": imgPse, "alt": "PSE", "class": "h-14 w-auto opacity-70 hover:opacity-100 transition-all duration-300", "loading": "lazy", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Image", $$Image, { "src": imgWompi, "alt": "Wompi", "class": "h-12 w-auto opacity-70 hover:opacity-100 transition-all duration-300", "loading": "lazy", "data-astro-cid-sz7xmlte": true })} </div> </div> </div> </div> </footer> ${renderScript($$result, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/Footer.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="min-h-screen"> ${renderComponent($$result2, "Banner", $$Banner, {})} ${renderComponent($$result2, "HeroHistory", $$HeroHistory, {})} ${renderComponent($$result2, "EventsPagination", $$EventsPagination, {})} <div class="md:my-16"></div> <div class="md:my-16"></div> <div class="md:my-16"></div> ${renderComponent($$result2, "Locaciones", $$Locaciones, {})} <div class="my-0 md:my-10"></div> ${renderComponent($$result2, "BrandInfo", $$BrandInfo, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/pages/index.astro", void 0);

const $$file = "C:/Users/KEVIN/Desktop/nuevas internas/historiasparaeventos/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page as a, baseService as b, parseQuality as p };
