const table = document.getElementById('table');

let html = '';

let subject = ['', 'html', 'css', 'js', 'react', 'angular', 'Average'];

html += '<tr>';
for (i = 0; i < subject.length; i++) {
    html += `<th>${subject[i]}</th>`;
}
html += '</tr>';

const students = [
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
for (i = 0; i < students.length; i++) {
    const student = students[i];
    let average = 0;

    html += '<tr>';
    html += `<td>${student.name}</td>`;

    for (a = 0; a < student.grades.length; a++) {
        html += `<td>${student.grades[a]}</td>`;
    }
    for (e = 0; e < student.grades.length; e++){
        average += student.grades[e];
    }
    average /= student.grades.length;

    if(average <= 50){
        html += `<td class="red">${average}</td>`;
    } else {
        html += `<td class="green">${average}</td>`;
    }

    // html += `<td>${student.grades.reduce((a, b) => a + b, 0) / student.grades.length}</td>`;

    html += '</tr>';

}

table.innerHTML = html;

