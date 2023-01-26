// ******************************Practice Problem 2********************************
// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal

// ****************Solution-1**************

// variable declaration
var givenNumber = [13, 79, 45];

// condition applied
if (givenNumber[0] > givenNumber[1] ) {
    console.log("The largest number is" + " " + givenNumber[0]);
} else if(givenNumber[1] > givenNumber[2]) {
    console.log("The largest number is" + " " + givenNumber[1]);
}else{
    console.log("The largest number is" + " " + givenNumber[2]);
}
// ****************Solution-2**************
// variable declaration
side1 = 9;
side2 = 8;
side3 = 9;
// condition applied
if(side1 == side2 && side2 == side3) {
    console.log("The triangle is not Isosceles");
}else if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log("The triangle is Isosceles");
}else{
    console.log("The triangle is not Isosceles");
}
