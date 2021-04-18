const table = document.getElementById('table');
const sub = document.getElementById('subject');
const formWrap = document.querySelector('#form div');

let html = '';

let subjects = ['', 'html', 'css', 'js', 'react', 'angular'];

let students = [
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

function studentsGenerate() {

    html += '<tr>';
    for (i = 0; i < subjects.length; i++) {
        html += `<th>${subjects[i]}</th>`;
    }

    html += '</tr>';

    let sum = Array(subjects.length - 1).fill(0);
    console.log(sum);
    for (i = 0; i < students.length; i++) {
        let student = students[i];

        html += '<tr>';
        html += `<td>${student.name}</td>`;

        for (j = 1; j < subjects.length; j++) {
            const grade = student.grades[j - 1] || 0;
            sum[j - 1] += grade;

            if (i === students.length - 1) {
                sum[j - 1] = Math.round(sum[j - 1] / students.length);
            }
            html += `<td class= "${grade > 50 ? "green" : "red"}">${grade}</td>`;
        }

        // html += `<td>${student.grades.reduce((a, b) => a + b, 0) / student.grades.length}</td>`;

        html += '</tr>';

    }
    average(sum);
    console.log(sum);
    table.innerHTML = html;
}

function addStudent(event) {
    event.preventDefault();
    let formInput = document.querySelectorAll('#form input');
    console.log(formInput);
    let newStudent = {
        name: '',
        grades: []
    };

    for (let i = 0; i < formInput.length; i++) {
        if (formInput[i].name === 'name') {
            newStudent.name = formInput[i].value;
        } else {
            newStudent.grades.push(+formInput[i].value);
        }
    }
    console.log(newStudent);
    students.push(newStudent);
    html = " ";
    studentsGenerate();
}

function average(average) {

    console.log();

    html += '<tr>';
    html += `<td>Average</td>`;

    for (i = 0; i < average.length; i++) {
        html += `<td>${average[i]}</td>`;
    }

    html += '</tr>';

    table.innerHTML = html;

}

studentsGenerate();
generateInput();

function addSubject(event) {
    event.preventDefault();
    subjects.push(sub.value);
    html = "";
    studentsGenerate();
    generateInput();
}

function generateInput() {
    let input = 
    `<div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
    </div>
    `;

    for (let i = 1; i < subjects.length; i++) {
        input += 
    `
    <div>
        <label for="number${i}">${subjects[i]}</label>
        <input type="number" id="number${i}">
    </div>
    `
    }

    formWrap.innerHTML = input;
}

