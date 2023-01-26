// ******************************Practice Problem 2********************************
// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using if-else.

// ****************Solution**************
//variable declaration-final score
var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;

// condition applied to make result for me
if (myScore >= 80) {
    console.log("I have got A Grade");
}else if (myScore >= 60) {
    console.log("I have got B Grade");
}else if (myScore >= 50) {
    console.log("I have got C Grade");
}else if (myScore >= 40) {
    console.log("I have got D Grade");
}else if (myScore < 40) {
    console.log("I have got F Grade");
}

// condition applied to make result for tom
if (tomScore >= 80) {
    console.log("Tom has got A Grade");
}else if (tomScore >= 60) {
    console.log("Tom has got B Grade");
}else if (tomScore >= 50) {
    console.log("Tom has got C Grade");
}else if (tomScore >= 40) {
    console.log("Tom has got D Grade");
}else if (tomScore < 40) {
    console.log("Tom has got F Grade");
}

// condition applied to make result for jane
if (janeScore >= 80) {
    console.log("Jane has got A Grade");
}else if (janeScore >= 60) {
    console.log("Jane has got B Grade");
}else if (janeScore >= 50) {
    console.log("Jane has got C Grade");
}else if (janeScore >= 40) {
    console.log("Jane has got D Grade");
}else if (janeScore < 40) {
    console.log("Jane has got F Grade");
}
// condition applied to make result for peter
if (peterScore >= 80) {
    console.log("Peter has got A Grade");
}else if (peterScore >= 60) {
    console.log("Peter has got B Grade");
}else if (peterScore >= 50) {
    console.log("Peter has got C Grade");
}else if (peterScore >= 40) {
    console.log("Peter has got D Grade");
}else if (peterScore < 40) {
    console.log("Peter has got F Grade");
}
// condition applied to make result for john
if (johnScore >= 80) {
    console.log("John has got A Grade");
}else if (johnScore >= 60) {
    console.log("John has got B Grade");
}else if (johnScore >= 50) {
    console.log("John has got C Grade");
}else if (johnScore >= 40) {
    console.log("John has got D Grade");
}else if (johnScore < 40) {
    console.log("John has got F Grade");
}
