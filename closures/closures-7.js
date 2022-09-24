/**
 * Write a function rollCall that accepts an array of names and returns a function.
 * The first time the returned function is invoked, it should log the first name to the console.
 * The second time it is invoked, it should log the second name to the console, and so on,
 * until all names have been called. Once all names have been called, it should
 * log 'Everyone accounted for'.
 */

function rollCall(names) {
  let nameIndex = 0;

  return function () {
    if (nameIndex >= names.length) {
      return console.log("Everyone accounted for");
    }

    const name = names[nameIndex];

    nameIndex++;
    console.log(name);
  };
}

const kek = rollCall(["william", "vegas"]);
kek();
kek();
kek();
