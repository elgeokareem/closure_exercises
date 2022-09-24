/**
 * Create a function censor that accepts no arguments.
 * censor will return a function that will accept either two strings,
 * or one string. When two strings are given, the returned function will hold
 * onto the two strings as a pair, for future use. When one string is given,
 * the returned function will return the same string, except all instances of first strings
 * (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).
 */

// CHALLENGE 12
function censor() {}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
