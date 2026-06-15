import { rmSync } from "node:fs";

if (process.env.NODE_ENV === "development") {
  process.exit(0);
}

const testOutputUrl = new URL("../../out/test", import.meta.url);

rmSync(testOutputUrl, {
  force: true,
  recursive: true,
});
