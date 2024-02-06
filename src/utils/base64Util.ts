import fs from "fs";
import path from "path";
import sharp from "sharp";

export const getBase64Data = async (src: string) => {
  const isDev = process.env.NODE_ENV !== "production";
  const publicFolder = isDev ? "public" : "";
  const imagePath = path.join(process.cwd(), publicFolder, src);

  const imageBuffer = fs.readFileSync(imagePath);

  const resizedBuffer = await sharp(imageBuffer).resize(10, 5).toBuffer();

  const base64Image = `data:image/jpeg;base64,${resizedBuffer.toString(
    "base64"
  )}`;

  return base64Image;
};
