function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  const newKittensArray = [...kittens, name];
  return newKittensArray;
}

function prependKitten(name) {
  const newKittensArray2 = [name, ...kittens];
  return newKittensArray2;
}
  
function removeLastKitten() {
  const newKittensArray3 = kittens.slice(0, kittens.length - 1);
  return newKittensArray3;
}

function removeFirstKitten() {
  const newKittensArray4 = kittens.slice(1);
  return newKittensArray4;
}





  
  
  