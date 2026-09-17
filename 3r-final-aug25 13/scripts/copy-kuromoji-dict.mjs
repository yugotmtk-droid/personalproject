import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const source = join(process.cwd(), "node_modules", "kuromoji", "dict");
const destination = join(process.cwd(), "public", "kuromoji-dict");

if (existsSync(source)) {
  mkdirSync(destination, { recursive: true });
  cpSync(source, destination, { recursive: true, force: true });
  console.log("Copied kuromoji dictionary to public/kuromoji-dict");
}
