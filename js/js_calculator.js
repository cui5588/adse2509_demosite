// JavaScript file to demonstrate the various JS operators and switch...case
// construct to create a simple calculator.

// Create a function to handle the calculation
function calculate()
{
	// Constants to hold the numbers/values entered by the user and the operation selected
	const num1 = parseInt(document.getElementById('txtFirstNum').value);
	const num2 = parseInt(document.getElementById('txtSecondNum').value);
	const operation = document.getElementById('sltOperation').value;
	
	// Variable to store/hold the result/answer
	let result = "";
	
	// Switch...case to determine the arithmetic operation to be performed
	switch(operation)
	{
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/": // for robustness handle the case when num2 == 0 to avoid errors in your script
			result = num1 / num2;
			break;
		case "%":
			result = num1 % num2;
			break;
		case "^":
			result = num1 ** num2; // Same as Math.pow(num1,num2)
			break;
		default:
			alert("Please select Add, Subtract, Multiply, Divide, Modulus/Remainder of Exponent/Power")
			result = "";
			break;
	}
	
	// Display the result/answer in the answer textfield (txtAnswer)
	document.getElementById('txtAnswer').value = result;
}