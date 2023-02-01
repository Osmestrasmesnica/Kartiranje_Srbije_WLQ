// Declare variables at the top of the script for easy reference
const selectElement = document.querySelector("#fname");
const selectedValue = document.querySelector("#izabranaVrsta");
const jsonUrl = './sviPodaci.json';

// Function to update the selected value text bila je myFunction
function updateSelectedValue(value) {
    selectedValue.innerText = value;
}

// Function to populate the select element with options from the JSON file
function populateSelect() {
    // Create a new XHR object
    const xhr = new XMLHttpRequest();
    xhr.open('GET', jsonUrl);
    xhr.responseType = 'json';

    // Handle the response from the server
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Filter and map the JSON data to the desired format
            const data = xhr.response.filter(podatak => (
                podatak.UTM_10x10 !== undefined && podatak.UTM_10x10 !== "Neprecizan podatak"
            )).map( i => {
                return {
                    vrsta: i.PunNaziv,
                    utm10x10: i.UTM_10x10,
                    podatak: i.Tip_podatka
                } 
            });

            // Extract unique vrsta values and sort them alphabetically
            const vrstaValues = Array.from(new Set(data.map(item => item.vrsta))).sort();

            // Iterate over the vrsta values and create options for the select element
            for (let i = 0; i < vrstaValues.length; i++) {
                const option = document.createElement("option");
                option.value = vrstaValues[i];
                option.text = vrstaValues[i];
                selectElement.appendChild(option);
                }
                } else {
                console.error('Request failed. Returned status of ' + xhr.status);
                }
                };// Send the request
                xhr.send();
            }

            // Add event listener to select element to update the selected value text when a new option is selected
            selectElement.addEventListener("change", function() {
            updateSelectedValue(selectElement.value);
            });
            
            // Call the populateSelect function when the page loads
            window.onload = populateSelect;
