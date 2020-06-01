const charCount = require("./index");

describe("charCount", () => {
  test("it should be a function", () => {
    expect(typeof charCount).toEqual("function");
  });
  test("it should return undefined if no value is passed", () => {
    expect(charCount()).toEqual(undefined);
  });
  test("it should return undefined if string has no length", () => {
    expect(charCount("")).toEqual(undefined);
  });
  test("it should return an object without the count of spaces and alphanumeric characters", () => {
    expect(charCount("@#$@#$&&%^**%^*%^**^%hi")).toEqual({ h: 1, i: 1 });
  });
  test("it should return an object that counts the amount of time each specific character appears in string", () => {
    expect(charCount("hi")).toEqual({ h: 1, i: 1 });
    expect(charCount("hello world")).toEqual({ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 });
    expect(charCount("hello@#$@#$@#$world%^&$%&(&^)")).toEqual({ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 });
  });
});
