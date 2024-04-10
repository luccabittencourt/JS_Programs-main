function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    let count = 0;
    for (let candle of candles) {
        if (candle === max) {
            count++;
        }
    }
    return count;
}
