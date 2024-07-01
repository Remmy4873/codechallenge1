

function studentGradeGenerator(){
    let marks = prompt ("Enter student marks (0-100):");
    marks = Number (marks);
}

if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Please enter a valid number between 0 and 100."); return;
}
let grade;

if(marks > 79 && marks <=100){
    grade = 'A';
} else if (marks >= 60 && marks <= 79){
    grade = 'B';
}else if (marks >= 50 && marks <= 59){
    grade = 'C';
}else if (marks >=40 && marks <= 49){
    grade = 'D';
}else if (marks = 0 && marks < 39){
    grade = 'E';
}


console.log(`The grade for the marks ${marks} is: ${grade}`);

studentGradeGenerator();