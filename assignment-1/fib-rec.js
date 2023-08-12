function fibsRec(n) {
    if(n === 0) return [];
    else if(n === 1) return [0];
    else if(n === 2) return [0, 1];

    const fibArray = fibsRec(n - 1);
    const nextFibonacci = fibArray[n - 2] + fibArray[n - 3];
    fibArray.push(nextFibonacci);

    return fibArray;
}