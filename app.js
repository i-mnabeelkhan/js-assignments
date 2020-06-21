//  Chapter 21 - 25


//Task 1
// var firstName = window.prompt("Enter Your First Name","first name");
// var lastName = window.prompt("Enter Your Last Name","last name");
// var fullName = firstName + " " + lastName;
// window.alert("Hello! " + fullName); 


//Task 2
// var favouritePhone = window.prompt("Enter Your Favourite Phone", "my favourite phone is");
// var len = favouritePhone.length;
// document.write("My Favourite Phone Is " + favouritePhone);
// document.write("<br>Length Of String Is: " + len);


//Task 3
// var word = "Pakistan";
// document.write("String is " + word + "<br>");
// for (var i = 0; i < word.length; i++) {
//     if (word.slice(i, i + 1) === "n") {
//         document.write("Index of 'n' is " + i);
//     }
// }


//Task 4
// var word1 = "Hello World";
// document.write("String " + word1 + "<br>");
// var find = word1.lastIndexOf("l");
// document.write("Last Index Is " + find);


//Task 5
// var word = "Pakistani";
// document.write("String Is " + word + "<br>");
// document.write("Character at Index 3 is " + word[3]);


//Task 6
// var firstName = window.prompt("Enter Your First Name","first name");
// var lastName = window.prompt("Enter Your Last Name","last name");
// var fullName = firstName.concat(lastName);
// window.alert("Hello! " + fullName); 


//Task 7
// var city = "Hyderabad";
// document.write("Before: " + city + "<br>");
// for (var i = 0; i < city.length; i++) {
//     if (city.slice(i, i + 5) === "Hyder") {
//         city = city.slice(0, i) + "Islam" + city.slice(i + 5);
//         document.write("After Replacement " + city);
//     }
// }


//Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Current Message : " + message + "<br>");
// for (var i = 0; i < message.length; i++) {
//     if (message.slice(i, i + 3) === "and") {
//         message = message.slice(0, i) + "&" + message.slice(i + 3);

//     }
// }
// document.write("After Replacement : " + message);


//Task 9
// var string = "472";
// console.log(string);
// var number = parseInt(string);
// console.log("Value: " +number);


//Task 10
// var user = window.prompt("Enter Some Thing In Lower Case", "Enter Here");
// var upperCase = user.toUpperCase();
// window.alert(upperCase);


//Task 11
// var user = window.prompt("Enter Some Thing", "Enter Here");
// var firstChar = user.slice(0,1);
// var rem = user.slice(1);
// firstChar = firstChar.toUpperCase();
// user = firstChar.concat(rem);
// window.alert(user);


//Task 12
// var mul;
// var num = 35.36;
// var cal = num.toString();
// var store;
// for (var i = 0; i < cal.length; i++) {
//     if (cal.slice(i, i + 1) === ".") {
//         store = cal.slice(i + 1);
//     }
// }
// var temp = store.length;
// temp = Math.pow(10, temp);
// num *= temp;
// document.write("Result = " + num);


//Task 13
// var input = window.prompt("Ener Something", "Enter Here!");
// for(var i =0;i<input.length;i++){
//     if(input.slice(i,i+1)=== "@" ||input.slice(i,i+1)=== ","||input.slice(i,i+1)=== "!"||input.slice(i,i+1)=== "."){
//         window.alert("Please Enter a valid user Name...");
//     }
// }


//Task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = window.prompt("Welcome to ABC Bakery, What do you want to order Sir/ma'am", "Enter Here");
// var orderr = order.toLowerCase();
// var temp = 0;
// for (var i = 0; i < A.length; i++) {
//     if(orderr === A[i]){
//         window.alert(order + " is avaliable at index " + i + " in our Bakery");
//         break;
//     }
//     temp++
// }

// if(temp === 5){
//     window.alert("We are Sorry! " + order + " is not avaliable in our Bakery");
// }

