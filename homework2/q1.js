const Electronics = ['Laptop', 'Smartphone', 'TV', 'Headphones', 'Smartwatch'];
const [a1, a2, a3, a4, a5] = Electronics;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

const details = {
    laptop: 'Lenovo LOQ',
    smartphone: 'iPhone 12',
    tv: 'Samsung QLED',
    headphones: 'Sony WH-1000XM4',
    smartwatch: 'Apple Watch Series 6'
}

const { laptop, smartphone, tv, headphones, smartwatch } = details;
console.log(laptop);
console.log(smartphone);
console.log(tv);
console.log(headphones);
console.log(smartwatch);
