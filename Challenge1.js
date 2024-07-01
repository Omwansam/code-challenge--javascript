function correctGrade(){
    const prompt = require('prompt-sync')();
    const studentMarks = parseFloat(prompt("Enter student marks.")); // Converting marks from a string to a number


// conditional statement to check range of values
    if(isNaN(studentMarks) || studentMarks < 0 || studentMarks > 100){
        console.log("Enter the correct student marks");
        return;
    }

    if (studentMarks > 79){
        console.log("A");
    } else if(studentMarks >=60 && studentMarks <= 79){
        console.log("B");
    }  else if(studentMarks >=50 && studentMarks <= 59){
        console.log("C");
    }  else if(studentMarks >=40 && studentMarks <= 49){
        console.log("D");
    } else{
        console.log("E");
    }
}

correctGrade();