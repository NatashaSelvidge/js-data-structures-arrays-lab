// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

 function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
}

function appendDriver(name) {
  const newArr = [...drivers, name];
  return newArr;
}

function prependDriver(name) {
  const newArr = [name, ...drivers];
  return newArr;
}

function removeLastDriver() {
  const newArr = drivers.slice(0, drivers.length -1);
  return newArr;
}

function removeFirstDriver() {
  const newArr = drivers.slice(1);
  return newArr;
  
}
  
