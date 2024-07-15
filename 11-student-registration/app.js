// JS-CC-011 : Student Registration
// The purpose of this coding challenge is to display the data given as string in the form of an html table.

// Expected Outcome
// St Nr	First Name	Last Name	Location	Path
// C1234	John	Doe	London	Full-Stack
// C2345	Jane	Doe	London	Data-Science
// C2346	Mary	Ann	Paris	AWS-Devops
// C2347	Adam	Smith	Texas	AWS-Devops
// C2444	Michael	Great	Arizona	Full-Stack
// C2555	William	Cash	Manchester	Data-Science
// C2455	Patrick	Jane	Madrid	Full-Stack


const input = [
    'C1234 - John Doe, London, Full-Stack',
    'C2345 - Jane Doe, London, Data-Science',
    'C2346 - Mary Ann, Paris, AWS-Devops',
    'C2347 - Adam Smith, Texas, AWS-Devops',
    'C2444 - Michael Great, Arizona, Full-Stack',
    'C2555 - William Cash, Manchester, Data-Science',
    'C2455 - Patrick Jane, Madrid, Full-Stack'
];

function parseInputData(data) {
    return data.map(entry => {
        const [studentNr, rest] = entry.split(' - ');
        // console.log([studentNr, rest]);
        const [fullName, location, path] = rest.split(', ');
        // console.log([fullName, location, path]);
        const [firstName, ...lastNameArr] = fullName.split(' ');
        // console.log([firstName, ...lastNameArr]);
        // Using ...lastNameArr in case some student have more than one last name
        const lastName = lastNameArr.join(' ');
        console.log(lastName);
        return { studentNr, firstName, lastName, location, path };
    });
}

function generateTableRows(parsedData) {
    const tableBody = document.querySelector('#studentTable tbody');
    parsedData.forEach(({ studentNr, firstName, lastName, location, path }) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${studentNr}</td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${location}</td>
            <td>${path}</td>
        `;
        tableBody.appendChild(row);
    });
}

const parsedData = parseInputData(input);
generateTableRows(parsedData);

