import caesarCipher from "./caesarCipher";

test("Correctly convert the words", () => {
    expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
    expect(caesarCipher("Hello!", 2)).toBe("Jgnnq!");
    expect(caesarCipher("aBc", -3)).toBe("xYz");
});
