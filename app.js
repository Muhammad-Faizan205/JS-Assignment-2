// -------------------------------------------Chapter 9 - 11


// ------ Ques 1

// var CityName = prompt("Enter city name");

// if(CityName == "karachi")
// {
//     alert("Welcome to city of light");
// }

// else if(CityName == "Karachi")
// {
//     alert("Welcome to city of light");
// }


// ------ Ques 2

// var gender = prompt("Enter your gender");

// if(gender == "male")
// {
//     alert("Good Morning Sir");
// }

// else if(gender == "Male")
// {
//     alert("Good Morning Sir");
// }

// else if(gender == "female")
// {
//     alert("Good Morning Maam");
// }

// else if(gender == "Female")
// {
//     alert("Good Morning Maam");
// }


// // ------ Ques 3

// var TrafficColor = prompt("Enter Road traffic Colour");

// if(TrafficColor == "red")
// {
//     alert("Must Stop")
// }

// else if(TrafficColor == "Red")
// {
//     alert("Must Stop")
// }

// else if(TrafficColor == "Yellow")
// {
//     alert("Ready to Move")
// }

// else if(TrafficColor == "yellow")
// {
//     alert("Ready to Move")
// }

// else if(TrafficColor == "Green")
// {
//     alert("Move Now")
// }

// else if(TrafficColor == "green")
// {
//     alert("Move Now")
// }


// Q4

// var fuel = prompt("Please enter a remaining Fuel in car" , "7litres");
// if(fuel <= "0.25liters"){
//     alert("Please refill the fuel in your car")
// }

// else{
//     alert("Please enter a correct value")
// }


// Q5

// a.

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// Displayed

// b.

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// NOT Displayed

// c.

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// NOT Displayed

// if (c === 13){
// alert("condition 2 is true");
// }

//  Displayed

// if (++c < 14){
// alert("condition 3 is true");
// }

// NOT Displayed

// if(c === 14){
// alert("condition 4 is true");
// }

//  Displayed

// d.

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
 
//  Displayed

// e.

//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//  Displayed


// ------ Ques 7


// var secretNum = 7;
// var userNum = parseInt(prompt("Enter a scret Number" , "Range 1 to 10"))
// if(userNum === secretNum){
//     alert("Bingo! Correct answer")
// }        

// else if(userNum === ++secretNum){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Please enter a correct number")
// }


// ------ Ques 8


// var num = parseInt(prompt("Please enter a number"));
// var divisible = num % 3;
// if(divisible === 0 ) {
//     alert("Your Number is divisible by 3")
// }
// else{
//     alert("Your Number is not Divisible by 3")
// }


// ------ Ques 9


// var number = parseInt(prompt("Please enter a Number"));
// var even = number % 2 ;
// if(even === 0){
//     alert("YOUR NUMBER IS EVEN")
// }
// else{
//     alert("YOUR NUMBER IS ODD")
// }


// ------ Ques 10

// var temp = parseInt(prompt("Enter weather Temperation"));
// if(temp>=40 ){
//     alert("It is too hot outside. ")
// }        
// else if(temp>=30 && temp <=40){
//     alert("The Weather today is Normal.")
// }
// else if(temp>=20 && temp<=30){
//     alert("Today’s Weather is cool.")
// }
// else if(temp>=10 && temp<=20){
//     alert("OMG! Today’s weather is so Cool.")
// }


// ------ Ques 11


// var num1  = parseInt(prompt("Enter Number 1"));
// var opt  = prompt("Enter Operator");
// var num2  = parseInt(prompt("Enter Number 2"));



// -----------------------------------------------Chapter 12 - 13

// ------ Ques 1

// var stringg = "A"
// var code = stringg.charCodeAt()
// if(code === 65){
//     alert("VARIABLE A AND ASCII CODE IS 65")
// }    
// else{
//     alert("no")
// }


// ------ Ques 2


// var val1 = parseInt(prompt("Enter Value 1: "));    
// var val2 = parseInt(prompt("Enter Value 2: "));    
// if(val1 > val2 ){
//     alert("Value 1 is Greater:" + " " + val1)
// }
// else if(val1<val2){
//     alert("Value 2 is Greater:" + " " + val2)
// }
// else if(val1 == val2){
//     alert("Boht values are equal")
// }
// else{
//     alert("please enter a correct value ")
// }


// ------ Ques 3


// var value = parseInt(prompt("Enter a number"));
// if(value > 0){
//     alert("your number is positive")
// }    

// else if(value < 0){
//     alert("your number is negative")
// }    
// else if(value == 0){
//     alert("your number is zero")
// }    
// else{
//     alert("Please enter a correct number")
// }


// ------ Ques 4


// var vowel = prompt("Enter a Character");

// vowel.toLowerCase()

// if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
//     alert("Vowel Found")
// }

// else{
//     alert("false")
// }


// ------ Ques 5


// var userPassword = prompt("Enter your password");

// var password = "********";

// if(userPassword !== "")
// {
//     if(userPassword === password)
// {
//         alert("Correct! The password you entered matches the original PAssword")
//     }
//     else
// {
//         alert("YOur password is not match")
//     }
// }
// else
// {
//     alert("please enter a password")
// }


// ------ Ques 6


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {  greeting = "Good day";}

// else{ greeting = "Good evening";
// }


// ------ Ques 7


// var time = parseInt(prompt("Enter Time :" ,": 1900"));
// if(time >= 68 && time <= 1200){
//     alert( '"Good morning!"')
// }    
// else if(time>=1200 && time<=1700){
//     alert(' "Good afternoon!" ')
// }
// else if(time>=1700 && time<=2100){
//     alert(' "Good evening!" ')
// }
// else if(time>=2100 && time<=2359){
//     alert(' "Good night!" ')
// }
// else{
//     alert("Please enter a correct time")
// }