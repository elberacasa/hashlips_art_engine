"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "test 1";
const baseUri = "ipfs://QmTwcAyFnUoRkTKGSRnoUCLzhLrgQEnfq19fhdChhQVLvh";

const layerConfigurations = [
  {
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Background" },
      { name: "Cdimage" },
      { name: "Eyes" },
      { name: "Hats" },
      { name: "Sunglasses" },
    ],
  },
  {
    growEditionSizeTo: 41,
    layersOrder: [
      { name: "Background" },
      { name: "Eyes" },
      { name: "Hats Rare" },
      { name: "Sunglasses" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
