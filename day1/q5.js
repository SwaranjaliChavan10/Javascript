// map method
const arr = [10, 20, 30, 40, 50, 23, 77, 99];
const s = arr.map((arr) => {
    return arr * arr;
});
console.log(s);

// filter method
const b = arr.filter((arr) => {
    return arr % 2 != 0;
});
console.log(b);

// reduce method

const a = arr.reduce((total, num) => {
    return total = total +num;
    });
console.log(a);