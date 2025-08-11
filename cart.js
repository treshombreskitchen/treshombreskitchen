// Load cart from local storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItemsContainer.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td><button class="btn ghost" onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
  });

  cartTotal.textContent = total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Handle placing order
document.getElementById("place-order").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !phone || !address) {
    alert("Please fill in all fields.");
    return;
  }

  // Here’s where we could send the order to your email or server
  alert(`Thank you, ${name}! Your order has been placed.`);

  // Clear cart
  localStorage.removeItem("cart");
  cart = [];
  renderCart();
});

renderCart();
