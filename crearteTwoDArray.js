// creating a 2d array with hardcoded values
//2d array with 4 rows 3 col
var myArray = 
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
console.log(myArray[1][2]);
console.log(myArray[2][1]);
console.log(myArray[0][0]);
console.log(myArray[0][2]);

//creating a 2d empty array
var myArray2 =[];
var row = 3;
var col = 4;

for(var i = 0; i < row; i++){
    myArray2[i] =[];
    for(var j = 0; j < col; j++){
        myArray2[i][j] = 0;
    }
}
console.log(nyArray2);