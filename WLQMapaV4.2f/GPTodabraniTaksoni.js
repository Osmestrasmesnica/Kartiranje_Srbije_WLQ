import WLQ from './sviPodaci.json'

// Ensure imported data is of correct type
assert({ type: 'json' });

// Function to filter data based on specific criteria
const filterData = data => data.filter(podatak => (
  podatak.UTM_10x10 !== undefined && 
  podatak.UTM_10x10 !== "Neprecizan podatak"
));

// Function to map data to a new object structure
const mapData = data => data.map(i => ({
    vrsta: i.PunNaziv,
    utm10x10: i.UTM_10x10,
    podatak: i.Tip_podatka
  }));

// Function to get unique values from an array
const getUniqueValues = data => Array.from(new Set(data));

// Function to handle select change event
const handleSelectChange = event => {
  input.disabled = select.value !== "";
};

// Function to handle button click event
const handleButtonClick = event => {
  const value = select.value !== "" ? select.value : input.value;
  console.log(value);

  let arrOdabraneVrste = mapData(filterData(WLQ)).filter(item => item.vrsta.includes(value));

  let UTMOdabraneVrste = [];
  let TipPodatkaOdabraneVrste = [];
  var T = new Array();
  var L = new Array();
  var H = new Array();
  var qwerty = [];
  let output = "";

  for(let i=0; i<arrOdabraneVrste.length; i++){
    UTMOdabraneVrste.push(arrOdabraneVrste[i].utm10x10);
    TipPodatkaOdabraneVrste.push(arrOdabraneVrste[i].podatak);

    const proba10 = UTMOdabraneVrste[i];
    T[i] = arrOdabraneVrste
        .filter(utm => utm.utm10x10.includes(`${UTMOdabraneVrste[i]}`) 
        && utm.podatak.includes("Terenski"))

    L[i] = arrOdabraneVrste
        .filter(utm => utm.utm10x10.includes(`${UTMOdabraneVrste[i]}`) 
        && utm.podatak.includes("Literaturni"))

    H[i] = arrOdabraneVrste
        .filter(utm => utm.utm10x10.includes(`${UTMOdabraneVrste[i]}`) 
        && utm.podatak.includes("Usmeni"))

        const conditions = [T[i].length > 0, L[i].length > 0, H[i].length > 0];
        const codes = ["TiLiH", "TiL", "TiH", "LiH", "T", "L", "H"];
        const index = conditions.findIndex(condition => condition);
        qwerty[i] = codes[index] || "nema bato nista";
        let btnVrsta2 = document.querySelector('.btnVrsta2');

        btnVrsta2.addEventListener('click', event => {
          // Extract the first and second letter and the first and second number of proba10
          let [firstLetter, secondLetter, firstNumber, secondNumber] = [proba10.substring(0,1), proba10.substring(1,2), proba10.substring(2,3), proba10.substring(3,4)];
        
          // Check if proba10 is not an empty string, otherwise show an alert
          if (!proba10) {
            alert('Moraš da ubaciš ispravnu vrednost 10x10 UTM kvadrata!');
          } else {
            // Check the first letter and set the left position of the element
            if (firstLetter.includes('C')) {
              document.getElementById(`product${i}`).style.left = `calc(calc(0${firstNumber}*10.217px) + 63.764px)`;
            } else if (firstLetter.includes('D')) {
              document.getElementById(`product${i}`).style.left = `calc(calc(1${firstNumber}*10.217px) + 63.764px)`;
            } else if (firstLetter.includes('E')) {
              document.getElementById(`product${i}`).style.left = `calc(calc(2${firstNumber}*10.217px) + 63.764px)`;
            } else if (firstLetter.includes('F')) {
              document.getElementById(`product${i}`).style.left = `calc(calc(3${firstNumber}*10.217px) + 63.764px)`;
            } else {
              console.log('nista od navedenog');
            }}

        let topPosition;
        if (secondLetter === 'M') {
            topPosition = `calc(calc(-0${secondNumber}*10.24px) + 562.55px)`;
        } else if (secondLetter === 'N') {
            topPosition = `calc(calc(-1${secondNumber}*10.24px) + 562.55px)`;
        } else if (secondLetter === 'P') {
            topPosition = `calc(calc(-2${secondNumber}*10.24px) + 562.55px)`;
        } else if (secondLetter === 'Q') {
            topPosition = `calc(calc(-3${secondNumber}*10.24px) + 562.55px)`;
        } else if (secondLetter === 'R') {
            topPosition = `calc(calc(-4${secondNumber}*10.24px) + 562.55px)`;
        } else if (secondLetter === 'S') {
            topPosition = `calc(calc(-5${secondNumber}*10.24px) + 562.55px)`;
        }
        
        // create a new product element
        let product = document.createElement("div");
        product.className = qwerty[i];
        product.id = `product${i}`;
        product.style.top = topPosition;
        document.querySelector(".products").appendChild(product);
        })}}
        console.log(UTMOdabraneVrste);
        console.log(TipPodatkaOdabraneVrste);