//class work
//Nestlist Loops//Practes


// for ( let i=1 ; i<=10 ; i++ ){
//     console.log(" Table Of "+  i);
//     for (let j = 1; j<=10; j++) {
//         console.log(i + ' x ' + i + ' = ' + i*j);
        
//     }
// }


//Do While

// let i  = 1 
// let j = 1
// do { 
//     // console.log( i + ' x ' + i + ' = ' + i*j);
//     i++
// }while (1 === 10)



// let i =1
// let j = 1
// while(i <= 10 ){
//     console.log(i + " x " + i + ' = ' + i * j);
//     i++
// }





// const names = 'Rahim'
// const age = '20'
// console.log(`My Name Is ${names} And My Age Is ${age}`);


// const fruit =["mango","banana","lemon","apple"]
// for(let i = 0; i < fruit.length; i++){
//     console.log(`${fruit[i]} and its index number is ${i}`);
// }

// //

// let input = document.querySelector("#inpuynumber");
// let ullist = document.querySelector(".myul");

// for (let i = 0; i < input.length; i++) {
//     ullist.innerHTML +=`<li>delete<li/> `
    
// }














                             //Arrays

//Q.No.1

// let studentName = [];


//Q.No.2 

// Not solve  


//Q.No.3  

// let fruitName = ["Apple", "Orange", " banana ", "Grapes" ];
// console.log(fruitName);


//Q.No.4  

// let number = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
// console.log(number);


//Q.No.5  

// let bool = [true, false, false];
// console.log(bool);


//Q.No.6  

// let mixedArrays = ["banana", 1 , true , 2, "Mango", "Apple", false, 10, 11];
// console.log(mixedArrays);


//Q.No.7  

//  let mobileNetwork = ["Zong", "Jazz", "Ufone", " Telenor ", "warid"];
//  console.log(mobileNetwork);


//Q.No.8  

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// let education =  document.querySelector(".container");
// education.innerHTML = qualifications;   


//Q.No.9  

// let movieName = [];
// movieName.unshift("Avengers: Age of Ultron");
// movieName.unshift("Avengers: Age of Ultron");
// movieName.unshift("Avengers: Age of Ultron");
// movieName.unshift("Avengers: Age of Ultron");
// console.log(movieName);


//Q.No.10  

// let cars = ["Corolla", "Suzuki", "Audi", "Mehran"];
// let car = cars.indexOf("Corolla");
// console.log(car);
// console.log(cars[0]);
// let car2 = cars.indexOf("Mehran");
// console.log(car2);
// console.log(cars[3]);


//Q.No.11    

// let studentName = ["Syed", "Mehar", "Shah"];
// let studentScore = [320, 230, 480];
// let totalScore = 500;

// for (let i = 0; i < studentScore.length; i++) {
//     let name = studentName[i];
//     let score = studentScore[i];
//     let percentage = score / totalScore * 100;
//     console.log(`Score of ${name} is ${score} and Percentage is : ${percentage} %`);
// }


//Q.No.12    

// let color = ["Red", "Yellow", "Green", "Blue", "Orange"];
// console.log(`Colors : ${color}`);

                      //  A 

// let user1 = prompt("Add new Color in start");
// color.unshift(user1);
// console.log(color);

                        //  B 

// let user2 = prompt("Add new Color in end");
// color.push(user2);
// console.log(color);

                        //  C 

// let user3 = prompt("Add two Color in start");
// color.unshift(user3);
// console.log(color);

                          // D  

// let user4 = prompt("Delete The First Color in the array");
// color.shift(user4);
// console.log(color);

                            //  E 

// let user5 = prompt("Delete The last Color in the array");
// color.pop(user5);
// console.log(color);

                          //  F

// let user6 = +prompt("which index he/she wants to add color(s)");
// let user7 = prompt("add the color to desired position/index");
// color.splice(user6, 0, user7);
// console.log(color);
                      
                           //  G 

// let user8 = +prompt("which index he/she wants to delete color(s)");
// let user9 = +prompt("how many colors he/she wants to delete");
// color.splice(user8, user9);
// console.log(color);


//Q.No.13 

// let studentScore = [320, 230, 480, 120];
// console.log(`Score of Students: ${studentScore}`);
// let sortStudentScore = studentScore.sort();
// console.log(`Ordered Scores of Students : ${sortStudentScore}`);


//Q.No.14 

// let fruits = ["Strawberry", "Apple", "Orange", "Banana"];
// console.log(`Fruits List : ${fruits}`);
// let sortFruits = fruits.sort();
// console.log(`Ordered list of Fruits : ${sortFruits}`);


//Q.No.15 


// let cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar" ];
// console.log(`Cities List:`);
// console.log(`${cityNames}`);
// let selectCityNames = cityNames.splice(2, 2);
// console.log(`Selected Cities List:`);
// console.log(`${selectCityNames}`); 


