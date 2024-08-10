const mathModule = (() => {
function add(a,b) {
    return a+ b;
}
return add;
}) ();

const add = mathModule;

const num1 = 20;
const num2 = 10;

console.log(`The sum of ${num1} and ${num2} is {add(num1, num2)}`);

