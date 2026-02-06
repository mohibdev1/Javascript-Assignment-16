let products = {
  car: [
    {name:"Tesla Model S", price:1000, rating:4.5, img:"images/tesla.png"},
    {name:"BMW X5", price:900, rating:4.3, img:"images/bmw.png"},
    {name:"Audi A6", price:1200, rating:4.6, img:"images/audi a6.png"},
    {name:"Mercedes Benz", price:1100, rating:4.4, img:"images/mercedes.png"}
  ],

  bike: [
    {name:"Kawasaki Ninja", price:600, rating:4.7, img:"images/kawasaki.png"},
    {name:"Yamaha R1", price:650, rating:4.6, img:"images/yamaha.png"},
    {name:"Honda CBR", price:550, rating:4.4, img:"images/honda cbr.png"},
    {name:"Harley Davidson", price:700, rating:4.5, img:"images/harley davidson.png"}
  ],

  camera: [
    {name:"Canon EOS R5", price:1400, rating:4.8, img:"images/canon.png"},
    {name:"Sony Alpha", price:1300, rating:4.6, img:"images/sony.png"},
    {name:"Nikon Z6", price:1200, rating:4.5, img:"images/nikon.png"},
    {name:"Fujifilm XT4", price:1100, rating:4.4, img:"images/fujifilm.png"}
  ],

  mobile: [
    {name:"iPhone 16 Pro Max", price:1600, rating:4.9, img:"images/iphone 16.png"},
    {name:"Samsung S24 Ultra", price:1500, rating:4.7, img:"images/samsung_s24.png"},
    {name:"Google Pixel 9 Pro", price:1400, rating:4.6, img:"images/google pixel.png"},
    {name:"OnePlus 12", price:1300, rating:4.5, img:"images/oneplus.png"}
  ]
};

let grid = document.getElementById("product-grid");
let filter = document.getElementById("filter");

function showProducts(category = "all") {
  grid.innerHTML = "";

  for (let cat in products) {
    if (category !== "all" && cat !== category) continue;

    products[cat].forEach(item => {
  grid.innerHTML += `
  <div class="card">
    <img src="${item.img}">
    <h3>${item.name}</h3>

    <div class="meta">
      <span class="price">Rs ${item.price}</span>
      <span class="rating">Rating ${item.rating}</span>
    </div>
  </div>
`;

    });
  }
}

filter.addEventListener("change", function () {
  showProducts(this.value);
});

showProducts();
