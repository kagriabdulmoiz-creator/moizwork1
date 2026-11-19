for(
    let i = 1 ; i<=5;i++)
    {document.write("*".repeat(i)+"<br>")

    }
     
document.write("<br>")

        let number ="";
        for(let i = 1;i <= 5; i++) {  number += i; 
            document.write( number+ "<br>");
        }  

document.write("<br>")
        for(let i = 9; i >= 1; i--) {
            document.write("*".repeat(i) + "<br>");
        }
    document.write("<br>")
        for(let i = 1; i <= 9; i++) {
            document.write(String(i).repeat(i) + "<br>");
        }
    
    for(let i = -1; i >= -10; i--){
        document.write("<br>",i)
    };
let i = 1;
let sum = 0;

while (i <= 20) {
    sum = sum + i;
    i++;
}

document.write("<br>Sum is: " + sum);

document.write("<br>")

// let i = 10;

// do {
//    document.write(i);
//     i--;
// } while (i >= 1);
        let name = prompt("Enter your name:");

let English = Number(prompt("Enter English marks:"));
let Urdu = Number(prompt("Enter Urdu marks:"));
let Maths = Number(prompt("Enter Maths marks:"));
let Physics = Number(prompt("Enter Physics marks:"));
let Chemistry = Number(prompt("Enter Chemistry marks:"));
let Computer = Number(prompt("Enter Computer marks:"));
let Biology = Number(prompt("Enter Biology marks:"));

let obtainedMarks = English + Urdu + Maths + Physics + Chemistry + Computer + Biology;

let totalMarks = 700;

let percentage = (obtainedMarks / totalMarks) * 100;

let result;

if (English >= 40 && Urdu >= 40 && Maths >= 40 &&
    Physics >= 40 && Chemistry >= 40 &&
    Computer >= 40 && Biology >= 40) {
    result = "Pass";
} else {
    result = "Fail";
}

document.write("<h2>Student Marksheet</h2>");
document.write("Student Name: " + name + "<br>");
document.write("English: " + English + "<br>");
document.write("Urdu: " + Urdu + "<br>");
document.write("Maths: " + Maths + "<br>");
document.write("Physics: " + Physics + "<br>");
document.write("Chemistry: " + Chemistry + "<br>");
document.write("Computer: " + Computer + "<br>");
document.write("Biology: " + Biology + "<br>");
document.write("<hr>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Result: " + result);
    

     
    