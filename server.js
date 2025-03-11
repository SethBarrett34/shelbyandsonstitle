import { installGlobals } from "@remix-run/node";
import express from "express";
import { createRequestHandler } from "@remix-run/express";

installGlobals();

const app = express();

// Handle asset requests
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

// Handle public asset requests
app.use(express.static("public", { maxAge: "1h" }));

// Handle SSR requests
app.all(
  "*",
  createRequestHandler({
    build: await import("./build/index.js"),
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));
