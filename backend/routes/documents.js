const express = require("express");
const { v4: uuidv4 } = require("uuid");
const {
  saveDocument,
  loadDocument,
  loadTemplate
} = require("../services/storageService");

const router = express.Router();

router.post("/save", (req, res) => {
  const { content } = req.body;
  const id = uuidv4();
  saveDocument(id, content);
  res.json({ message: "Document saved", id });
});

router.get("/load/:id", (req, res) => {
  const doc = loadDocument(req.params.id);
  if (!doc) return res.status(404).json({ error: "Not found" });
  res.json(doc);
});

router.get("/template", (req, res) => {
  const template = loadTemplate();
  res.json(template);
});

module.exports = router;
