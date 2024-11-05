/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "p1",
    title: "Nike Blazer Mid '77 Vintage ",
    description: "Casual/Comfort Shoewear",
    price: 14000,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "images/BLAZER+MID+'77+VNTG.jpg"
  },

  {
    id: "p2",
    title: "Nike Air Max 270 ",
    description: "Casual/Comfort Shoewear",
    price: 15000,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "images/ah8050005_air_max_270_black_4_671x.jpg"
  },

  {
    id: "p3",
    title: "Adidas Originals Superstar Casual Sneaker ",
    description: "Casual/Comfort Shoewear",
    price: 13000,
    discontinued: false,
    categories: ["c1"],
    imageUrl:
      "images/eg4959_adidas_originals_superstar_core_black_cloud_white_core_black_1_671x.jpg"
  },

  {
    id: "p4",
    title: "Adidas Ultraboost 23 ",
    description: "Running Shoes",
    price: 26000,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "images/6.jpg"
  },

  {
    id: "p5",
    title: "ASICS® Gel-Cumulus 25 ",
    description: "Running Shoes",
    price: 18000,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "images/5.jpg"
  },

  {
    id: "p6",
    title: "Nike Zoom Vomero 5 ",
    description: "Running Shoes",
    price: 21000,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "images/6.jpg"
  },

  {
    id: "p7",
    title: "Nike KD 17 ",
    description: "Basketball shoes",
    price: 19000,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "images/7.jpg"
  },

  {
    id: "p8",
    title: "Nike Zoom LeBron NXXT Gen Amped",
    description: "Basketball Shoes",
    price: 22500,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "images/8.jpg"
  },

  {
    id: "p9",
    title: "Palladium Pampa Sport Cuff WPN Boots ",
    description: "Boots",
    price: 13999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "images/10.jpg"
  },

  {
    id: "p10",
    title: "Timberland 6 Helcor Boots",
    description: "Boots",
    price: 13999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "images/11.jpg"
  },

  {
    id: "p11",
    title: "Nike Club Embroidered T-Shirt ",
    description: "T-Shirt",
    price: 3500,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "images/12.jpg"
  },

  {
    id: "p12",
    title: "Under Armour Tech Textured T-Shirt ",
    description: "Athletic T-Shirt",
    price: 3000,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "images/13.jpg"
  },

  {
    id: "p13",
    title: "Jordan Dri-FIT Sport Sleeveless T-Shirt ",
    description: "Sleveless T-Shirt",
    price: 4500,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "images/14.jpg"
  },

  {
    id: "p14",
    title: "Adidas Originals Sport Resort Swim Shorts ",
    description: "Swim Shorts",
    price: 2600,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "images/15.jpg"
  },

  {
    id: "p15",
    title: "Nike Club Joggers ",
    description: "Joggers",
    price: 7500,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "images/16.jpg"
  },

  {
    id: "p16",
    title: "Jordan Apex Jumpman Bucket Hat ",
    description: "Bucket Hat",
    price: 4000,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "images/17.jpg"
  },

  {
    id: "p17",
    title: "New Era Raiders 950 2 Tone Color Pack Cap ",
    description: "Snapback",
    price: 2150,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "images/18.jpg"
  },

  {
    id: "p18",
    title: "Nike Club Cap ",
    description: "Trucker Hat",
    price: 2250,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "images/19.jpg"
  },

  {
    id: "p19",
    title: "New Era Blue Jays Knitted Evergreen Hat ",
    description: "Knitted Hat",
    price: 1750,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "images/20.jpg"
  },

  {
    id: "p20",
    title: "New Era Raptors The League Cap ",
    description: "Basketball Cap",
    price: 2600,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "images/21.jpg"
  },

  {
    id: "p21",
    title: "Wmns Air Jordan 1 Low 'Black Croc'",
    description: "Casual/Comfort Shoes",
    price: 22400,
    discontinued: true,
    categories: ["c1"],
    imageUrl: "images/22.jpg"
  },

  {
    id: "p22",
    title: "Dunk High 'Racer Blue'",
    description: "Casual/Comfort Shoes",
    price: 23000,
    discontinued: true,
    categories: ["c1"],
    imageUrl: "images/23.jpg"
  }
];
