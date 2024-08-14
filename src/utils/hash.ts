import crypto from "crypto";

export function createHash(data: string) {
  const hash = crypto.createHash("sha256");
  return hash.update(data).digest("hex");
}