//Q.No.16 

// let arr = ["This", "is", "my", "cat"];
// console.log(`Array:`);
// console.log(`${arr}`);
// let arr2 = arr.join(" ")
// console.log(`String`);
// console.log(`${arr2}`);


//Q.No.17 

// let values = [];
// values.push("Keyboard");
// values.push("Mouse");
// values.push("Printer");
// values.push("Moniter");
// console.log(`Devices:`);
// console.log(values);
// console.log(`Out:`);
// console.log(values.shift());
// console.log(`Out:`);
// console.log(values.shift());
// console.log(`Out:`);
// console.log(values.shift());
// console.log(`Out:`);
// console.log(values.shift());


//Q.No.18 

// let values = [];
// values.push("Keyboard");
// values.push("Mouse");
// values.push("Printer");
// values.push("Moniter");
// console.log(`Devices:`);
// console.log(values);
// console.log(`Out:`);
// console.log(values.pop());
// console.log(`Out:`);
// console.log(values.pop());
// console.log(`Out:`);
// console.log(values.pop());
// console.log(`Out:`);
// console.log(values.pop());


//Q.No.19 

// let down = ["Apple", "Samsung", "Motorola", "Nokia"];
// let dropDown = document.querySelector("#dropDown");
// for (let i = 0; i < down.length; i++) {
//     dropDown.innerHTML = `<option >${down[i]}</option>`
// }
    
    // not complete 


// Q.No.20 

// let color = [["green", 1], ["yellow", 2], ["blue", 3], [" orange", 4]];
// console.log(color[0]);
// console.log(color[1]);
// console.log(color[2]);
// console.log(color[3]);


//Q.No.21 

// let matrix = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];
// console.log("Matrix:");
// console.log(matrix);

































                            //If..Else_Else...If


//Q NO 1:-


// var userInput = parseInt(prompt("Enter a number:"));

//         if (userInput % 3 === 0) {
//             document.write("<p>The number " + userInput + " is divisible by 3.</p>");
//         } else {
//             document.write("<p>The number " + userInput + " is not divisible by 3.</p>");
//         }


//Q NO 2:-

// var userInput = parseInt(prompt("Enter a number:"));

// if (userInput % 2 === 0) {
//     document.write("<p>" + userInput + " is an even number.</p>");
// } else {
//     document.write("<p>" + userInput + " is an odd number.</p>");
// }



//Q NO 3:-

// var userInput = parseInt(prompt("Enter a number:"));

// var age = 18; // You can set your desired age here

// if (age > 18){
//     document.write("<p>Old enough</p>");
// } else{
//     document.write("<p>Too young</p>");
// }


//Q NO 4:-

// var yourName = "Rahim"; // Change this to your name

//         var userName = prompt("Enter your name:");

//         if (userName === yourName) {
//             document.write("<p>Special greeting to " + userName + "!</p>");

//         }

//Q NO 5:-

// var userInput = parseInt(prompt("Enter a number:"));

// switch (userInput % 3) {
//     case 0:
//         document.write("<p>Number is divisible by 3.</p>");
//         break;
//     default:
//         document.write("<p>Number is not divisible by 3.</p>");
// }


//Q NO 6:-

// var userInput = prompt("Enter a character:");

// var charCode = userInput.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     document.write("<p>The input is a number.</p>");
// } else if (charCode >= 65 && charCode <= 90) {
//     document.write("<p>The input is an uppercase letter.</p>");
// } else if (charCode >= 97 && charCode <= 122) {
//     document.write("<p>The input is a lowercase letter.</p>");
// } else {
//     document.write("<p>The input is not a number or a letter.</p>");
// }


//Q NO 7:-

// var number1 = parseFloat(prompt("Enter the first number:"));

// var operator = prompt("Enter the operator (+, -, *, /, %):");

// var number2 = parseFloat(prompt("Enter the second number:"));

// var result;

// switch (operator) {
//     case '+':
//         result = number1 + number2;
//         break;
//     case '-':
//         result = number1 - number2;
//         break;
//     case '*':
//         result = number1 * number2;
//         break;
//     case '/':
//         if (number2 !== 0) {
//             result = number1 / number2;
//         } else {
//             result = "Division by zero is not allowed.";
//         }
//         break;
//     case '%':
//         result = number1 % number2;
//         break;
//     default:
//         result = "Invalid operator.";
// }

// document.write("<p>Result: " + result + "</p>");


//Q NO 8:-

// var userInput = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900):"));

// var convertedTime;
// var period;

// if (userInput >= 0 && userInput <= 2359) {

//     var hours = Math.floor(userInput / 100);
//     var minutes = userInput % 100;

//     if (hours >= 12) {
//         period = "PM";
//     } else {
//         period = "AM";
//     }

//     if (hours > 12) {
//         hours -= 12;
//     }

