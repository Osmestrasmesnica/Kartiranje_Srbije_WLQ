import WLQ from './sviPodaci.json';

// Assert that the imported data is in JSON format
try {
  JSON.parse(WLQ);
} catch (e) {
  console.error("Invalid JSON format");
}

// Filter the data to only include those with defined UTM_10x10 values
const podaciUTM = WLQ.filter(podatak => (
  podatak.UTM_10x10 !== undefined && podatak.UTM_10x10 !== "Neprecizan podatak"
));

// Create a new array with a more readable format for the data
const lepPrikaz = podaciUTM.map(i => {
  return {
    vrsta: i.PunNaziv,
    utm10x10: i.UTM_10x10,
    podatak: i.Tip_podatka
  }
});

// Extract the unique species names
const vrsteUTM = Array.from(new Set(podaciUTM.map(vrste => vrste.PunNaziv)));

// Optional: Log the array of unique species names to the console
console.log(vrsteUTM);

// Optional: Log the name of the 6th species to the console
console.log(vrsteUTM[5]);

// Add event listener on select element to disable input element
const select = document.querySelector("#sel");
const input = document.getElementById("fname");
select.addEventListener("change", event => {
  input.disabled = select.value !== "";
});

// Import the necessary libraries
const electron = require('electron');
const { dialog } = electron.remote;
const XLSX = require('xlsx');

// Create the button
const button = document.createElement('button');
button.innerHTML = 'Choose Excel Folder';

// Add event listener to the button to open a file dialog
button.addEventListener('click', (event) => {
    dialog.showOpenDialog({ properties: ['openDirectory'] }, (folderPaths) => {
        if (folderPaths === undefined) {
            console.log("No folder selected");
            return;
        }

        // Get the path of the selected folder
        const folderPath = folderPaths[0];

        // Get all the Excel files in the folder
        const excelFiles = getExcelFiles(folderPath);

        // Loop through the files and process them
        excelFiles.forEach((file, index) => {
            const workbook = XLSX.readFile(file);
            const sheetNames = workbook.SheetNames;

            sheetNames.forEach((sheetName) => {
                // Get the sheet data
                const sheet = workbook.Sheets[sheetName];

                // Convert the sheet to JSON
                const json = XLSX.utils.sheet_to_json(sheet);

                // Save the JSON data to a file
                const jsonName = `data${index}.json`;
                const jsonPath = `${folderPath}/dataFromExcel/${jsonName}`;
                XLSX.writeFile(json, jsonPath);
            });
        });
    });
});

document.body.appendChild(button);

//Function to get all excel file in folder
function getExcelFiles(folderPath) {
    const files = fs.readdirSync(folderPath);
    return files.filter((file) => {
        return file.endsWith('.xlsx');
    });
}
