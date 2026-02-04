const fs = require("fs");
const path = require("path");

const documentsPath = path.join(__dirname, "../data/documents");
const templatesPath = path.join(__dirname, "../data/templates/official-letter.json");

function saveDocument(id, content) {
  const filePath = path.join(documentsPath, `${id}.json`);
  const data = {
    id,
    content,
    savedAt: new Date().toISOString()
  };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function loadDocument(id) {
  const filePath = path.join(documentsPath, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath));
}

function loadTemplate() {
  return JSON.parse(fs.readFileSync(templatesPath));
}

module.exports = {
  saveDocument,
  loadDocument,
  loadTemplate
};
