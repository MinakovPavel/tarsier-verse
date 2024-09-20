const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Tarsier";
const description = "by tarsierverse.com";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "TV",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.tarsierverse.com",
  creators: [
    {
      address: "93AeXfXG9z6ia6z6QoRQkLymUrGhRdUp5aE2VUzi3zrj",
      share: 100,
    },
  ],
};


// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 2109,//4109
    layersOrder: [
      { name: "Background" },
      { name: "Fur" },
      { name: "Clothes" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Hat" },
      { name: "Mouth" },
    ],
  },
  {
    growEditionSizeTo: 4109,
    layersOrder: [
      { name: "Background" },
      { name: "Items" },
      { name: "Fur" },
      { name: "Clothes" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Hat" },
      { name: "Mouth" },
    ],
  },
  {
    growEditionSizeTo: 5800,
    layersOrder: [
      { name: "Background" },
      { name: "Fur" },
      { name: "Clothes" },
      { name: "Accessories" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Hat" },
      { name: "Mouth" },
    ],
  },
  {
    growEditionSizeTo: 8000,
    layersOrder: [
      { name: "Background" },
      { name: "Items" },
      { name: "Fur" },
      { name: "Clothes" },
      { name: "Accessories" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Hat" },
      { name: "Mouth" },
    ],
  },
  {
    growEditionSizeTo: 8509,
    layersOrder: [
      { name: "Background" },
      { name: "Fur" },
      { name: "Clothes" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Glasses" },
      { name: "Hat" },
      { name: "Mouth" },
    ],
  },
  {
    growEditionSizeTo: 9009,
    layersOrder: [
      { name: "Background" },
      { name: "Items" },
      { name: "Fur" },
      { name: "Clothes" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Glasses" },
      { name: "Hat" },
      { name: "Mouth" },
    ],
  },
  {
    growEditionSizeTo: 9700,
    layersOrder: [
      { name: "Background" },
      { name: "Fur" },
      { name: "Clothes" },
      { name: "Accessories" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Glasses" },
      { name: "Hat" },
      { name: "Mouth" },
    ],
  },
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Background" },
      { name: "Items" },
      { name: "Fur" },
      { name: "Clothes" },
      { name: "Accessories" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Glasses" },
      { name: "Hat" },
      { name: "Mouth" },
    ],
  }
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
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
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
