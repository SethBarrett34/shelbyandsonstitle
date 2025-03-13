import { installGlobals } from "@remix-run/node";
import express from "express";
import { createRequestHandler } from "@remix-run/express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

installGlobals();

const BUILD_DIR = path.join(__dirname, "build");
const PUBLIC_DIR = path.join(__dirname, "public");

// Create an express app
const app = express();

// Serve public directory at the root path
app.use(express.static(PUBLIC_DIR, { maxAge: "1h" }));

// Add any other static asset directories here
// e.g. app.use(express.static("public/images"));

// Then handle client entries
app.all(
  "*",
  createRequestHandler({
    build: await import("./build/index.js"),
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));
