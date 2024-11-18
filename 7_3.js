function calculateAverageGrade(students) {
    let totalGrade = students.reduce((accumulator, currentItem) => accumulator + currentItem.grade, initial);
    return totalGrade / students.length;
}

const initial = 0;
const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students));