//Task 15
// var password = window.prompt("Enter Password!", "enter here!");
// if (password.slice(0, 1) <= 48 && password.slice(0, 1) <= 57) {
//     window.alert("Password Can not begin with a number");
//     window.alert("Please Enter A Valid Password..");
// }
// else if (password.length < 6) {
//     window.alert("Password Must be greater than 6");
// }
// else {
//     window.alert("Welcome!");
// }


//Task 16
// var university = "University Of Karachi";
// for (var i = 0; i < university.length; i++) {
//     document.write(university[i] + "<br>")
// }


//Task 17
// var userInput = window.prompt("Enter Here!");
// document.write("User Input = " + userInput + "<br>");
// document.write("Last Character Of Input = " + userInput[userInput.length -1]);


//Task 18
// var string = "The quick brown fox jumps over the lazy dog";
// document.write("String : " + string + "<br>");
// var value = 0;
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The") {
//         value++;
//     }
// }
// if(value >= 2){
//     document.write("There are " + value + " Occurrence(s) of word 'the'");
// }
// else{
//     document.write("There is " + value + " Occurrence of word 'the'");
// }



//  Chapter 26 - 30



//Task 1
// var inputNumber = window.prompt("Enter Positive Integer","Enter Here!");
// document.write("Number : " + inputNumber + "<br>");
// document.write("Round Off : " + Math.round(inputNumber) + "<br>");
// document.write("Floor Value : " + Math.floor(inputNumber) + "<br>");
// document.write("Ceil Value : " + Math.ceil(inputNumber));


//Task 2
// var inputNegativeNumber = window.prompt("Enter Negative Integer","Enter Here!");
// document.write("Number : " + inputNegativeNumber + "<br>");
// document.write("Round Off : " + Math.round(inputNegativeNumber) + "<br>");
// document.write("Floor Value : " + Math.floor(inputNegativeNumber) + "<br>");
// document.write("Ceil Value : " + Math.ceil(inputNegativeNumber));


//Task 3
// var absoluteValue = window.prompt("Enter Value");
// document.write("The absolute value of " + absoluteValue + " is " + Math.abs(absoluteValue));


//Task 4
// var generateRandom = parseInt((Math.random() * 6) + 1);
// document.write("Random Dice Number Is : " + generateRandom);


//Task 5
// var toss = parseInt((Math.random() * 2) + 1);
// document.write(toss + "<br>");
// switch (toss) {
//     case 1:
//         document.write("Random coin Value : Tails");
//         break;
//     case 2:
//         document.write("Random coin Value : Heads");
//         break;
// }


//Task 6
// var numbers = parseInt((Math.random() * 100) + 1);
// document.write("Random numbers between 1 and 100 : " + numbers);


//Task 7
// var weight = window.prompt("Enter Weight");
// var store;
// for (var i = 0; i < weight.length; i++) {
//     if (weight.slice(i, i + 3) === "kgs") {
//         store = Number(weight.split("kgs",1));
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
//     else if (weight.slice(i, i + 2) === "kg") {
//         store = weight.split("kg", 1);
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
//     else if (weight.slice(i, i + 9) === "kilograms" || weight.slice(i, i + 8) === "kilogram") {
//         store = weight.split("kilograms", 1);
//         store = weight.split("kilogram", 1);
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
// }


//Task 8
// var secretNumber = parseInt((Math.random() * 10) + 1);
// var guess = Number(window.prompt("Guess a number between 1 - 10","Try your luck"));
// if(guess === secretNumber){
//     window.alert("Congratulations!!!");
// }
// else{
//     window.alert("Try Again!");
// }



//  Chapter 31 - 34


//Task 1
// var date = new Date();
// document.write(date);


//Task 2
// var month = date.getMonth();
// var monthsCollection = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// for (var i = 0; i < monthsCollection.length; i++) {
//     if(month === i){
//         document.write("Current Month : "+ monthsCollection[month]);
//         break;
//     }
// }


