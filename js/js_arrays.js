// JavaScript document to demonstrate JS loops, single and multi-dimensional arrays, their methods and properties. */

// looping variables
let n, a;

// Variable to hold the contents to be appended to the 'array-content' div element.
let arrayContent = "";

// Decalre a single dimension array of student names
let studentNames = new Array("Justin","Alexander", "Mathew","Pascal","Zakaria", "Miranda","Teka","Sahra","Fatma","Mapena","Xavier");

// Populate the 'array-content' div with the student names above
for(n = 0; n < studentNames.length; n++)
	arrayContent += `Student ${n + 1}. ${studentNames[n]}<br/>`;
	
// Get the number of students in the class
	arrayContent += `<p>the original number of students in the class is: ${studentNames.length}</p>`;
// Admit/add new students to the class
studentNames.push("George","Yorusaliem","Levi","Kama","Abigail",'Tesfai');

// Paragraph element to display the names of the new admissions/students
arrayContent += `<p>The names of the new students in class are: </p>`

for(; n < studentNames.length; n++)
{
	arrayContent += `Student ${n + 1}. ${studentNames[n]}<br/>`;
}

arrayContent += `<p>The names of all the students in class before sorting are: </p>`;
// Use for...in loop to display the names
for(let name in studentNames)
{
	arrayContent += `Student ${parseInt(name) + 1}: ${studentNames[name]}<br/>`;
}

// Sort the studentNames in lexicographical/alphabetical/ascending order
studentNames.sort();
// Display the sorted names of the students in class
arrayContent += `<p>The names of all the students in class after sorting are: </p>`;
// TODO: code to display the sorted names


// Sort the names in reverse/descending order
studentNames.reverse();
arrayContent += `<p>The names of all the students in class in reverse order are: </p>`;
for(let name in studentNames)
	arrayContent += `Student ${parseInt(name) + 1}: ${studentNames[name]}<br/>`;

/* -------------------------------------------------------------------
   Two dimensional arrays
   ------------------------------------------------------------------- */
// Heading for the staff section
arrayContent += `<h3 class='section-heading'>ADSE2509 Staff Salary Report</h3>`;

// Declare and initialise a 2-D array to hold staff salary details
let studSalary = new Array(8);
studSalary[0] = ["James","001",30000,10000,5000];
studSalary[1] = ["Mercy","002",72000,15000,5000];
studSalary[2] = new Array("Mohamed","003",40000,20000,8500);
studSalary[3] = ["Derrick","004",60000,15000,8000];
studSalary[4] =new Array("Daniel","005",80000,12000,10000);
studSalary[5] = ["Ngure","006",13000,8000,6000];
studSalary[6] =new Array("Kate","007",45000,15000,8000);
studSalary[7] = ["Jeff","008",100000,12000,8500];

// Add the staff details to a table
arrayContent += `<table border="2px" class="data-table">`;
arrayContent += `<tr><th>Name</th><th>Emp. ID</th><th>Basic Pay</th><th>Hse. Allowance</th><th>Travel Allowance</th><th>Gross Pay</th></tr>`; // Table headers

// Use a nested loop to display the employee's salary details
for(n = 0; n < studSalary.length; n++)
{
	arrayContent += `<tr>`; // Open the table row
	let grossPay = 0;
	a = 0;
	while( a <studSalary[n].length)
	{
		arrayContent += `<td>${studSalary[n][a]} </td>`;
		if (a > 1)
//			grossPay += parseInt(studSalary[n][a]);
			grossPay += Number(studSalary[n][a]);
		a++;
	}
	arrayContent += `<td>${grossPay}</td>`;
	arrayContent += `</tr>`; // Close the table row
}
arrayContent += `</table>`;


// Display the contents of the 'arrayContent' variable
document.getElementById("array-content").innerHTML = arrayContent;