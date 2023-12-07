// Question1 
var num = Number(prompt('Enter Number'));
console.log('The number is '+num);

//Question2 
// var num = Number(prompt('Enter Number'));
// if (num%3==0 && num%4==0) {
//     console.log('yes');
// }
// else {
//     console.log('No');
// }

// Question3 
// var num1 = Number(prompt('Enter Number1'));
// var num2 = Number(prompt('Enter Number2'));
// if (num1 > num2) {
//     console.log("The max number is num1 = "+num1);
// }
// else if(num2 > num1) {
//     console.log("The max number is num2 = "+num2);
// }
// else{
//     console.log('enter another two numbers');
// }

// Question4 
// var num = Number(prompt('Enter Number'));
// if (num<0) {
//     console.log('negative');
// }
// else {
//     console.log('Positive');
// }

// Question5 
// var num1 = Number(prompt());
// var num2 = Number(prompt());
// var num3 = Number(prompt());
// function maxMinElements(num1, num2, num3) {
//     let max = Math.max(num1, num2, num3);
//     let min = Math.min(num1, num2, num3);
//     return `max element = ${max}
//    min element = ${min}`;
// }
// console.log(maxMinElements(num1, num2, num3));

// Question5(another way) 
// var num1 = Number(prompt('Enter Number1'));
// var num2 = Number(prompt('Enter Number2'));
// var num3 = Number(prompt('Enter Number3'));
// if ((num1>num2 && num1>num3)||(num2<num1 && num2<num3)) {
//     console.log('max element = '+num1);
//     console.log('min element = '+num2);
// }
// else if((num2>num1 && num2>num3)||(num1<num2 && num1<num3)) {
//     console.log('max element = '+num2);
//     console.log('min element = '+num1);
// }
// else if((num3>num1 && num3>num2)||(num2<num1 && num2<num2)) {
//     console.log('max element = '+num3);
//     console.log('min element = '+num2);
// }


// Question6 , 7
// var num = Number(prompt('Enter Number'));
// if (num > 0) {
//     if (num % 2 == 0) {
//         console.log('even');
//     }
//     else {
//         console.log('odd');
//     }
// }
// else {
//     console.log('enter another number that can be a positive number to check');
// }

// Question8
// var char=prompt('Enter Character');
// if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ){
//     console.log('vowel');
// }
// else{
//     console.log('Consonant');
// }

// Question9
// var num = Number(prompt('Enter Number'));
// for (var i=1 ;i<=num; i++) {
//     console.log(i);
// }

//Question10
// var num = Number(prompt('Enter Number'));
// var result;
// for (var i=2 ;i<=12; i++) {
//     result=i * num;
//     console.log(result);
// }

//Question11
// var num = Number(prompt('Enter Number'));
// for (var i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//Question12
// var num = Number(prompt('Enter Number'));
// var power = Number(prompt('Enter Power'));
// var result=1;
// for (var i = 1; i <= power; ++i) {
//     result*= num;
// }
// console.log(result);


//Question12(Another question)
// var Marks = Number(prompt('Enter Marks of five subjects:'));

// var mark2 = Number(prompt());
// var mark3 = Number(prompt());
// var mark4 = Number(prompt());
// var mark5 = Number(prompt());

// var total = Marks + mark2 + mark3 + mark4 + mark5;
// var avg= total/5;
// var persenrage=(total/500)*100;
// console.log('Total marks ='+total);
// console.log('Average Marks = '+avg);
// console.log('Percentage = '+persenrage);


//Question13
// var numOfManth = Number(prompt(' Month Number:'));
// if(numOfManth ==1 || numOfManth ==3 || numOfManth ==5|| numOfManth ==7|| numOfManth ==8|| numOfManth ==10 || numOfManth ==12 ){
//     console.log('Days in Month: ' + 31);
// }
// else if(numOfManth ==2){
//     console.log('Days in Month: ' + 28);
// }
// else if(numOfManth ==4 || numOfManth ==6 || numOfManth ==9|| numOfManth ==11){
//     console.log('Days in Month: ' + 30);
// }

//Question13(another solution)
// var numOfManth = Number(prompt(' Month Number:'));

// function daysInMonth(month, year) {
// 	return new Date(year, month, 0).getDate();
// }

// function GFG_Fun() {
// 	let date = new Date();
// 	let month = date.getMonth() + 1;
// 	let year = date.getFullYear();
// 	console.log("Days in Month: " + daysInMonth(month, year));
// }
// GFG_Fun()


//Question14
// var Physics = Number(prompt(' input marks of five subjects first Physics mark: '));
// var Chemistry = Number(prompt(' input Chemistry mark: '));
// var Biology = Number(prompt(' input Biology mark: '));
// var Math = Number(prompt(' input Mathematics mark: '));
// var Computer = Number(prompt(' input Computer mark: '));

// var total = Physics + Chemistry + Biology + Math + Computer;
// var persenrage=Number((total/500)*100);
// console.log('Percentage = '+persenrage);

// if(persenrage >= 90){
//     console.log('Grade A');
// }
// else if(persenrage >= 80){
//     console.log('Grade B');
// }
// else if(persenrage >= 70){
//     console.log('Grade C');
// }
// else if(persenrage >= 60){
//     console.log('Grade D');
// }
// else if(persenrage >= 40){
//     console.log('Grade E');
// }
// else if(persenrage < 40){
//     console.log('Grade F');
// }

// ======================> switch case <==================//
//Question15
// var dayOfMonth = Number(prompt('Month Number:'));
// switch (dayOfMonth) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log('Days in Month: ' + 31);
//         break;
//     case 2:
//         console.log('Days in Month: ' + 28);
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log('Days in Month: ' + 30);
//         break;

// }

//Question16
// var char = prompt('Enter Char:');
// switch (char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log(' Vowel');
//         break;
//     default:
//         console.log('Constant');
//         break;

// }

//Question17
// var num1 = Number(prompt('Enter Number1:'));
// var num2 = Number(prompt('Enter Number2:'));
// switch (true) {
//     case num1 > num2:
//         console.log(' The num1 is Max: ' + num1);
//         break;
//     case num2 > num1:
//         console.log(' The num2 is Max: ' + num2);
//         break;

// }

//Question18
// var num = Number(prompt('Enter Number:'));
// switch (true) {
//     case num%2==0:
//         console.log('even');
//         break;
//     case num%2==1:
//         console.log('odd');
//         break;

// }

//Question19
// var num = Number(prompt('Enter Number:'));
// switch (true) {
//     case num>0:
//         console.log('positive');
//         break;
//     case num<0:
//         console.log('Negative');
//         break;
//     default:
//         console.log('Zero');
//         break;

// }


//Question20
// var num1 = Number(prompt('Enter Number1:'));
// var operation = prompt('Enter operation(+ or - or / or *): ');
// var num2 = Number(prompt('Enter Number2:'));
// switch (true) {
//     case operation == '+':
//         console.log(num1 + num2);
//         break;
//     case operation == '-':
//         console.log(num1 - num2);
//         break;
//     case operation == '/':
//         console.log(num1 / num2);
//         break;
//     case operation == '*':
//         console.log(num1 * num2);
//         break;
//     default:
//         console.log('please enter valid operation');
// }