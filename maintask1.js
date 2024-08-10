// Define the module using an IIFE
const mathModule = (() => {
    function add(a, b) {
        return a + b;
    }

    return {
        add
    };
})();

// Use the module
const num1 = 5;
const num2 = 10;
const result = mathModule.add(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${result}`);
