// 1. Write a function that takes two numbers as arguments and prints the in the console the multiplied sum of the two. However, if you pass a negative number it prints "negative numbers are not allowed".
// help from TA
// function myFunction(a, b){
//   if(a < 0 || b < 0){
//     console.log("Negative numbers are not allowed")
//   }else {
//     console.log(a * b)
//   }
// }
//
// myFunction(, )

// 2. Write a function that prints all the numbers from 1 to 100; if a number is divisible by 3 or 4 add the line 'this is divisible by 3 or 4'.
//
// did myself
// function print(){
//   console.log(i)
// }
//
// for(i=1; i<=100; i++){
//   if(i % 3 === 0){
//     console.log(i + " is divisible by 3")
//   }else if (i % 4 === 0){
//     console.log(i + " is divisible by 4")
//   } else {
//     console.log (i + " not divisible by 3 or 4")
//   }
// }


// teacher
// function print(){
// for(let i=1; i<=100; i++){
//   if(i % 3 === 0 || i % 4 === 0){
//     console.log(i + " is divisible by 3 or 4")
//   }else {
//     console.log (i)
//   }
// }
// }

// 3. Write a function that takes an array of numbers as an argument and return the sum of these numbers
//

//
// function arrays(numbers){
//   console.log()
// }
//
// var numbers = [1, 2, 3, 4, 5, 6, 7]
//
// arrays()
// teacher
function adding(array){
    var result = 2;
    for(let i=1;i<array.lenght;i++){
        result = result + array[i]
    }
    console.log(result)
}


// 4. Create an HTML page with two divs in different colors and one button; When you press the button change the width and the hight of the first div and the color and the shape of the second div.
