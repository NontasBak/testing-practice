import capitalize from "./capitalize.js";

test("Returns the word with the first letter capitalized", () => {
    expect(capitalize("hello")).toBe("Hello");
});
