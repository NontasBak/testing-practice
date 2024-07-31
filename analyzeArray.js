function analyzeArray(array) {
    let average = array.reduce((total, el) => total + el, 0) / array.length;
    let length = array.length;

    let min = array[0];
    array.forEach((el, index) => {
        if (el < min) min = el;
    });

    let max = array[0];
    array.forEach((el, index) => {
        if (el > max) max = el;
    });

    return {
        average,
        min,
        max,
        length,
    };
}

export default analyzeArray;
