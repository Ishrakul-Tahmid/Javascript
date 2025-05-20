const products = [
    { id: 01, name: "xiaomi", description: "this is xiaomi", price: 500, color: "black" },
    { id: 02, name: "Iphone", description: "this is Iphone", price: 800, color: "golden" },
    { id: 03, name: "xiaomi", description: "this is xiaomi", price: 500, color: "black" },
    { id: 04, name: "Iphone", description: "this is Iphone", price: 1000, color: "gray" },
    { id: 05, name: "xiaomi", description: "this is xiaomi", price: 00, color: "black" },
  ];

// Map
// It returns result in a array
const sum = products.map(product=>product.id*2);
console.log(sum);

// Foreach
const result = products.forEach(product => {
    console.log(product.id);
});