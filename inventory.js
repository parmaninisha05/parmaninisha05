class Shoes {
  constructor(name, productCode, quantity, valuePerItem) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
  }
}
// Creating a Shoes1 object using the Shoes constructor
let shoe1 = new Shoes("Sketchers", "1121", 20, 40);
let shoe2 = new Shoes("Puma", "1122", 30, 60);
let shoe3 = new Shoes("Adidas", "1123", 90, 70);
let shoe4 = new Shoes("Nike", "1124", 60, 50);
let shoe5 = new Shoes("Asics", "1126", 80, 20);

// Pushing the 5 objects into an array
let shoeList = [];
shoeList.push(shoe1);
shoeList.push(shoe2);
shoeList.push(shoe3);
shoeList.push(shoe4);
shoeList.push(shoe5);

/**
 * This function searches for the shoe by name
 * @param {*} shoes
 * @param {*} name
 * @returns
 */
function search(name) {
  const match = (shoe) => shoe.name === name;
  return shoeList.find(match);
}

/**
 *
 * @returns the shoe object with the minimum value per item
 */
function findLowest() {
  return shoeList.reduce((previous, current) =>
    previous.valuePerItem > current.valuePerItem ? current : previous
  );
}
/**
 *
 * @returns the shoe object with the maximum value per item
 */
function findHighest() {
  return shoeList.reduce((previous, current) =>
    previous.valuePerItem > current.valuePerItem ? previous : current
  );
}

function modifyShoe(values, name) {
  theShoe = search(name);
  if (theShoe) {
    theShoe.name = values[0];
    theShoe.productCode = values[1];
    theShoe.quantity = values[2];
    theShoe.valuePerItem = values[3];
  }
}

/**
 * The function passes the new values to the method modifyShoe
 * and ends up modifying all the objects as per passed
 * Key of the map is the name with which we find the relevant shoe object and then modify it
 */
function modifyShoes() {
  //Holding this test data in map and then using forEach() to go through each value.
  const newValues = new Map();
  newValues.set("Asics", ["Sketchers", "1126", 90, 30]);
  newValues.set("Sketchers", ["Nike", "1121", 100, 50]);
  newValues.set("Nike", ["Puma", "1124", 120, 70]);
  newValues.set("Puma", ["Adidas", "1122", 130, 80]);
  newValues.set("Adidas", ["Asics", "1123", 160, 20]);
  newValues.forEach(modifyShoe);
}

function sortByValuePerItem() {
  //Using the comparator
  const compareObjects = (shoeOne, shoeTwo) =>
    shoeOne.valuePerItem - shoeTwo.valuePerItem;
  shoeList.sort(compareObjects);
}

modifyShoes();
sortByValuePerItem();
console.table(shoeList);
