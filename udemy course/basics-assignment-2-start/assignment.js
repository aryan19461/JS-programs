const task3Element = document.getElementById('task-3');
function fun1(){
    alert("Assignment 2 done first part");
}
function fun2(name){
    alert(name);
}
fun1();
fun2("Aryan");
task3Element.addEventListener("click", fun1);

function fun3(string1, string2, string3){
    return string1 + string2 + string3;
    
}
const result = fun3("Aryan", "Himani", "angela");
alert(result);