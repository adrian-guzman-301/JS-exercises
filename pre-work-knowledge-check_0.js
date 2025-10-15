/*
How do you write an object constructor and instantiate the object?

To write an object constructor, you would use object literal syntax by declaring a const object variable followed by brackets, and property: value keys.
To instantiate the object, you use a class.



How can you prevent that an object constructor is called without using the keyword new?

use "new.target"



What is a prototype and how can it be used?

Another object that the original object inherits from.



What is prototypal inheritance?

The inherited methods and properties from parent objects, going back all the way to the mother object.



What are the basic do’s and don’t’s of prototypal inheritance?

do's: set up prototype chain using "Object.setPrototypeOf()" before creating any objects




How does this behave in different situations?

global context: this references the global object
function context: function, method, constructor, indirect calls
arrow functions: "this" is inherited from an outer function where the arrow function is defined

 */