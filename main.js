// 1. Create a “groceries list” array. Each element of the array is an object that
//contains the name of a product, an amount needed and whether it is bought or not.
//Write a few functions for working with this array.

// Display the entire list, so that the not yet purchased items go before the
//bought ones.
// Adding a purchase to the list. Note that if a product already exists, the amount
//needs to be increased in the existing purchase, not in a new one.
// Purchasing a product. The function accepts the name of a product and marks it as
//bought.

/*
let groceriesList = [
  { productName: "bananas", amountNeeded: 5, isBought: true },
  { productName: "bread", amountNeeded: 1, isBought: false },
  { productName: "apples", amountNeeded: 10, isBought: false },
  { productName: "eggs", amountNeeded: 12, isBought: true },
  { productName: "tortilla", amountNeeded: 8, isBought: false },
];

let displaySortedList = () => {
  const notBoughtGroceries = groceriesList.filter(
    (product) => product.isBought === false
  );

  const boughtGroceries = groceriesList.filter(
    (product) => product.isBought === true
  );

  const sortedGroceriesList = notBoughtGroceries.concat(boughtGroceries);
  return sortedGroceriesList;
};

console.log(displaySortedList());

let addingPurchase = (newProduct) => {
  let found = false;
  for (let i = 0; i < groceriesList.length; i++) {
    if (newProduct.productName === groceriesList[i].productName) {
      groceriesList[i].amountNeeded += Number(newProduct.amountNeeded);
      found = true;
    }
  }
  if (!found) {
    groceriesList.push(newProduct);
  }
};

addingPurchase({ productName: "orange", amountNeeded: 5, isBought: false });
addingPurchase({ productName: "apples", amountNeeded: 5, isBought: false });

console.log(displaySortedList());

let purchasedProduct = (nameOfTheProduct) => {
  for (let i = 0; i < groceriesList.length; i++) {
    if (nameOfTheProduct === groceriesList[i].productName) {
      groceriesList[i].isBought = true;
    }
  }
};

purchasedProduct("apples");
console.log(displaySortedList());
*/

// 2. Create an array that describes a shop receipt. Each element of the array
// consists of the name of the product, an amount bought, and price per item.
// Write the following functions.

// Print the receipt out on the screen.
// Counting the sum of the purchase.
// Extracting the most expensive item on the receipt.
// Counting an average item price on the receipt.

/*
let shopReceipt = [
  { productName: "bananas", amountBought: 5, itemPrice: 0.39 },
  { productName: "bread", amountBought: 1, itemPrice: 2.32 },
  { productName: "apples", amountBought: 10, itemPrice: 0.49 },
  { productName: "croissant", amountBought: 2, itemPrice: 0.99 },
  { productName: "cabbage", amountBought: 1, itemPrice: 0.89 },
  { productName: "milk", amountBought: 1, itemPrice: 1 },
  { productName: "salmon", amountBought: 1, itemPrice: 20.99 },
];

console.log(`Today you bought these products:`);

shopReceipt.forEach((productDetail) => {
  let receipt = `${productDetail.productName}, amount:${productDetail.amountBought}, price per item - ${productDetail.itemPrice}`;
  console.log(receipt);
});

let printReceipt = () => {
  let purchaseSum = 0;
  let mostExpensiveItem = 0;
  let mostExpensiveItemName;
  let totalamountBought = 0;
  for (let i = 0; i < shopReceipt.length; i++) {
    purchaseSum += shopReceipt[i].amountBought * shopReceipt[i].itemPrice;
    totalamountBought += shopReceipt[i].amountBought;

    if (shopReceipt[i].itemPrice > mostExpensiveItem) {
      mostExpensiveItem = shopReceipt[i].itemPrice;
    }
    if (mostExpensiveItem === shopReceipt[i].itemPrice) {
      mostExpensiveItemName = shopReceipt[i].productName;
    }
  }
  purchaseSum = purchaseSum.toFixed(2);

  let averagePrice = purchaseSum / totalamountBought;
  averagePrice = averagePrice.toFixed(2);

  console.log(`Your total purchase price is ${purchaseSum}. 
  The most expensive item had a price of ${mostExpensiveItem} for ${mostExpensiveItemName}.
  The average item price on the receipt is ${averagePrice}.
  Thank you for shopping at our store!`);
};
printReceipt();
*/

