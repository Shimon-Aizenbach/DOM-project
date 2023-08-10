const data = JSON.parse(localStorage.getItem(`data`));
console.log(data);
const productToDisplaySearch = window.location.search;
const productTODisplayParams = new URLSearchParams(productToDisplaySearch);
const productTODisplay = Number(productTODisplayParams.get(`productId`));
console.log(productTODisplay)
const productImage = document.getElementsByClassName(`product-image`)[0];
productImage.src = data[productTODisplay - 1].image;
const productTitle = document.getElementsByClassName(`product-title`)[0];
productTitle.textContent = data[productTODisplay - 1].title;
const productDescription =
  document.getElementsByClassName(`product-description`)[0];
productDescription.textContent = data[productTODisplay - 1].description;
const productCategory = document.getElementsByClassName(`product-category`)[0];
productCategory.textContent = data[productTODisplay - 1].category;
const productPrice = document.getElementsByClassName(`product-price`)[0];
productPrice.textContent = data[productTODisplay - 1].price;
const productQuantity = document.getElementsByClassName(`product-quantity`)[0];
productQuantity.textContent = parseInt(Math.random() * 10);
