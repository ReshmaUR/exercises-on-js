//Question1
function primeorNot(){
    var number = [];
    var size = document.getElementById("pri").value; //max array size
    for(var i =0;i<size;i++){
        number[i] = prompt("Enter element"+(i+1));
    }
    var x = number[0];
    document.getElementById("array").innerHTML ="The entered elements are : " +number;
    if(x==1){
        document.getElementById("cmt").innerHTML = "The first element is neither prime nor composite";
        return false;
       
    }
    else if(x==0){ 
        document.getElementById("cmt").innerHTML = "The first element is neither prime nor composite";
        return false;
        
    }
    else if(x==2){ 
        document.getElementById("cmt").innerHTML = "The first element is a prime number";
        return true;
        
    }
    else{
        for(var i=2;i<x;i++){
            if(x%i ==0){
                document.getElementById("cmt").innerHTML = "The first element is not a prime number";
                return false;
                
            }
        }
    }
    document.getElementById("cmt").innerHTML = "The first element is a prime number";
    return true;   
}
//Question2
function frequentItem(){
var array=[];
var mf = 1;
var m = 0;
var item;
var size = document.getElementById("size").value;
for(var i =0;i<size;i++){
    array[i] = prompt("Enter element"+(i+1));
}
document.getElementById("freq").innerHTML = "The entered elements are : "+array;
for (var i=0; i<array.length; i++){
    for (var j=i; j<array.length; j++){
                if (array[i] == array[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = array[i];
                }
        }
        m=0;
}
// console.log(item+" ( " +mf +" times ) ") ;
var out = item+" ( " +mf +" times ) ";
document.getElementById("item").innerHTML = "Most frequent item is :  "+out;
}
//Question3
function swap(){
    var str = document.getElementById("input").value;
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
    for(var x=0; x<str.length; x++){

        if(UPPER.indexOf(str[x]) !== -1){
             result.push(str[x].toLowerCase());
        }
        else if(LOWER.indexOf(str[x]) !== -1){
            result.push(str[x].toUpperCase());
        }
        else {
            result.push(str[x]);
        }
    }
    console.log(result.join(''));
    document.getElementById("swap").innerHTML = "Swaped string is : "+result.join('');
}
//Question4
function square(){
    var array = [];
    var size = document.getElementById("sno").value;
    for(var i =0;i<size;i++){
    array[i] = prompt("Enter element"+(i+1));
    }
    document.getElementById("snoo").innerHTML ="The entered elements are :  "+ array;
    var sum = 0; 
    i = array.length;
    while (i--) 
    sum += Math.pow(array[i], 2);
    console.log(sum); 
    document.getElementById("square").innerHTML = "Sum of squares is :  "+sum;
}
//Question5
function oddorEven(){
    var num = "";
    for(var i = 0;i<16;i++){
        if(i%2 == 0){
            num += "Iteration ="+i+" , It is even "+"<br>";
        }
        else{
            num += "Iteration ="+i+" , It is odd"+"<br>";
        }
    }
    document.getElementById("disp").innerHTML = num;
}
//Question6
function trunc(){
    var str = document.getElementById("stri").value;
    var limit = document.getElementById("limi").value;
    var str1;
    str1 =str.slice(0, limit);
    console.log(str1);
    document.getElementById("tru").innerHTML = "Truncated string is : "+str1;
}
//Question7
function findLarge(){
    var num1 = parseInt(document.getElementById("inum1").value);
    var num2 = parseInt(document.getElementById("inum2").value);   
    if(num1>num2){
        document.getElementById("answer7").innerHTML = "The largest integer is : "+num1;       
    }
    else if(num1==num2){
        document.getElementById("answer7").innerHTML = "Both are equal numbers";
    }
    else{
        document.getElementById("answer7").innerHTML = "The largest integer is : "+num2;
    }
}
//Question8
function alpha() {
    var person = []; 
    var size = document.getElementById("alpha").value; //max array size
    var x;
    for(var i =0;i<size;i++){
        person[i] = prompt("Enter element"+(i+1));
    }
    document.getElementById("old").innerHTML = "The entered array is :  "+person;
    for (x in person) {
    person.sort();
    }
    document.getElementById("new").innerHTML = "The arranged array is :  "+person;
  }
  
//Question9
function printLtr(){
var txt = "Javascript";
var x;
var out ="";
var final ="";
for (x of txt) {
out += x;
final += out+"<br>";
}
document.getElementById("toge").innerHTML = final;
}
//Question10
function pattern(){
    var limit = 3;
    var star = "";
    for(var i = 0;i<=limit;i++){
        for(var j = 0;j<=i;j++){
            star += "*";
        }
            star += "<br>";
    }
    document.getElementById("pat").innerHTML = star;
}