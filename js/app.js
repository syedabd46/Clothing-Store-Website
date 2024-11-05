/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Syed Abdullah
 *      Student ID: 155781198
 *      Date:       2024-08-16
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

// Function to create category buttons
function createCategoryButtons() {
  const menu = document.querySelector("#menu");
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.addEventListener("click", () => showProducts(category));
    menu.appendChild(button);
  });
}

// Function to create a product card
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = product.title;
  cardTitle.classList.add("card-title");
  cardContent.appendChild(cardTitle);

  const cardDescription = document.createElement("p");
  cardDescription.textContent = product.description;
  cardDescription.classList.add("card-description");
  cardContent.appendChild(cardDescription);

  const cardPrice = document.createElement("p");
  cardPrice.textContent = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(product.price / 100);
  cardPrice.classList.add("card-price");
  cardContent.appendChild(cardPrice);

  card.appendChild(cardContent);

  return card;
}

// Function to display products in a category
function showProducts(category) {
  const productList = document.querySelector("#category-products");
  const selectedCategoryTitle = document.querySelector("#selected-category");
  selectedCategoryTitle.textContent = category.name;
  productList.innerHTML = "";

  const filteredProducts = products.filter(
    (product) => product.categories.includes(category.id) && !product.discontinued
  );

  filteredProducts.forEach((product) => {
    const productCard = createProductCard(product);
    productList.appendChild(productCard);
  });
}

// Function to initialize the store
function initStore() {
  createCategoryButtons();
  if (categories.length > 0) {
    showProducts(categories[0]);
  }
}

// Run the initialization function when the page loads
window.addEventListener("load", initStore);

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const form = event.target;
  const formData = new FormData(form);

  // Process form data (e.g., send it to a server, or handle it in some way)
  console.log("Form Data Submitted:");
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  // Clear form or give feedback to the user
  form.reset();
}

// Function to add more input fields dynamically
function addMoreInputs() {
  const container = document.querySelector("#input-container");
  const newInputGroup = document.createElement("div");
  newInputGroup.classList.add("input-group");

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "extra-input[]";
  newInput.placeholder = "Additional input";
  newInput.classList.add("form-input");

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-input");
  removeButton.addEventListener("click", () => container.removeChild(newInputGroup));

  newInputGroup.appendChild(newInput);
  newInputGroup.appendChild(removeButton);
  container.appendChild(newInputGroup);
}

// Attach event listener to the form
const form = document.querySelector("#myForm");
if (form) {
  form.addEventListener("submit", handleFormSubmission);
}

// Attach event listener to the "Add More" button
const addMoreButton = document.querySelector("#addMoreInputs");
if (addMoreButton) {
  addMoreButton.addEventListener("click", addMoreInputs);
}
