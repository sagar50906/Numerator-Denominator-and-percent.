function Calculate(n, d, p) {
    if (n === null) {
     return (d * p) / 100;
    } else if (d === null) {
        if (n !== null && p !== null) {
            return (n * 100) / p;
        } 
    } else if (p === null) {
        if (n !== null && d !== null) {
            return (n * 100) / d;
        } 
    } 
}
console.log(Calculate(3,9,null));