/**
 * Write a function once that accepts a callback as input
 * and returns a function. When the returned function is called
 * the first time, it should call the callback and return that output.
 * If it is called any additional times, instead of calling the callback
 * again it will simply return the output value from the first time it was called.
 */

function addByX(x) {
  return y => x + y;
}
const addByTwo = addByX(2);

// CHALLENGE 4
function once(func) {
	let isFirstRun = false;
	let result;
	
	return function(input) {
		if (!isFirstRun) {
			isFirstRun = true;
			result = func(input)
			return result;
		}

		return result;
	}
}
// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6
