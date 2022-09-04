/**
 * Write a function delay that accepts a callback as the first parameter
 * and the wait in milliseconds before allowing the callback to be invoked
 * as the second parameter. Any additional arguments after wait are provided
 * to func when it is invoked. HINT: research setTimeout();
 */

// CHALLENGE 6
function delay(func, wait, ...args) {
  setTimeout(() => {
    func(...args);
  }, wait);
}

delay(() => console.log("Hello"), 2000);
