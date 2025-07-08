document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  if (productList) {
    // You can load from a JSON file or hardcoded products
    const products = [
      { id: 1, name: "Tomatoes", price: 50 },
      { id: 2, name: "Onions", price: 40 }
    ];

    products.forEach(product => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: KES ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