//Task 3
// var day = date.getDay();
// var daysCollection = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// document.write("Current Day Is : ");
// for (var i = 0; i < daysCollection.length; i++) {
//     if (day === i) {
//          store = daysCollection[day];
//         for (var j = 0; j < 3; j++) {
//            document.write(store[j]);
//         }
//     }
// }


//Task 4
// switch (day) {
//     case 0: case 7:
//         document.write("Its Funday");
//         break;
//     case 1: case 2: case 3: case 4: case 5: case 6:
//         document.write("Its Borr Day");
//         break;
// }


//Task 5
// var d = date.getDate();
// if(d<= 15){
//     document.write("First Fifteen Days Of the Month");
// }
// else{
//     document.write("Last Days Of the Month");
// }


//Task 6
// var time = new Date();
// document.write("Current Date : " + time + "<br>");
// document.write("Elapsed milliSecond Since January 1, 1970 : " + time.getTime() + "<br>");
// document.write("Elapsed minuites Since January 1, 1970 : " + (time.getTime() / (1000 * 3600)));


//Task 7
// var find = time.getHours();
// if (find >= 0 && find <= 12) {
//     document.write("Its AM")
// }
// else{
//     document.write("Its PM");
// }


//Task 8
// var x = new Date("December 31, 2020");
// document.write(x);


//Task 9
// var datee = new Date("June 18, 2015");
// var date = new Date();
// var store = date - datee;
// document.write((parseInt((store) / (1000 * 60 * 60 * 24))) + " days have passed since 1st Ramadan, 2015");


//Task 10
// var dateObj = new Date("2020");
// var Current = new Date();
// var randomVariable = Current - dateObj;
// document.write(parseInt((randomVariable)/(1000 * 60)) + " seconds had passed since the beginning of 2020");


//Task 11
// var current = new Date();
// document.write("Current Date : " + current + "<br>");
// current.setHours(current.getHours() - 1);
// document.write("1 hour ago, it was " + current);


//Task 12
// var current = new Date();
// document.write("Current Date : " + current + "<br>");
// current.setFullYear(current.getFullYear() - 100);
// document.write("100 years back, it was " + current);


//Task 13
// var askUser = window.prompt("Enter Your Age","Iam 18 years old");
// var dateObject = new Date();
// var calculation = dateObject.getFullYear() - askUser;
// document.write("Your Age Is : " + askUser + "<br>");
// document.write("Your Birth Year Is : " + calculation);


//Task 14
// var name = window.prompt("Enter Your Name", "My name is");
// document.write("<h1> K-Electric Bill </h2> ");
// var units = 410;
// var charge = 16;
// var late = 350
// document.write("Customer Name : <b>" + name + "</b> <br>");
// document.write("Month : <b>June</b> <br>");
// document.write("Number Of Units : <b>" + units + "</b> <br>");
// document.write("Charge per Unit : <b>" + charge + " Pkr</b> <br>");
// var onDue = units * charge;
// document.write("<br>Net Amount Payable (within Due Date) Is : <b>" + Math.round(onDue) + "</b><br>");
// document.write("Late Payment Charger : <b>" + late + " </b> <br>")
// var notDue = onDue + late;
// document.write("Gross Amount Payable (after due date) Is : <b>" + Math.round(notDue) + "</b>");



//  Chapter 35 - 38


//Task 1
// function date() {
//     var currentDate = new Date();
//     document.write(currentDate);
// }
// date();

//Task 2
// function greet(f, l) {
//     var conact = f + " " + l;
//     window.alert("Hello " + conact);
// }
// var firstnAme = window.prompt("Enter Your First Name:");
// var lastnAme = window.prompt("Enter Your Last Name:");
// greet(firstnAme,lastnAme);


//Task 3
// function addTwo(int1, int2) {
//     return int1 + int2;
// }
// var num1 = Number(window.prompt("Enter First Number"));
// var num2 = Number(window.prompt("Enter Second Number"));
// var result = addTwo(num1, num2);
// window.alert("Sum Of " + num1 + " and " + num2 + " Is : " + result);


