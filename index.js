// Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback(); // Call the callback function
}

// Function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("I am a named function!");
    };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function!");
    };
}

// Example usage
receivesAFunction(() => console.log("Callback has been called!")); // Calling with an anonymous function

const namedFunc = returnsANamedFunction();
namedFunc(); // Call the named function

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); // Call the anonymous function
