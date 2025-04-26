// Sample Products
const products = [
    { id: 1, name: "OTDR", price: "Rs 45000", image: "OTDR.jpg" },
    { id: 2, name: "ONT", price: "Rs 1700", image: "ONT.jpg" },
    { id: 3, name: "Fiber Cleaver", price: "Rs 85000", image: "Fiber Cleaver.jpg" },
    { id: 4, name: "Power Meter", price: "Rs 1600", image: "Power Meter.jpg" }
  ];
  
  // Load Products
  const productList = document.getElementById('product-list');
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product');
  
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
  
    productList.appendChild(productCard);
  });
  
  // Cart
  let cartItems = [];
  
  function addToCart(productName) {
    cartItems.push(productName);
    updateCart();
  }
  
  function updateCart() {
    const cartDiv = document.getElementById('cart-items');
    cartDiv.innerHTML = "";
  
    if (cartItems.length === 0) {
      cartDiv.innerHTML = "<p>No items in cart.</p>";
    } else {
      const ul = document.createElement('ul');
      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      cartDiv.appendChild(ul);
    }
  }
  