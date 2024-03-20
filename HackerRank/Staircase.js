function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let espaco = ' '.repeat(n - i);
        let simbolos = '#'.repeat(i);
        console.log(espaco + simbolos);
    }
}
