const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// get header + posts/${title}
const getDirNames = () => {
  const inputDir = path.join(__dirname, "content/posts");
  const files = fs.readdirSync(inputDir);

  const mdxFiles = files.filter((file) => path.extname(file) === ".mdx");

  const fileNames = mdxFiles.map((file) => "post/" + path.parse(file).name);

  fileNames.push("header");

  return fileNames;
};

const processImages = (dir) => {
  const inputDir = path.join(__dirname, "public", "imgs", dir);
  const outputDir = path.join(__dirname, "public", "imgs", "base64", dir);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.readdir(inputDir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const imagePath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${path.parse(file).name}.txt`);

      if (!fs.existsSync(outputPath)) {
        sharp(imagePath)
          .resize(10, 5)
          .toBuffer()
          .then((buffer) => {
            const base64Image = `data:image/jpeg;base64,${buffer.toString(
              "base64"
            )}`;
            fs.writeFile(outputPath, base64Image, (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log(`Base64 data URL saved for ${file}.`);
              }
            });
          })
          .catch((err) => console.error(err));
      }
    });
  });
};

const dirNames = getDirNames();

dirNames.forEach((dir) => processImages(dir));
