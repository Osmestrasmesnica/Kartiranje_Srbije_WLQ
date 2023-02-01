import proba123 from './sviPodaci.json' assert { type: 'json' };

const podaciUTM = proba123.filter(podatak => (
    podatak.UTM_10x10 !== undefined && podatak.UTM_10x10 !== "Neprecizan podatak"
));

const lepPrikaz = podaciUTM.map(i => ({
    vrsta: i.PunNaziv,
    utm10x10: i.UTM_10x10,
    podatak: i.Tip_podatka
}));
console.log(lepPrikaz);

const vrsteUTM = new Set(podaciUTM.map(i => i.PunNaziv));
const kolikoKojeVrste = [...vrsteUTM].map(vrsta => ({ vrsta, count: podaciUTM.filter(i => i.PunNaziv === vrsta).length }));
console.table(kolikoKojeVrste);
console.log(vrsteUTM.size);

const podaciUTM10 = new Set(podaciUTM.map(i => i.UTM_10x10));
const kolikoCega = [...podaciUTM10].map(utm10x10 => ({ utm10x10, count: podaciUTM.filter(i => i.UTM_10x10 === utm10x10).length }));
console.table(kolikoCega);
console.log([...podaciUTM10]);
console.log(lepPrikaz.filter(i => i.podatak.includes(`Usm`)));

//ovo proveriti obavezno
const T = [], L = [], H = [], tipReference = [];
let output = "";

for (let i = 0; i < kockice.length; i++) {
  const utmPodatak = kockice[i];

  T[i] = lepPrikaz.filter(utm => 
    utm.utm10x10.includes(`${kockice[i]}`) && 
    utm.podatak.includes("Terenski")
  );

  L[i] = lepPrikaz.filter(utm => 
    utm.utm10x10.includes(`${kockice[i]}`) && 
    utm.podatak.includes("Literaturni")
  );

  H[i] = lepPrikaz.filter(utm => 
    utm.utm10x10.includes(`${kockice[i]}`) && 
    utm.podatak.includes("Usmeni")
  );

  tipReference[i] = "";
  if (T[i].length > 0) tipReference[i] += "T";
  if (L[i].length > 0) tipReference[i] += "L";
  if (H[i].length > 0) tipReference[i] += "H";
}
let dugme = document.querySelector('#dugme');
dugme.addEventListener('click', event => {
  let utmPodatak = document.querySelector('#utmPodatak').value;
  if (!utmPodatak) {
    alert('Moraš da ubaciš ispravnu vrednost 10x10 UTM kvadrata!');
    return;
  }

  let positions = {
    'C': 63.764,
    'D': 73.981,
    'E': 84.198,
    'F': 94.415
  };

  let left = positions[utmPodatak[0]] + (utmPodatak[2] * 10.217);
  let top = -(utmPodatak[3] * 10.24) + 562.55;
  let productId = `product${i}`;
  let product = document.getElementById(productId);
  product.style.left = `calc(${left}px)`;
  product.style.top = `calc(${top}px)`;
  product.className = tipReference[i];
});
