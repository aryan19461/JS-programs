const string = "hardwork pays, bad times don't lsat long but bad guys do.";

function uppercase(string){
    const NewString =  string.charAt(0).toUpperCase() + string.slice(1);
    return NewString;
}
const result = uppercase(string);
console.log(result);