//Task 4
// function calculator(num1, operator, num2) {
//     if (operator === "+") {
//         return num1 + num2;
//     }
//     else if (operator === "-") {
//         return num1 - num2;
//     }
//     else if (operator === "*") {
//         return num1 * num2;
//     }
//     else if (operator === "/") {
//         return num1 / num2;
//     }
//     else if (operator === "%") {
//         return num1 % num2;
//     }
//     else {
//         return "Invalid";
//     }
// }
// var int1 = Number(window.prompt("Enter First Number"));
// var ope = window.prompt("Enter Operator Number");
// var int2 = Number(window.prompt("Enter Second Number"));
// var cal = calculator(int1, ope, int2);
// window.alert(int1 + " " + ope + " " + int2 + " = " + cal);


//Task 5
// function square(num) {
//     return Math.pow(num, 2);
// }
// var user = window.prompt("Enter Number");
// var ans = square(user);
// window.alert("Square Of " + user + " is : " + ans);


//Task 6
// function factorial(num) {
//     var store = 1
//     for (var i = 1; i <= num; i++) {
//         store *= i
//     }
//     document.write("The Factorial Of " + num + " is : " + store);
// }
// var user = Number(window.prompt("Enter Number"));
// factorial(user);


//Task 7
// function counting(first, last) {
//     for (var i = first; i <= last; i++) {
//         document.write(i + " ");
//     }
// }

// var start = Number(window.prompt("Enter Start Number"));
// var end = Number(window.prompt("Enter Last Number"));
// counting(start, end);



//Task 8
// function calculateHypotenuse(b, p) {
//     function calculateSquare(n) {
//         return Math.pow(n, 2);
//     }
//     return calculateSquare(b) + calculateSquare(p);
// }
// var base = Number(window.prompt("Enter Base"));
// var perpendicular = Number(window.prompt("Enter Perpendicular"));
// var calcu = calculateHypotenuse(base, perpendicular);
// document.write("Hypotenuse Is : " + calcu);



//Task 9
// function areaOfReactangle(val1, val2) {
//     var A = val1 * val2;
//     window.alert("Area Of Reactangle Is : " + A);
// }
// var height = 23;
// var width = 81;
// areaOfReactangle(3, 8); // as value
// areaOfReactangle(height, width); // as Variable


//Task 10
// function palindrome(str, num) {
//     var temp = "";
//     for (var i = num; i >= 0; i--) {
//         temp = temp + str[i]
//     }
//     if(temp === str){
//         document.write(str + " Is Palindrome");
//     }
//     else{
//         document.write(str + " Is Not Palindrome");
//     }
// }
// var pal = window.prompt("Enter Word");
// len = pal.length - 1;
// palindrome(pal, len);


//Task 11
// function Upper(string = "") {
//     var split = string.toLowerCase().split(" ");
//     for (var i = 0; i < split.length; i++) {
//         split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
//     }
//     string = split.join(" ");
//     document.write(string);
// }
// var str = "the quick brown fox";
// Upper(str);


//Task 12
// function longest(str = "") {
//     var long = str.split(" ");
//     longestWord = 0;
//     store = "";
//     for (var i = 0; i < long.length; i++) {
//         if (long[i].length > longestWord) {
//             longestWord = long[i].length;
//             store = long[i]
//         }
//     }
//     document.write(store);
// }
// longest("Web Development Tutorial");


//Task 13
// function Occurence(string = "", letter = "") {
//     var val = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string.slice(i, i + 1) === letter) {
//             val++;
//         }
//     }
//     document.write(letter + " appears " + val + " times");
// }

// Occurence("muhammad", "m")


//Task 14
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The Circumference Of Circle Is " + circumference.toFixed(2) + "<br>");
// }
// function calcArea(radius) {
//     var area = (Math.PI * Math.pow(radius,2));
//     document.write("The Area Of Circle Is " + area.toFixed(2));
// }
// calcCircumference(5);
// calcArea(4);