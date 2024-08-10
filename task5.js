const mathModule = (() => {
    const PI = 3.141235;
    function add(a, b){
        return a + b;
    }

    function subtract(a, b){
        return a - b;
    }

    function multiply(a, b){
        return a * b;
    }

    function divide(a, b){
        if ( b === 0){
            throw new Error("Division by zero is not Allowed ");
        }
        return a / b;
    }
    return {
        PI,
        add,
        subtract,
        multiply,
        divide
    };
}) ();

const num1 = 20;
const num2 = 10;

console.log(`PI is ${mathModule.PI}`);
console.log(`The sum of ${num1} and ${num2} is ${mathModule.add(num1, num2)}`);
console.log(`The Difference between ${num1} and ${num2} is ${mathModule.subtract(num1, num2)}`);
console.log(`The multiply of ${num1} and ${num2} is ${mathModule.multiply(num1, num2)}`);
try {
    console.log(`The Division of ${num1} by ${num2} is ${mathModule.divide(num1, num2)}`);
} catch (error){
console.error(error.message);
}