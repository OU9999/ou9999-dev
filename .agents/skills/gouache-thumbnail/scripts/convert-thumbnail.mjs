#!/usr/bin/env node

import { access, mkdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const parseArgs = (argv) => {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (!token.startsWith("--")) {
      continue;
    }

    const key = token.slice(2);

    if (key === "skip-og" || key === "help") {
      args[key] = true;
      continue;
    }

    args[key] = argv[index + 1];
    index += 1;
  }

  return args;
};

const usage = () => {
  console.log(`Usage:
node .agents/skills/gouache-thumbnail/scripts/convert-thumbnail.mjs \\
  --input tmp/gouache-thumbnails/<thumbnail>-source.png \\
  --key <thumbnail>

Options:
  --input <path>       Source image path. Required.
  --key <kebab-case>   Thumbnail key. Required.
  --root <path>        Project root. Defaults to cwd.
  --quality <number>   WebP quality. Defaults to 90.
  --skip-og            Do not create public/imgs/openGraph/<key>.png.
`);
};

const assertInput = async (input) => {
  if (!input) {
    throw new Error("--input is required");
  }

  await access(input);
};

const assertKey = (key) => {
  if (!key) {
    throw new Error("--key is required");
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key)) {
    throw new Error("--key must be lowercase kebab-case");
  }
};

const init = async () => {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    usage();
    return;
  }

  const input = args.input ? path.resolve(args.input) : "";
  const key = args.key;
  const root = path.resolve(args.root ?? process.cwd());
  const quality = Number.parseInt(args.quality ?? "90", 10);

  await assertInput(input);
  assertKey(key);

  const headerDir = path.join(root, "public", "imgs", "header");
  const openGraphDir = path.join(root, "public", "imgs", "openGraph");
  const headerPath = path.join(headerDir, `${key}.webp`);
  const openGraphPath = path.join(openGraphDir, `${key}.png`);

  await mkdir(headerDir, { recursive: true });

  await sharp(input)
    .resize(3840, 2160, { fit: "cover", position: "center" })
    .webp({ quality })
    .toFile(headerPath);

  console.log(`header: ${headerPath}`);

  if (!args["skip-og"]) {
    await mkdir(openGraphDir, { recursive: true });

    await sharp(input)
      .resize(1200, 630, { fit: "cover", position: "center" })
      .png({ compressionLevel: 9 })
      .toFile(openGraphPath);

    console.log(`openGraph: ${openGraphPath}`);
  }
};

init().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