// 3. Create an array of css-styles (color, font size, alignment, underline etc.)
// Each element of the array is an object consisting of two properties: style name
// and style value, Write a function that accepts the style array and a text and puts
// out this text via document.write() in the <p></p> tags, adding the style attribute
// with all the styles in the array to the opening tag.
/*
const stylesArray = [
  { name: "color", value: "green" },
  { name: "font-size", value: "1.25rem" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" },
  { name: "font-weight", value: "bolder" },
];

let text1 = "Learning arrays";

let styledText = (styles, text) => {
  let openedTag = "<p style='";

  stylesArray.forEach((style) => {
    openedTag += `${style.name}: ${style.value};`;
  });

  openedTag += "'>";

  document.write(openedTag);
  document.write(text);
  document.write("</p>");
};

styledText(stylesArray, text1);
*/

// 4. Create an array of academy classrooms. A classroom object consists of
// a name, a number of seats (10 to 20) and the faculty it is meant for.
// Write a few functions for working with it.

// 1) Display all the classrooms.
// 2) Display all the classrooms for a given faculty.
// 3) Display only the classrooms that would fit a given group. A group object
//contains a name, the number of students, and the faculty name.
// 4) A function for sorting all the classrooms by number of seats.
// 5) A function for sorting all the classrooms by name in alphabetical order.
/*
let academyClassrooms = [
  { name: "12Ab", numberOfSeats: 10, faculty: "Physics" },
  { name: "18Ac", numberOfSeats: 12, faculty: "Literature" },
  { name: "14Ad", numberOfSeats: 15, faculty: "Biology" },
  { name: "19Ag", numberOfSeats: 20, faculty: "Chemistry" },
  { name: "16Ah", numberOfSeats: 18, faculty: "Chemistry" },
  { name: "17Al", numberOfSeats: 19, faculty: "Biology" },
];

let group = {
  name: "181ClB",
  numberOfStudents: 18,
  facultyName: "Biology",
};

academyClassrooms.forEach((classDetail) => {
  let sentence = `The information about this class: name - ${classDetail.name}, number of seats - ${classDetail.numberOfSeats} and the faculty is ${classDetail.faculty}`;
  console.log(sentence);
});

const uniqueFaculty = [
  ...new Set(academyClassrooms.map((classroom) => classroom.faculty)),
];

console.log("Next task");

for (let i = 0; i < uniqueFaculty.length; i++) {
  console.log(`${uniqueFaculty[i]} faculty has these classrooms: `);
  for (let n = 0; n < academyClassrooms.length; n++) {
    if (uniqueFaculty[i] === academyClassrooms[n].faculty) {
      console.log(academyClassrooms[n].name);
    }
  }
}

console.log("Next task");

academyClassrooms.forEach(function (classroom) {
  if (
    classroom.numberOfSeats >= group.numberOfStudents &&
    classroom.faculty === group.facultyName
  ) {
    console.log(`${classroom.name} fits the criteria for ${group.name}`);
  }
});

console.log("Next task");

academyClassrooms.sort(function (a, b) {
  let x = a.numberOfSeats;
  let y = b.numberOfSeats;
  return x < y ? -1 : x > y ? 1 : 0;
});

console.log(academyClassrooms);

console.log("Next task");

academyClassrooms.sort(function (a, b) {
  let x = a.name;
  let y = b.name;
  return x < y ? -1 : x > y ? 1 : 0;
});

console.log(academyClassrooms);
*/
