const asyncHandler = require("express-async-handler");
const { upload } = require("./awsController.js");

const createGallery = asyncHandler(async (req, res) => {
  const image = req.file;
  const result = await upload(image);
  res.status(201).json({ location: result.Location });
});

const getGallery = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get photes" });
});

module.exports = {
  createGallery,
  getGallery,
};
