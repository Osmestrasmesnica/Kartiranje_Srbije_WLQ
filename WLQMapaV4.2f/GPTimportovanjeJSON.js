let WlqData;

function importJSON() {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        const data = JSON.parse(e.target.result);
        resolve(data);
      };

      reader.readAsText(file);
    };

    input.click();
  });
}

function showProbaData() {
  const select = document.getElementById("headerSelect");
  const selectedHeader = select.value;
  const probaData = WlqData.filter(item => item[selectedHeader] !== "Neprecizan podatak" && item[selectedHeader] !== undefined);
  console.log(probaData);
}

let selectedHeader;
function showUniqueData(){
  const keys = Object.keys(WlqData[0]);
  for(let i = 1; i < WlqData.length; i++) {keys = keys.concat(Object.keys(WlqData[i])).filter((item, index, inputArray) => inputArray.indexOf(item) === index);
  }
  keys.sort();
  const select = document.getElementById("headerSelect");
  const selectValue = select.value;
  select.innerHTML = "";
  for (let i = 0; i < keys.length; i++) {
  const option = document.createElement("option");
  option.value = keys[i];
  option.text = keys[i];
  select.appendChild(option);
  if (keys[i] === selectValue) {
  select.value = selectValue;
  }
  }
  }
  
  importJSON().then(data => {
  WlqData = data;
  showUniqueData();
  });
  
  document.getElementById("headerSelect").addEventListener("change", showProbaData);
  
  // Call the populateSelect function when the page loads
  window.onload = populateSelect;
