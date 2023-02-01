import WLQ from './sviPodaci.json' assert { type: 'json' };
console.log(WLQ);

const podaciUTM = WLQ.filter(podatak => (
  podatak.UTM_10x10 !== undefined && podatak.UTM_10x10 !== "Neprecizan podatak"  /*&& podatak.Tip_podatka == "Terenski"*/
));
console.log(podaciUTM);
//* console.table(podaciUTM);

var lepPrikaz = podaciUTM.map( i => {
  return {
    vrsta: i.PunNaziv,
    utm10x10: i.UTM_10x10,
    podatak: i.Tip_podatka
  } 
});
//* console.log(lepPrikaz);

const vrsteUTM = podaciUTM.map(vrste => vrste.PunNaziv)
var pojedinačnoSveVrste = Array.from(new Set(vrsteUTM))
console.log(pojedinačnoSveVrste);
console.log(pojedinačnoSveVrste[5]);
 
const select = document.querySelector("#sel");
const input = document.getElementById("fname");

select.addEventListener("change", event => {
  input.disabled = select.value !== "";
});




let btnVrsta = document.querySelector('.btnVrsta');
btnVrsta.addEventListener('click', event => {

  const value = select.value !== "" ? select.value : input.value;
  console.log(value);

  let arrOdabraneVrste = lepPrikaz.filter(function(item){
    if (item.vrsta.includes(value)){
      return{}
    };
  });
  //* console.log(unos);
  //* console.log(arrOdabraneVrste); 
  
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

    //todo prepraviti ovde iz USMENI u HERBARSKI
    H[i] = arrOdabraneVrste
        .filter(utm => utm.utm10x10.includes(`${UTMOdabraneVrste[i]}`) 
        && utm.podatak.includes("Usmeni"))
    
    //!ako se nesto nalazi pod Terenski/Usmeni/Herbarski/Literaturni podatak onda će dužina biti veća od 0
    T[i].length > 0 && L[i].length > 0 && H[i].length > 0 ? qwerty[i] = ("TiLiH") 
    : T[i].length > 0 && L[i].length > 0 ? qwerty[i] = ("TiL") 
    : T[i].length > 0 && H[i].length > 0 ? qwerty[i] = ("TiH") 
    : L[i].length > 0 && H[i].length > 0 ? qwerty[i] = ("LiH")
    : T[i].length > 0 ? qwerty[i] = ("T") 
    : L[i].length > 0 ? qwerty[i] = ("L")
    : T[i].length > 0 ? qwerty[i] = ("H")
    : console.log("nema bato nista");
    console.log(qwerty[i]);
    //genijalna zamena 
    /*
    const conditions = [T[i].length > 0, L[i].length > 0, H[i].length > 0];
    const codes = ["TiLiH", "TiL", "TiH", "LiH", "T", "L", "H"];
    const index = conditions.findIndex(condition => condition);
    qwerty[i] = codes[index] || "nema bato nista";
     */

  let btnVrsta2 = document.querySelector('.btnVrsta2');
  btnVrsta2.addEventListener('click', event => {
    let prvoSlovo = proba10.substring(0,1);
      let drugoSlovo = proba10.substring(1,2);
      let prviBroj = proba10.substring(2,3);
      let drugiBroj = proba10.substring(3,4);
      //* console.log(prvoSlovo, drugoSlovo, prviBroj, drugiBroj);
      
      // za prvo slovo
      proba10 ==='' ? alert('Moraš da ubaciš ispravnu vrednost 10x10 UTM kvadrata!')
      : prvoSlovo.includes('C') ? document.getElementById(`product${i}`).style.left = `calc(calc(0${prviBroj}*10.217px) + 63.764px)`
      : prvoSlovo.includes('D') ? document.getElementById(`product${i}`).style.left = `calc(calc(1${prviBroj}*10.217px) + 63.764px)`
      : prvoSlovo.includes('E') ? document.getElementById(`product${i}`).style.left = `calc(calc(2${prviBroj}*10.217px) + 63.764px)`
      : prvoSlovo.includes('F') ? document.getElementById(`product${i}`).style.left = `calc(calc(3${prviBroj}*10.217px) + 63.764px)`
      : console.log('nista od navedenog');
  
      // za drugo slovo
      drugoSlovo.includes('M') ? document.getElementById(`product${i}`).style.top = `calc(calc(-0${drugiBroj}*10.24px) + 562.55px)`
      : drugoSlovo.includes('N') ? document.getElementById(`product${i}`).style.top = `calc(calc(-1${drugiBroj}*10.24px) + 562.55px)`
      : drugoSlovo.includes('P') ? document.getElementById(`product${i}`).style.top = `calc(calc(-2${drugiBroj}*10.24px) + 562.55px)`
      : drugoSlovo.includes('Q') ? document.getElementById(`product${i}`).style.top = `calc(calc(-3${drugiBroj}*10.24px) + 562.55px)`
      : drugoSlovo.includes('R') ? document.getElementById(`product${i}`).style.top = `calc(calc(-4${drugiBroj}*10.24px) + 562.55px)`
      : drugoSlovo.includes('S') ? document.getElementById(`product${i}`).style.top = `calc(calc(-5${drugiBroj}*10.24px) + 562.55px)`
      : console.log('nista od navedenog nema');

      document.getElementById(`product${i}`).className = qwerty[i]

  })
  output += `<div class="product" id="product${i}"></div>`
  document.querySelector(".products").innerHTML = output;
  }
  console.log(UTMOdabraneVrste);
  console.log(TipPodatkaOdabraneVrste);

  

})