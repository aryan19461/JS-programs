const string = "Mr red has a red house and a red car"

//const result = string.replace("red","blue"); this will replace the first red occurence only
const result = string.split('red').join("blue");
 console.log(result);