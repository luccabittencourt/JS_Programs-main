function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    const n = arr.length;

    arr.forEach(num => {
        if (num > 0) {
            positive++;
        } else if (num < 0) {
            negative++;
        } else {
            zero++;
        }
    });

    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((zero / n).toFixed(6));
}