//     convertedTime = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0');
// } else {
//     convertedTime = "Invalid time";
//     period = "";
// }

//  document.write("<p>Converted time: " + convertedTime + " " + period + "</p>");


//Q NO 9:-

// var year = parseInt(prompt("Enter a year (YYYY format):"));

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     document.write("<p>" + year + " is a leap year.</p>");
// } else {
//     document.write("<p>" + year + " is not a leap year.</p>");
// }


//Q NO 10:-

// var correctPassword = "mypassword"; // Replace with your correct password
// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     document.write("<p>Please enter your password.</p>");
// } else {

//     if (userPassword === correctPassword) {
//         document.write("<p>Correct! The password you entered matches the original password.</p>");
//     } else {
//         document.write("<p>Incorrect password.</p>");
//     }
// }


//Q NO 11:-

// var firstName = "Rahim";
// if (firstName === "Karam") {
//  document.write("Hello Karam!");
// }
// else {
//     document.write('you are not Karam')
// }


//Q NO 12:-

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting)
// }
// else{
// greeting = "Good evening";
// document.write(greeting)
// }


//Q NO 13:-

// var frist = +prompt('enter Frist intiger  ')
// var sec = +prompt('Enter second integer')
// if(frist > sec ){
//     document.write(frist,'greater one')
// }
// else if(sec > frist){
//     document.write(sec,'greater one')

// }
// else if(frist === sec){
//     document.write("both are equal ")
// }
// else{
//     document.write('not an integer')
// }


//Q NO 14:-

// var num  = +prompt('Enter a number')
// if(num>0){
//     document.write('The number is positive')

// }
// else if(num<0){
//     document.write("The number is negative")

// }
// else if(num=== 0){
//     document.write('The number is 0')
// }
// else {
//     document.write('NaN')
// }


//Q NO 15:-

// var currentHour = parseInt(prompt("Enter the current hour (in 24-hour clock format):"));

// if (currentHour >= 6 && currentHour < 9) {
//     document.write("<p>Breakfast is served.</p>");
// } else if (currentHour >= 11 && currentHour < 13) {
//     document.write("<p>Time for lunch.</p>");
// } else if (currentHour >= 17 && currentHour < 20) {
//     document.write("<p>It's dinner time.</p>");
// } else {
//     document.write("<p>Sorry, you'll have to wait, or go get a snack.</p>");
// }


//Q NO 16:-

// var myVariable = 42; 

// var dataType = typeof myVariable;

// switch (dataType) {
//     case "number":
//         document.write("<p>The type of the variable is 'number'.</p>");
//         break;
//     case "string":
//         document.write("<p>The type of the variable is 'string'.</p>");
//         break;
//     case "boolean":
//         document.write("<p>The type of the variable is 'boolean'.</p>");
//         break;
//     case "undefined":
//         document.write("<p>The variable is 'undefined'.</p>");
//         break;
//     default:
//         document.write("<p>The type of the variable is not recognized.</p>");
// }


//Q.No.17

//  let wel = prompt("Enter vowels here").toLowerCase();
//  if(wel === "a" || wel ===  "e"  || wel ===  "i" || wel ===  "o" || wel ===  "u" ){
//      console.log("it's a wel")
//  }else if(wel){
//      console.log("it's not a wel");
//  }else{
//      console.log("invalid");
//  }





//Q.No.18

// let num1 = 10;
// if(num1 !== 8){
//     console.log("True");
// }else{
//     console.log("False");
// }


//Q.No.19

// let month = +prompt("Enter a number of month");
// if(month === 1){
//     alert("January");
// }else if(month === 2){
//     alert("February");
// }else if(month === 3){
//     alert("March");
// }else if(month === 4){
//     alert("April");
// }else if(month === 5){
//     alert("May");
// }else if(month === 6){
//     alert("June");
// }else if(month === 7){
//     alert("July");
// }else if(month === 8){
//     alert("August");
// }else if(month === 9){
//     alert("September");
// }else if(month === 10){
//     alert("October");
// }else if(month === 11){
//     alert("November");
// }else if(month === 12){
//     alert("December");
// }else{
//     alert("Invalid month");
// }


//Q.No.20

// let age = +prompt(`Enter age here`)
// age = age<18 ? "Too young" : "Old enough";
// console.log(age);























                         // For Loops





//Q.No.1

// let p = document.querySelector('.demo')
 
//  for(let i = 1; i <= 5; i++){
//     p.innerHTML += `hello loop </br>` 
//  }

//Q.No.2

// let p = document.querySelector('.demo')
// for (let i=1; i<=10; i++){
//     p.innerHTML += `${i} <br\> `;
// }

//Q.No.3
 
