function addVAT(price) {
  return price + 0.2 * price;
}
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function makeHalfPrice(price) {
  return price / 2;
}
function countBooks(number) {
  return number.length;
}

function isInStock(book) {
  if (book.quantity > 0) {
    return true;
  } else {
    return false;
  }
}
function getTotalOrderPrice(price, quantity) {
  return price * quantity + price * quantity * 0.2;
}

module.exports = {
  addVAT,
  getFullName,
  makeHalfPrice,
  countBooks,
  isInStock,
  getTotalOrderPrice
};
