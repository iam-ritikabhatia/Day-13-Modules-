// Define the module using an IIFE
const personModule = (() => {
    const person = {
        name: "John Doe",
        age: 30,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        },
        haveBirthday: function() {
            this.age += 1;
            console.log(`Happy birthday! I am now ${this.age} years old.`);
        }
    };

    return person;
})();

// Use the module
personModule.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
personModule.haveBirthday(); // Output: Happy birthday! I am now 31 years old.
personModule.greet(); // Output: Hello, my name is John Doe and I am 31 years old.
