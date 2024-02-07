import { readdir, readFile, writeFile, mkdir } from "fs/promises";
import { readdirSync } from "fs";
import path from "node:path";
import sharp from "sharp";

const generateAllBase64 = async (dir) => {
  const imageDir = path.join(process.cwd(), "public", "imgs", dir);
  let result = {};

  let files = await readdir(path.join(imageDir));
  files = files.filter((file) => {
    return (
      file.endsWith(".jpg") ||
      file.endsWith(".jpeg") ||
      file.endsWith(".png") ||
      file.endsWith(".webp")
    );
  });

  for (const filename of files) {
    const imageBuffer = await readFile(
      path.join("public", "imgs", dir, filename)
    );

    const base64 = await sharp(imageBuffer)
      .resize(10, 5)
      .toBuffer()
      .then((buffer) => {
        const base64Image = `data:image/jpeg;base64,${buffer.toString(
          "base64"
        )}`;
        return base64Image;
      })
      .catch((err) => console.error(err));

    result[filename] = {
      base64,
      img: { src: `/imgs/${dir}/${filename}` },
    };
  }

  return result;
};

const writeJSON = async (obj, dir) => {
  const exists = (
    await readdir(path.join(process.cwd(), "src", "scripts", "output"))
  ).includes(dir);

  if (!exists) {
    await mkdir(path.join(process.cwd(), "src", "scripts", "output", dir), {
      recursive: true,
    });
  }

  await writeFile(
    path.join(process.cwd(), "src", "scripts", "output", dir, "base64.json"),
    JSON.stringify(obj)
  );
};

const getDirNames = () => {
  const inputDir = path.join(process.cwd(), "content/posts");
  const files = readdirSync(inputDir);

  const mdxFiles = files.filter((file) => path.extname(file) === ".mdx");

  const fileNames = mdxFiles.map((file) => "post/" + path.parse(file).name);

  fileNames.push("header");

  return fileNames;
};

const init = async () => {
  const dirNames = getDirNames();
  let result = {};

  for (const dir of dirNames) {
    const base64Data = await generateAllBase64(dir);
    result[dir] = base64Data;
  }

  for (const dir in result) {
    await writeJSON(result[dir], dir);
  }
};

init();
