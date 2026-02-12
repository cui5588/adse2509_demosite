// JavaScript document to demonstrate JS custom/user-defined objects and built-in JS objects
// Helper array to build the HTML content
const contentParts = [];

// Create a Student object using object literal
const singleStudent = {
	surname: "Abraham",
	otherNames: "James Akshar",
	age: 25,
	gender: "Male",
	course: "ADSE",
	fullname() {
		return `${this.surname} ${this.otherNames}`;
	}
};

// Create a section heading and add it to the contentParts array
contentParts.push(`<h3 class="section-heading">Student Details</h3>`);
contentParts.push(`
	<p>
	Student's Name: ${singleStudent.fullname()}<br/>
	Student's Age: ${singleStudent.age} years old.<br/>
	Student's Gender: ${singleStudent.gender}<br/>
	Student's Course: ${singleStudent.course}<br/>
	</p>
`);

// Employee object usnig object literal
const employee = {
	firstname: "Abigail",
	lastname: "Mueni",
	gender: "Female",
	phoneNumber:"0733123457",
	email: "a.mueni@edulink.ac.ke",
	age:25,
	salary:257000,
	fullDetails()
	{
		return `
		Employee's Names: ${this.firstname} ${this.lastname}<br/>
		Employee's Age: ${this.age} years old<br/>
		Employee's Gender: ${this.gender} <br/>
		Employee's Phone No.: ${this.phoneNumber} <br/>
		Employee's Email: ${this.email} <br/>
		Employee's Salary: Kes. ${this.salary} <br/>
`;
	}
};

contentParts.push(`<h3 class="section-heading">Employee Details</h3>`);
contentParts.push(`<p>${employee.fullDetails()}</p>`)

// Create a Circle class using the ES6 class syntax
class Circle
{
	constructor(radius){this.radius = radius;}
	
	area() {return Math.PI * this.radius ** 2;}
	
	circumference() {return Math.PI * (this.radius * 2);}
}

// Declare and create(instantiate) 2 circle objects
const smallCircle = new Circle(7);
const largeCircle = new Circle(21);

contentParts.push(`<h3 class="section-heading">Details of the small circle</h3>`);
contentParts.push(`
    <p>
    	Radius: ${smallCircle.radius} cm.<br/>
		Area: ${smallCircle.area().toFixed(3)} cm<sup>2</sup>.<br/>
		Radius: ${smallCircle.circumference().toFixed(2)} cm.<br/>
   </p>
`);

contentParts.push(`<h3 class="section-heading">Details of the large circle</h3>`);
contentParts.push(`
    <p>
    	Radius: ${largeCircle.radius} cm.<br/>
		Area: ${largeCircle.area().toFixed(3)} cm<sup>2</sup>.<br/>
		Radius: ${largeCircle.circumference().toFixed(2)} cm.<br/>
   </p>
`);

// Create a RightAngledTriangle class using the ES6 class syntax
class RightAngledTriangle
{
	constructor(base,height)
	{
		this.base = base;
		this.height = height;
		this.hypotenuse = Math.sqrt(base ** 2 + Math.pow(height,2));
	}
	
	area() {return .5 * this.base * this.height;}
	perimeter() {return this.base + this.height + this.hypotenuse;}
	
	describe()
	{
		return `
			Base: ${this.base} cm.<br/>
			Height: ${this.height} cm.<br/>
			Hypotenuse: ${this.hypotenuse} cm.<br/>
			Area: ${this.area().toFixed(3)} cm<sup>2</sup>.<br/>
			Perimeter: ${this.perimeter().toFixed(2)} cm.<br/>
		`;
	}
}

// Declare and create(instantiate) 2 right angeled triangle objects
const triangle1 = new RightAngledTriangle(3,4);
const triangle2 = new RightAngledTriangle(5,12);

contentParts.push(`<h3 class="section-heading">Details Right angled triangle1</h3><p>${triangle1.describe()}</p>`);
contentParts.push(`<h3 class="section-heading">Details Right angled triangle2</h3><p>${triangle2.describe()}</p>`);

// Date and time using built-in Date object and modern formatting
const now = new Date();

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currDay = dayNames[now.getDay()];

const formattedDate = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}).format(now);

const currHour = String(now.getHours()).padStart(2, '0');
const currMin = String(now.getMinutes()).padStart(2, '0');
const currSec = String(now.getSeconds()).padStart(2, '0');

const formattedTime = `${currHour}:${currMin}:${currSec}`;

contentParts.push(`
  <p>Today is ${formattedDate} and the current time is ${formattedTime}.</p>
`);

// Render all the content to the DOM
document.getElementById("object-content").innerHTML = contentParts.join("");