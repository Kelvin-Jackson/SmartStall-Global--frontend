document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartItems.innerHTML = cart.map(id => `<p>Product ID: ${id}</p>`).join("");
});
