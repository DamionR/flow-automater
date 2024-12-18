import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { EventEmitter } from "events";

EventEmitter.defaultMaxListeners = 20;

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "~": "/app",
    },
  },
  define: {
    "process.env": {}, // Add this to avoid the "process is not defined" error
  },
});
