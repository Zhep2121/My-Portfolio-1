class ProductInterface {
  constructor() {
     this.productList = [
      {
        "id": 1,
        "name": "Uniqlo T-shirt",
        "category": "Clothing",
        "brand": "Uniqlo",
        "quantity": 1,
        "price": 10.00,
      },
      {
        "id": 2,
        "name": "Levi's Jeans",
        "category": "Clothing",
        "brand": "Levi's",
        "quantity": 1,
        "price": 50.00
      },
      {
        "id": 3,
        "name": "Nike Sneakers",
        "category": "Shoes",
        "brand": "Nike",
        "quantity": 1,
        "price": 60.00
      },
      {
        "id": 4,
        "name": "Adidas Sandals",
        "category": "Shoes",
        "brand": "Adidas",
        "quantity": 1,
        "price": 40.00
      },
      {
        "id": 5,
        "name": "Zara Dress",
        "category": "Clothing",
        "brand": "Zara",
        "quantity": 1,
        "price": 30.00
      },
      {
        "id": 6,
        "name": "H&M Skirt",
        "category": "Clothing",
        "brand": "H&M",
        "quantity": 1,
        "price": 20.00
      },
      {
        "id": 7,
        "name": "Mango Blouse",
        "category": "Clothing",
        "brand": "Mango",
        "quantity": 1,
        "price": 15.00
      },
      {
        "id": 8,
        "name": "Christian Louboutin Heels",
        "category": "Shoes",
        "brand": "Christian Louboutin",
        "quantity": 1,
        "price": 70.00
      },
      {
        "id": 9,
        "name": "The North Face Jacket",
        "category": "Clothing",
        "brand": "The North Face",
        "quantity": 1,
        "price": 40.00
      },
      {
        "id": 10,
        "name": "Gucci Hat",
        "category": "Accessories",
        "brand": "Gucci",
        "quantity": 1,
        "price": 10.00
      }
    ]
  }
 

search(query) {
  return this.productList.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()));
    }
filterPrice(maxPrice) {
  return this.productList.filter(product => product.price <= maxPrice);
}
filterCategory(category) {
  return this.productList.filter(product => product.category === category);
}
  filterPrice(maxPrice) {
     return this.productList.filter(product => product.price <= maxPrice);
  }
 }
 
 const productInterface = new ProductInterface();
 
 function performSearch() {
  const searchInput = document.getElementById("searchInput").value;
  const budgetInput = document.getElementById("budgetInput").value;
  const categorySelector = document.getElementById("categorySelector");
  const selectedCategory = categorySelector.options[categorySelector.selectedIndex].value;
  const resultArea = document.getElementById("result");
 
  // RESET AREA
  resultArea.innerHTML = "";
 
  // TO PERFORM SEARCH
  const results = productInterface.search(searchInput);
 
  // BUDGET FILTER
  let filteredResults = results;
  if (budgetInput) {
     filteredResults = productInterface.filterPrice(budgetInput);
  }
 
  // CATEGORY FILTER 
  let finalFilteredResults = filteredResults;
  if (selectedCategory !== "all") {
     finalFilteredResults = productInterface.filterCategory(selectedCategory);
     
  }
  document.getElementById("categorySelector").addEventListener("change", function() {
      const selectedCategory = this.value;
      
   });
 
  // TO DISPLAY RESULT
  finalFilteredResults.forEach(product => {
     const productDiv = document.createElement("div");
     productDiv.innerHTML = `
       <h3>${product.name}</h3>
      
       <p>Price: $${product.price.toFixed(2)}</p>
     `;
     resultArea.appendChild(productDiv);
  });
 }