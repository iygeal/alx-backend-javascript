var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'Paris',
};
var studentsList = [student1, student2];
function renderTable(students) {
    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var tableBody = document.createElement('tbody');
    // Create table headers
    var headerRow = document.createElement('tr');
    var nameHeader = document.createElement('th');
    nameHeader.textContent = 'First Name';
    var locationHeader = document.createElement('th');
    locationHeader.textContent = 'Location';
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(locationHeader);
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);
    // Rows for each student
    students.forEach(function (student) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = student.firstName;
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(nameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}
// Render table
renderTable(studentsList);
