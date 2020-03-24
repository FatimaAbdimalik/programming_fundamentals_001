const utils = require("../app/bookshop_utils");

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });

  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("return 12 when passed 24", () => {
    expect(utils.makeHalfPrice(24)).toBe(12);
  });
});
describe("utils.countBooks", () => {
  test("return total number of books", () => {
    expect(utils.countBooks(["1", "2", "3"])).toBe(3);
  });
});
describe("utils.isInStock", () => {
  test("return true when quantity > 0", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
    expect(utils.isInStock(book)).toBe(true);
  });
});
describe("utils.getTotalOrderPrice", () => {
  test("return total price with VAT", () => {
    expect(utils.getTotalOrderPrice(18, 2)).toBe(43.2);
  });
});
