document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    let name = button.dataset.name;
    let price = parseFloat(button.dataset.price);
    
    // Save to local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to your order!`);
  });
});
