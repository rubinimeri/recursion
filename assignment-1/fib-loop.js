function fibs(n) {
    let arr = [0, 1];
    let first = 0;
    let second = 1;
    let third;
    for(let i = 1; i < n-1; i++){
        third = first + second;
        arr.push(third);
        first = second;
        second = third;
    }
    return arr;
}