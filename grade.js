// Grading problem with for loop
//variable declaration-final score
var students = ["I", "Tom", "Jane", "Peter", "John"];
var scores =[85, 66, 95,56, 40];
// for loop
for(var i = 0; i < scores.length; i++){
var score = scores[i];
var student = students[i];
if (score >= 80) {
    console.log(student + ":" + "I have got A Grade");
    }else if (score >= 60) {
        console.log(student + ":" + "I have got B Grade");
    }else if (score >= 50) {
        console.log(student + ":" + "I have got C Grade");
    }else if (score >= 40) {
        console.log(student + ":" + "I have got D Grade");
    }else if (score < 40) {
        console.log(student + ":" + "I have got F Grade");
    }
}

