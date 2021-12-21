const arr: number[] = [1, 2, 3, -1, -2, -3];

function returnPositive (array): any {
    const newArray: number[] = [];
    if (array.length === 0) return alert('This array is empty');
    for (let num of array) {
        if (num >= 1) newArray.push(num)
    }
    if (newArray.length > 0) {
        console.log(newArray)
    }
    else {console.log()};
}

returnPositive(arr)