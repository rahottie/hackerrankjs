// input generator


function getSquare2dArray(size, maxValue) {
    let max = 9;
    if (maxValue > 0) max = maxValue;

    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = [];
        for (let j = 0; j < size; j++) {
            arr[i][j] = getRandomInt(0,max);
            //console.log(arr[i]);
        }
    }

    return arr;
}

function getArray(size, maxValue){
    let max = 9
    if(maxValue > 0) max = maxValue

    let arr = []
    for(let i = 0; i < size; i++){
        arr[i] = getRandomInt(0, max)
    }

    return arr
}

function getRandomInt(floor, ceiling) {

    if (Number.isInteger(floor) === false) return false//{ msg: 'min must be a number' }
    if (Number.isInteger(ceiling) === false) return false//{ msg: 'min must be a number' }
    if (floor > ceiling) return false;

    return Math.floor(Math.random() * ceiling) + floor;
}


function print2dArray(arr){
    try {
        arr.forEach(row => {
            console.log(row.join(' '));
        });

    } catch (err) {
        return err;
    }
}



module.exports = {
    getArray,
    getSquare2dArray,
    getRandomInt,
    print2dArray
}