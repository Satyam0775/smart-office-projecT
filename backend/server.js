const express = require("express");
const cors = require("cors");
const documentRoutes = require("./routes/documents");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/documents", documentRoutes);

app.listen(PORT, () => {
  console.log(`Smart Office server running at http://localhost:${PORT}`);
});
