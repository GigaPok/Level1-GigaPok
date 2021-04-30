class Student {

    name = '';
    grades = [];

    addName(name) {
        this.name = name;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }
}

class Table {

    html = '';
    students = [
        {
            name: 'nika',
            grades: [12, 42, 93, 74, 35]
        },
        {
            name: 'mari',
            grades: [54, 23, 31, 45, 52]
        },
        {
            name: 'toko',
            grades: [61, 42, 63, 46, 53]
        },
        {
            name: 'giga',
            grades: [21, 52, 13, 16, 23]
        }
    ];
    subjects = ['', 'html', 'css', 'js', 'react', 'angular'];

    constructor() {
        this.table = document.getElementById('table');
        this.sub = document.getElementById('subject');
        this.formWrap = document.querySelector('#form div');
    }

    addStudnet(event) {
        const formInput = document.querySelectorAll('#form input');
        const student = new Student;
    
        for (let i = 0; i < formInput.length; i++) {
            if (formInput[i].name === 'name') {
                student.addName(formInput[i].value);
            } else {
                student.addGrade(+formInput[i].value);
            }
        }

        this.students.push(student);
        
        this.render();
    }

    addSubjects(event) {
        event.preventDefault();

        this.subjects.push(event.target.value);
        this.render();
    }

    studentsGenerate() {
        this.html = '';
        this.html += '<tr>';

        for (let i = 0; i < this.subjects.length; i++) {
            this.html += `<th>${this.subjects[i]}</th>`;
        }
    
        this.html += '</tr>';
    
        let sum = Array(this.subjects.length - 1).fill(0);

        for (let i = 0; i < this.students.length; i++) {
            let student = this.students[i];
    
            this.html += '<tr>';
            this.html += `<td>${student.name}</td>`;
    
            for (let j = 1; j < this.subjects.length; j++) {
                const grade = student.grades[j - 1] || 0;
                sum[j - 1] += grade;
    
                if (i === this.students.length - 1) {
                    sum[j - 1] = Math.round(sum[j - 1] / this.students.length);
                }
                this.html += `<td class= "${grade > 50 ? "green" : "red"}">${grade}</td>`;
            }
    
            this.html += '</tr>';
    
        }

        this.average(sum);
    }
    
    average(average) {
        this.html += '<tr>';
        this.html += `<td>Average</td>`;
    
        for (let i = 0; i < average.length; i++) {
            this.html += `<td>${average[i]}</td>`;
        }
    
        this.html += '</tr>';
    }

    generateInput() {
        let input = 
            `<div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
            </div>
            `;
    
        for (let i = 1; i < this.subjects.length; i++) {
            input += 
                `
                <div>
                    <label for="number${i}">${this.subjects[i]}</label>
                    <input type="number" id="number${i}">
                </div>
                `
        }

        this.formWrap.innerHTML = input;
    }

    
    render() {
        this.generateInput();
        this.studentsGenerate();

        this.table.innerHTML = this.html;
    }
}

const TABLE = new Table();

document.getElementById('add-student').addEventListener('click', TABLE.addStudnet.bind(TABLE));
document.getElementById('add-subject').addEventListener('click', TABLE.addSubjects.bind(TABLE));

TABLE.render();
