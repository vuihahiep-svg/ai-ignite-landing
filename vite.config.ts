import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { componentTagger } from "lovable-tagger";

const BUOIHOC_SKIP = new Set(["ytuong.md"]);

/** Copy markdown from repo root `buoihoc/` into `public/buoihoc/` for /baocao viewer */
function copyBuoihocMarkdown() {
  const srcDir = path.resolve(__dirname, "../buoihoc");
  const destDir = path.resolve(__dirname, "public/buoihoc");

  const copy = () => {
    if (!fs.existsSync(srcDir)) return;
    fs.mkdirSync(destDir, { recursive: true });
    for (const name of fs.readdirSync(srcDir)) {
      if (!name.endsWith(".md") || BUOIHOC_SKIP.has(name)) continue;
      fs.copyFileSync(path.join(srcDir, name), path.join(destDir, name));
    }
    for (const skip of BUOIHOC_SKIP) {
      const stale = path.join(destDir, skip);
      if (fs.existsSync(stale)) fs.unlinkSync(stale);
    }
  };

  return {
    name: "copy-buoihoc-markdown",
    buildStart: copy,
    configureServer() {
      copy();
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [copyBuoihocMarkdown(), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
