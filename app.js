const path = require("path");
const cors = require("cors");
const express = require("express");
const { default: mongoose } = require("mongoose");

const authRouter = require("./authRouter");
const PORT = 8000;
const HOST = "localhost";
const username = encodeURIComponent("Pilotus42");
const password = encodeURIComponent("fZ86JkEjrjJiYz5A");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.use("/auth", authRouter);

const start = async () => {
  try {

    app.listen(process.env.PORT || PORT, () =>
      console.log(`Server is running on http://${HOST}:${PORT}`)
    );
      await mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.cekqq4q.mongodb.net/Maksakov_edu_nix?retryWrites=true&w=majority`
      );
  } catch (e) {}
};
start();
