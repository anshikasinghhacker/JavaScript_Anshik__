// --------------Prototype----------------
// prototype behaviour of javascript
// In JavaScript, prototypes are fundamental to how inheritance and object orientation work. Here's a basic overview of prototype behavior in JavaScript:

// Prototype Chain: Each object in JavaScript has a prototype (except for the base object). When you access a property or method on an object, JavaScript first looks for that property or method directly on the object. If it doesn't find it, it looks at the object's prototype, and then the prototype's prototype, and so on, forming a chain until it finds the property or reaches the end of the chain (where the base object's prototype resides).

// Prototype Property: Each function in JavaScript has a special property called prototype. When you create a new object using that function as a constructor (with the new keyword), the newly created object inherits properties and methods from the constructor's prototype.
// Prototypal Inheritance: JavaScript uses prototypal inheritance, where objects inherit properties and methods directly from other objects. This is different from classical inheritance found in languages like Java or C++. In JavaScript, objects inherit directly from other objects through the prototype chain.

// Changing Prototypes Dynamically: You can modify an object's prototype at any time during runtime. This means that any objects that inherit from that prototype will automatically reflect those changes.

// in js -- string, array both are object
//  is function object? look below:

function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// therefore, function is also an object
function createUser(username,score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai",25)
const tea = createUser("tea",250)
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/