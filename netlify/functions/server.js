import { createRequestHandler } from "@remix-run/express";
import * as build from "../../build/index.js";
import express from "express";
import { installGlobals } from "@remix-run/node";
import serverless from "serverless-http";

installGlobals();

const app = express();

app.use(express.static("public", { maxAge: "1h" }));
app.use(express.static("public/build", { immutable: true, maxAge: "1y" }));

app.all(
  "*",
  createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  })
);

// Export the serverless function for Netlify
export const handler = serverless(app);