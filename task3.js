const mathModule =(() => {
    function add(a, b) {
        return a + b;        
    }
    function subtract(a,b){
        return a - b;
    }
    function multiply(a,b){
        return a * b;
    }
function divide(a, b){
    if ( b === 0){
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
return {
    add, 
    subtract,
    multiply,
    divide
};

}) ();

const { add, subtract, multiply, divide} = mathModule;

const num1 = 10;
const num2 = 20;

console.log(`The sum of ${num1} is ${num2} is ${add(num1, num2)} `);
console.log(`The Difference of ${num1} is ${num2} is ${subtract(num1, num2)}`);
console.log(`The Multiply of ${num1} is ${num2} is ${multiply(num1, num2)} `);
try {
    console.log(`The division of ${num1} is ${num2} is ${divide(num1, num2)} `);

}
catch (error) {
console.error(error.message);
}
