import { bindings, defineWorker } from "wrangler/experimental-config";

// Experimental TypeScript Worker config (wrangler --x-new-config).
// Runtime settings live here; the assets directory lives in
// wrangler.config.ts as the only tooling-side asset setting.
export default defineWorker({
  name: "shenanigansd-dog",
  compatibilityDate: "2026-06-08",
  domains: ["shenanigans.dog"],
  previewUrls: true,
  env: {
    CF_VERSION_METADATA: bindings.versionMetadata(),
  },
  observability: {
    enabled: false,
    headSamplingRate: 1,
    logs: {
      enabled: true,
      headSamplingRate: 1,
      persist: true,
      invocationLogs: true,
    },
    traces: {
      enabled: false,
      persist: true,
      headSamplingRate: 1,
    },
  },
});
