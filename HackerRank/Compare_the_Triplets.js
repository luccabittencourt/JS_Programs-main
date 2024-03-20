function compareTriplets(a, b) {
    let pontosAlice = 0;
    let pontosBob = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pontosAlice++;
        } else if (a[i] < b[i]) {
            pontosBob++;
        }
    }
    
    return [pontosAlice, pontosBob];
}
