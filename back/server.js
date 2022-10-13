const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.json({ limit: "50mb" }));

//x-www-form-ulencoded 를 사용하면 필요
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use("/api/gallery", require("./routes/galleryRoutes.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
