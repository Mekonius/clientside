/*var message: string = 'hello,world';
//Create a string in js called message format
let title = document.createElement('h1');
title.textContent = message;

document.body.appendChild(title);
*//*
let box;
console.log(typeof(box));

box = 0.40;
console.log(typeof(box));


box = "hello";
console.log(typeof(box));

box = 100;
console.log(typeof(box));
*/


interface Products{
    id: number,
    name: string,
    price: number
}


function getProduct(id: number): Products{
    return {
        id: id,
        name: "Dog",
        price: 99.5
    }
}
/* OLD
const product = getProduct(1);
console.log(`The product ${product.name} cost €${product.price}`);
*/

const showProduct = (name, price) => {
    console.log(`The product ${name} cost ${price}€.`);
}

const product = getProduct(1);
showProduct(product.name, product.price);

