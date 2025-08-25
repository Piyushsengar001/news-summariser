// netlify/functions/server.js
import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Netlify serverless function!" });
});

export const handler = serverless(app);
