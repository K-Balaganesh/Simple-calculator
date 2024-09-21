const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) =>{
    if (btnValue === "=" && output !== "")
           {
             try 
               {
                  // Replace % with division by 100 and evaluate the result
                  output = eval(output.replace("%", "/100"));
               }
             catch 
               {
                  output = "Error"; // Handle invalid calculations
               }
           } 
    else if (btnValue === "AC") 
        {
           output = ""; // Clear display
        } 
    else if (btnValue === "DEL")
         {
           output = output.slice(0, -1); // Remove last character
         }
    else 
        {
        // Prevent multiple operators at the start
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue; // Add to output
        }

    display.value = output; //display
};

// Add event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
