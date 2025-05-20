const products = [
    { id: 01, name: "xiaomi", description: "this is xiaomi", price: 500, color: "black" },
    { id: 02, name: "Iphone", description: "this is Iphone", price: 800, color: "golden" },
    { id: 03, name: "xiaomi", description: "this is xiaomi", price: 500, color: "black" },
    { id: 04, name: "Iphone", description: "this is Iphone", price: 1000, color: "gray" },
    { id: 05, name: "xiaomi", description: "this is xiaomi", price: 00, color: "black" },
  ];

//   for (let i=0; i<products.length; i++){
//     const element = products[i];
//     if(element.id==03){
//         console.log(element);
//     }
//   }


// Find: for finding a single product
// const result = products.find(pd=>pd.id==03);
// console.log(result);
// If item not found show undefined


// Filter: it is used to find multiple item of same category
const result=products.filter(product=>product.color=="black")
console.log(result);
// If item not found show empty([])