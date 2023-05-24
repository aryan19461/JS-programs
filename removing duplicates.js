const array = [1,2,3,4,5,1,2,3];


function removeDuplicate( )
{
    for(var i = 0; i<array.length; i++){
        for(var j = i+1; j<array.length; j++){
            if(array[i] === array[j]){
                array.splice(j,1);
                j--;
            }
        }
    }
    
}
removeDuplicate(array);
console.log(array);