function caesarCipher(word, shiftFactor) {
    const wordArray = word.split("");
    let shiftedWordArray = wordArray.map((char) => {
        return shiftChar(char);
    });
    return shiftedWordArray.join("");

    function shiftChar(char) {
        const letterTableLowerCase = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ];
        const letterTableUpperCase = letterTableLowerCase
            .join("")
            .toUpperCase()
            .split("");

        let shiftedChar;
        if (char.toLowerCase() === char.toUpperCase()) return char;
        else if (char === char.toLowerCase()) {
            let indexofChar = letterTableLowerCase.indexOf(char);
            shiftedChar =
                letterTableLowerCase[shiftedIndex(indexofChar, shiftFactor)];
        } else {
            let indexofChar = letterTableUpperCase.indexOf(char);
            shiftedChar =
                letterTableUpperCase[shiftedIndex(indexofChar, shiftFactor)];
        }
        return shiftedChar;
    }

    function shiftedIndex(index, shiftFactor) {
        let newIndex = index + shiftFactor;
        while (newIndex < 0 || newIndex > 25) {
            if (newIndex > 25) {
                newIndex -= 26;
            } else {
                newIndex += 26;
            }
        }
        return newIndex;
    }
}

export default caesarCipher;
