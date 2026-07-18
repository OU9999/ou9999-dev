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

    if (key === "help") {
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
node .agents/skills/gouache-thumbnail/scripts/convert-post-image.mjs \\
  --input tmp/gouache-post/<slug>-<key>-source.png \\
  --slug <slug> \\
  --key <key>

Options:
  --input <path>       Source image path. Required.
  --slug <kebab-case>  Post slug. Required.
  --key <kebab-case>   Image key. Required.
  --root <path>        Project root. Defaults to cwd.
  --quality <number>   WebP quality. Defaults to 88.
`);
};

const assertInput = async (input) => {
  if (!input) {
    throw new Error("--input is required");
  }

  await access(input);
};

const assertKebabCase = (value, name) => {
  if (!value) {
    throw new Error(`--${name} is required`);
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    throw new Error(`--${name} must be lowercase kebab-case`);
  }
};

const init = async () => {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    usage();
    return;
  }

  const input = args.input ? path.resolve(args.input) : "";
  const slug = args.slug;
  const key = args.key;
  const root = path.resolve(args.root ?? process.cwd());
  const quality = Number.parseInt(args.quality ?? "88", 10);

  await assertInput(input);
  assertKebabCase(slug, "slug");
  assertKebabCase(key, "key");

  const outputDir = path.join(root, "public", "imgs", "post", slug);
  const outputPath = path.join(outputDir, `${key}.webp`);

  await mkdir(outputDir, { recursive: true });

  await sharp(input)
    .resize(1600, 900, { fit: "cover", position: "center" })
    .webp({ quality })
    .toFile(outputPath);

  console.log(`post: ${outputPath}`);
};

init().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
