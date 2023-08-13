function mergeSort(arr) {
    // Base case
    if(arr.length < 2) return arr;

    // Sort left half of elements
    const leftHalf = mergeSort(arr.slice(0, arr.length/2));

    // Sort right half of elements
    const rightHalf = mergeSort(arr.slice(arr.length/2, arr.length));

    // Merge sorted halves
    let mergedArr = [];
    let i = 0, j = 0;

    for(; i < leftHalf.length && j < rightHalf.length;) {
        if(leftHalf[i] < rightHalf[j])
        {
            mergedArr.push(leftHalf[i++]);
        }
        else
        {
            mergedArr.push(rightHalf[j++]);
        }
    }
    for(;i < leftHalf.length; i++)
        mergedArr.push(leftHalf[i]);
    for(;j < rightHalf.length; j++)
        mergedArr.push(rightHalf[j]);
    
    return mergedArr;
}
