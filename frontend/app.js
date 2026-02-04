const editor = document.getElementById("editor");

function saveDoc() {
  fetch("http://localhost:3000/api/documents/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: editor.innerHTML })
  })
  .then(res => res.json())
  .then(data => alert("Saved with ID: " + data.id));
}

function loadTemplate() {
  fetch("http://localhost:3000/api/documents/template")
    .then(res => res.json())
    .then(data => {
      editor.innerHTML = data.content;
    });
}
