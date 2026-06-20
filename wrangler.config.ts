import { defineWranglerConfig } from "wrangler/experimental-config";

// Experimental tooling/bundling config (wrangler --x-new-config).
// assetsDirectory is the only tooling-side asset setting; runtime asset
// behavior would live in cloudflare.config.ts under `assets`.
export default defineWranglerConfig({
  assetsDirectory: "./dist",
});
