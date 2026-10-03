import { bindings, defineConfig } from "@cloudflare/config";

export default defineConfig({
  worker: {
    name: "shenanigans-dog",
    compatibilityDate: "2028-04-30",
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
        enabled: true,
        persist: true,
        headSamplingRate: 1,
      },
    },
  },
});
