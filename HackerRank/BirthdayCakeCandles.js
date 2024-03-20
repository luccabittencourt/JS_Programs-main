function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    return candles.filter(candle => candle === max).length;
}