// let input = +prompt("Enter table here.");
// let h1 = document.querySelector('.h1');
// let table1 = document.querySelector(".container");
// let calculate = "";   
// for (let i = 1; i <= 15; i++) {
//     calculate += input + " x " + i + " = " + input * i + " <br> ";
//     table1.innerHTML = calculate;
//     h1.innerHTML = "Multiplication Table of " + input + "<br> length 15";
// }


//Q.No.4

// let p = document.querySelector('.demo')
// const mobile = ["Nokia","Samsung","Apple","Sony","Huawei"]
// for (let i = 0; i < mobile.length; i++) {
//     p.innerHTML += `${mobile[i]} <br\>`  
// }


//Q.No.5

// let p = document.querySelector('.demo')
//  const fruit =["apple","banana","mango","orange","strawberry"]
//   for(let i = 0; i < fruit.length; i++){
//      p.innerHTML += `Element at index ${i} is ${fruit[i]} <br/>`;
//  }


//Q.No.6

// let item = +prompt(`Enter how much items you want`);
// let array = [];
// for (let i = 0  ; i < item; i++) {
//     let item1 = prompt(`Enter item ${i}:`);
//     array.push(item1);
// }
// console.log(`Number of items: ${item}`);
// console.log(`Items:`);
// console.log(array);


//Q.No.7

// let h1 = document.querySelector('.h1');
// let container = document.querySelector(".container");


// for (let i = 1; i <= 15; i++) {
//     h1.innerHTML = "Counting :";
//     container.innerHTML += `${i} , `;
// }

// let h2 = document.querySelector('.h2');
// let container1 = document.querySelector(".container1");

// for (let i = 10; i >= 1; i--) {
//     h2.innerHTML = "Reverse Counting :";
//     container1.innerHTML += `${i} , `;
// }

// let h3 = document.querySelector('.h3');
// let container2 = document.querySelector(".container2");

// for (let i = 0; i <= 20; i += 2) {
//     h3.innerHTML = "Even : ";
//     container2.innerHTML += `${i} , `;
// }


// let h4 = document.querySelector('.h4');
// let container3 = document.querySelector(".container3");

// for (let i = 1; i <= 19; i += 2) {
//     h4.innerHTML = "Odd : ";
//     container3.innerHTML += `${i} , `;
// }

// let h5 = document.querySelector('.h5');
// let container4 = document.querySelector(".container4");

// for (let i = 2; i <= 20; i += 2) {
//     h5.innerHTML = "Series : ";
//     container4.innerHTML += `${i}K , `;
// }


//Q.No.8

// let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let input = prompt("Enter bakkery item:").toLowerCase();
// if (input === 'cake' || input === 'apple pie' || input === 'cookie' || input === 'chips' || input === ' patties') {
//     alert(`${input} found in the list`)
// } else {
//     alert(`${input} is not found in the list`)
// }


//Q.No.9

// let A = [24, 53, 78, 91, 12];
// let number = Math.max(...A);
// console.log(`Array Items: ${A}`);
// console.log(`The Largest number is : ${number}`);


//Q.No.10

// let A = [24, 53, 78, 91, 12];
// let number = Math.min(...A);
// console.log(`Array Items: ${A}`);
// console.log(`The smallest number is : ${number}`);


//Q.No.11

// let A = [24, 53, 78, 91, 12];
// let number1 = Math.max(...A);
// let number2 = Math.min(...A);
// console.log(`Array Items: ${A}`);
// console.log(`The Largest number is : ${number1}`);
// console.log(`The smallest number is : ${number2}`);


//Q.No.12

// let h1 = document.querySelector('.h1');
// for (let i = 5; i <=100; i += 5){
//     h1.innerHTML += i + " , ";
// }


//Q.No.13

// let students = ["Ali", "Sami", "Taha", "Inam"];
// let scores = [58, 73, 89, 90];
// let table = document.querySelector('.container table');
// let studentTable = `<thead><tr><th>Name</th><th>Score</th></tr></thead><tbody>`;
// for (let i = 0; i < students.length; i++) {
//   studentTable += `<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`;
// table.innerHTML = studentTable;
// }


//Q.No.14

//in complate

//Q.No.15

// var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// for (var i = 0; i < 1; i++) {
//     for (var j = 0; j < 3; j++) {
//         console.log(A[j]);
//     }
// }


//Q.No.16

// Get the initial value from the user
// var num = +prompt("Enter a number:");
//     for (num > 0; num -= 0.5;) {
//         console.log(num);
//     }


//Q.No.17

// for(i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }


//Q.No.18

// let product = 1;
// for (let i = 1; i <= 7; i += 2) {
//     product = product * i;
// }
// console.log("The product of the odd integers from 1 to 7 is: " + product);


//Q.No.19

// let stars = +prompt("Enter the initial number of stars:");
// let line = "";
// for (let i = stars; i >= 1; i--) {
//     line += "*";
//     console.log(line);
// }


//Q.No.20
