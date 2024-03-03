console.log("start");

document.write(
  "<input type='text' placeholder='write a number' id='input1'/><br><br>"
);

document.write(
  "<input type='button' value='Show Multiplication Table' class='myClass' id='button1'/>"
);

function showMultiplication(number) {
    // Create a new div element to hold the multiplication table
    let tableDiv = document.createElement('div');
  
    // Create a title for the table and append it to the tableDiv
    let title = document.createElement('h1');
    title.innerText = "Multiplication Table of " + number;
    tableDiv.appendChild(title);
  
    // Generate the multiplication table and append it to the tableDiv
    for (let i = 1; i <= 10; i++) {
      let multiplication = i * number;
      let result = document.createElement('p'); // Using paragraph for each line for better structure
      result.innerHTML = i + " x " + number + " = " + multiplication;
      tableDiv.appendChild(result);
    }
  
    // Append the tableDiv to the body of the document
    document.body.appendChild(tableDiv);
  }
  
  // Ensure that your script runs after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    let button1 = document.getElementById("button1");
    
    button1.onclick = function() {
      let input1 = document.getElementById("input1");
      let number = parseInt(input1.value, 10); // Ensure the input is treated as an integer
      if (!isNaN(number)) { // Check if the input is a valid number
        showMultiplication(number);
      } else {
        alert("Please enter a valid number.");
      }
    };
  });
