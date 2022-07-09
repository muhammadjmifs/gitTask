// Task 4 Compulsory Task 1
// write a program that prints out the message “Hello World!”

// alert('Hello World');

alert('Git is Awesome');

// Modify your program to accept input from the user and then print out whatever was input.
function input() {
  let output = prompt("Please enter your text:", "");

  document.getElementById("output").innerHTML = output;
}
