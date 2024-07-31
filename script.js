document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(response => response.json())
      .then(data => {
        const productList = document.getElementById('product-list');
        data.forEach(product => {
          // Create product container
          const productDiv = document.createElement('div');
          productDiv.className = 'product';
  
          // Create image element
          const img = document.createElement('img');
          img.src = product.image;
          img.alt = product.title;
  
          // Create product info container
          const infoDiv = document.createElement('div');
          infoDiv.className = 'product-info';
  
          // Product title
          const title = document.createElement('h2');
          title.textContent = product.title;
  
          // Product description
          const description = document.createElement('p');
          description.textContent = product.description;
  
          // Product price
          const price = document.createElement('p');
          price.className = 'price';
          price.textContent = `$${product.price}`;
  
          // Append elements to the DOM
          infoDiv.appendChild(title);
          infoDiv.appendChild(description);
          infoDiv.appendChild(price);
          productDiv.appendChild(img);
          productDiv.appendChild(infoDiv);
          productList.appendChild(productDiv);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  