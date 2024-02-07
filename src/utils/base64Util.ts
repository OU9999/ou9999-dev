interface Base64Data {
  base64: string;
  img: {
    src: string;
  };
}

export const getBase64 = (src: string): Base64Data => {
  const splitWord = src.split("/");
  const dirSrc = splitWord[2];
  const titleSrc = splitWord[3];
  const imgSrc = splitWord[4];

  const base64JSON = require(`../scripts/output/${dirSrc}/${titleSrc}/base64.json`);
  return base64JSON[imgSrc];
};
