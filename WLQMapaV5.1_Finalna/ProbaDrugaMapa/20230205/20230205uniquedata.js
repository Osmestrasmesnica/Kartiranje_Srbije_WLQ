function myFunction() {
    const selectedValue = document.querySelector("#fname").value;
    document.querySelector("#izabranaVrsta").innerText = selectedValue;
}

// Populate the select element with data from a JSON file
function populateSelect() {
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url = "./sviPodaci.json";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Parse JSON data
            let data = JSON.parse(xhr.responseText);

            // Filter data based on specific conditions
            const filteredData = data.filter(item => item.UTM_10x10 !== undefined && item.UTM_10x10 !== "Neprecizan podatak");

            // Create a new object with relevant properties
            const mappedData = filteredData.map(item => {
                return {
                    vrsta: item.PunNaziv,
                    utm10x10: item.UTM_10x10,
                    podatak: item.Tip_podatka
                };
            });

            // Get unique values of the 'vrsta' property
            const vrstaValues = mappedData.map(item => item.vrsta);
            const uniqueVrstaValues = Array.from(new Set(vrstaValues));

            // Sort the values alphabetically
            uniqueVrstaValues.sort();

            // Populate the select element with the unique values
            let selectElement = document.getElementById("sel");
            for (let i = 0; i < uniqueVrstaValues.length; i++) {
                selectElement.innerHTML += `<option value="${uniqueVrstaValues[i]}">${uniqueVrstaValues[i]}</option>`;
            }
        }
    };

    xhr.open(method, url, true);
    xhr.send();
}

// Show the selected value in the select element
function showSelectedValue(selectElement){
    var msg = document.getElementById('msg');
    msg.innerHTML = 'Izabran takson: <b>' + selectElement.options[selectElement.selectedIndex].text
}
