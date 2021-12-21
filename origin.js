var arr = [1, 2, 3, -1, -2, -3];
function returnPositive(array) {
    var newArray = [];
    if (array.length === 0)
        return alert('This array is empty');
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        if (num >= 1)
            newArray.push(num);
    }
    if (newArray.length > 0) {
        console.log(newArray);
    }
    else {
        console.log();
    }
    ;
}
returnPositive(arr);
