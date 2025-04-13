//complete this code
class Person {
	constructor(name, number) {
		this._name = name;
		this._number = number;
		this._age = null;
	}

	get name() {
		return this._name;
	}

	set age(age) {
		this._age = age;
	}

	get age() {
		return this._age;
	}
}

class Student extends Person {
	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

const person = new Person("John", 25);
console.log(person.name);  

person.age = 30;  
console.log(person.age);  // Output: 30

const student = new Student("Alice", 22);
student.study();  

const teacher = new Teacher("Bob", 40);
teacher.teach();  

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
