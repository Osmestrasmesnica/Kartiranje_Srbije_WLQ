const istocnaSrbija10x10 = [
  {
    "Redni_broj": 1,
    "Tip_podatka": "Terenski",
    "Vrsta": "Epipogium aphyllum",
    "Podvrsta": null,
    "Pun_naziv": "Epipogium aphyllum",
    "Lokalitet": "Resavska klisura-Beljanica planina",
    "PROBA10x10": "EP58"
  },
  {
    "Redni_broj": 2,
    "Tip_podatka": "Herbarski",
    "Vrsta": "Cephalanthera rubra",
    "Podvrsta": null,
    "Pun_naziv": "Cephalanthera rubra",
    "Lokalitet": "kanjon Lazareve reke (Zlotska klisura)",
    "PROBA10x10": "EP78"
  },
  {
    "Redni_broj": 3,
    "Tip_podatka": "Literaturni",
    "Vrsta": "Epipactis helleborine",
    "Podvrsta": "helleborine",
    "Pun_naziv": "Epipactis helleborine subsp. helleborine",
    "Lokalitet": "kanjon Lazareve reke (Zlotska klisura)",
    "PROBA10x10": "EP77"
  },
  {
    "Redni_broj": 4,
    "Tip_podatka": "Literaturni",
    "Vrsta": "Epipactis helleborine",
    "Podvrsta": "helleborine",
    "Pun_naziv": "Epipactis helleborine subsp. helleborine",
    "Lokalitet": "kanjon Lazareve reke (Zlotska klisura)",
    "PROBA10x10": "EN77"
  }
];

//!vidi koja je metoda najbolja za uzimanje lokalnog JSON fajla
// fetch("veliki.json")
// .then(res => res.json())
// .then(data => console.log(data))

// const probica = import('./veliki.json', {
//   assert: {
//       type: 'json'
//   }
// });
// console.log(probica);

// probica.then( d => 
//   d.default.forEach(dino => {
//    console.log("Vrsta", dino);
// })
// );

import data from './veliki.json' assert { type: 'json' };
console.log(data);
console.log(data);

import proba123 from './severoistočnaSRB.json' assert { type: 'json' };
console.log(proba123);


//!KAKO DA DAM VREDNOST OVOM DATA IZNAD STO SAM IMPORTOVAO

  //TODO promeniti u skladu sa kako si nazvao array sa podacima (ovde je istočnaSrbina10x10) 
  //TODO promeniti zaglavlje kolone ako nije ustanovljen uniformni naziv (ovde je PROBA10x10)
  //!Konstanta koja sadrži podatke sa svim vrstama za koje postoje UTM10x10 kvadratići, pritom moraju da su lepo nazvani tj da sadrži 4 karatkera (potencialno napraviti da su prve 2 slova, druge 2 broj), da nisu prazne/0, da ne piše "Neprecizan podatak" 
  //!Kolona gde su UTM kvadratići se ovde zove PROBA10x10 i bilo bi lepo da se uniformiše kako će se ova kolona zvati u EXCELU
  const podaciUTM = proba123.filter(podatak => (
    podatak.PROBA10x10 !== undefined && podatak.PROBA10x10 !== "Neprecizan podatak"  /*&& podatak.Tip_podatka == "Terenski"*/
  ));
  console.log(podaciUTM);
  console.table(podaciUTM);

  //!samo podaci koji nas interesuju u novom arrayu, u susti je isto sto i podaciUTM samo sto nema sve od podataka unutra
  //TODO vidi da li ovo moze da se napise i bez return i ljubicaste {} i plave {}
  //TODO obratiti pažnju koje sve kolone sadrži (primer je i.Redni_broj, i.Pun_naziv), proveriti iz originalne Excel tabele i eventualno dodaješ po potrebi šta želiš ovde
  var lepPrikaz = podaciUTM.map( i => {
    return {
      vrsta: i.Pun_naziv,
      utm10x10: i.PROBA10x10,
      podatak: i.Tip_podatka
    } 
  });
  console.log(lepPrikaz);
  

  //!Spisak svih vrsta
  const vrsteUTM = podaciUTM.map(vrste => vrste.Pun_naziv)
  console.log(vrsteUTM);
  console.table(vrsteUTM);
  //!Koliko koje
  const kolikoKojeVrste = vrsteUTM.reduce(function(obj,item) {
    if(!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {}); 
  console.log(kolikoKojeVrste);
  //!broj vrsta
  console.log(Object.keys(kolikoKojeVrste).length)
  //!koliko koje i spisak svih
  console.table(kolikoKojeVrste);



  //todo const XYZ koja je na pocetku prazna, dodeliti value prve vrste iz kolikoKojeVrste, ako je = istocnaSrbija10x10[i].Vrsta odrediti istocnaSrbija10x10[i].UTM_10x10 i sacuvati kao array ili nesto tako 
  //todo u sustini za svaku vrstu treba pronaci sve UTM10x10 gde se ona nalazi, nije bitno kako ali da mozes da se primeni na veliko

  //!Vrednosti svih 10x10 kvadratica
  const podaciUTM10 = podaciUTM.map(podatak => podatak.PROBA10x10)
  console.log(podaciUTM10);


  //!Koliko kog UTM10x10 imas
  //TODO pogledaj WESBOS za .reduce, mozda mozes to da iskoristis da ti pronadje sve 10x10 automatski i plus koliko puta se ponavljaju
  const kolikoCega = podaciUTM10.reduce(function(obj,item) {
    if(!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {}); //ne zaboraviti da treba i prazan array na kraju da se doda {}
  console.log(kolikoCega);
  
  //!Oni kvadracitici koji se ne ponavljaju 10x10
  var kockice = Array.from(new Set(podaciUTM10))
  console.log(kockice);
  console.log(lepPrikaz.filter(utm => utm.podatak.includes(`Usm`)));
var T = new Array();
var L = new Array();
var H = new Array();
var qwerty = [];
//!za svaki kockice if=lepPrikaz[i].utm10x10  nađeš sve vrednosti lepPrikaz[i].Tip_podatka i ako ima herbar onda H ako ima Herbar i literaturni ond HiL ako ima sva tri ond HiLiT


  //!Za svaki 10x10 kvadratic se pravi div
  //za svaki od kockice[i] treba da se odradi ovo sve dok i = kokice.lenght
  let output = "";
  for (let i=0; i < kockice.length; i++) {
    // const proba10 = lepPrikaz[i].utm10x10;
    // const probaTip = lepPrikaz[i].Tip_podatka;    
    const proba10 = kockice[i];
    T[i] = lepPrikaz
        .filter(utm => utm.utm10x10.includes(`${kockice[i]}`) 
        && utm.podatak.includes("Terenski"))
        
    L[i] = lepPrikaz
        .filter(utm => utm.utm10x10.includes(`${kockice[i]}`) 
        && utm.podatak.includes("Literaturni"))

    H[i] = lepPrikaz
        .filter(utm => utm.utm10x10.includes(`${kockice[i]}`) 
        && utm.podatak.includes("Usmeni"))

    T[i].length > 0 && L[i].length > 0 && H[i].length > 0 ? qwerty[i] = ("TiLiH") 
    : T[i].length > 0 && L[i].length > 0 ? qwerty[i] = ("TiL") 
    : T[i].length > 0 && H[i].length > 0 ? qwerty[i] = ("TiH") 
    : L[i].length > 0 && H[i].length > 0 ? qwerty[i] = ("LiH")
    : T[i].length > 0 ? qwerty[i] = ("T") 
    : L[i].length > 0 ? qwerty[i] = ("L")
    : T[i].length > 0 ? qwerty[i] = ("H")
    : console.log("nema bato nista");

    //* console.log(zaUbacivanje);
    let dugme = document.querySelector('#dugme');
    dugme.addEventListener('click', event => {
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
    });
    //!Da li ovo ide u pelju ili ne?
    //!Za svaki 10x10 [i] praviš div
    output += `
      <div class="product" id="product${i}"></div>
                `
    document.querySelector(".products").innerHTML = output; 
  };
   
   //todo Napravti dugme za skidanje dela iz HTML, ima na YT kako nesto kao HTML to Canvas
   //todo napraviti da input za pojedincani 10x10 bude opadajuci meni sa ponudjenim kvadraticima i brojevima
   //todo srediti malo taj input iz excel tabele i export u exel tabelu preko JSON
   //todo napraviti da mozes da biras koja vrsta je koje boje
   //todo napraviti da velicina kruzica u kvadraticima zavisi od ukupnog broja podataka u datom kvadraticu
   //todo PROMENITI SLIKU POZADINE I NAPRAVITI UTM grid za nju i odrediti poziciju slike (top: nn px; left: nn px) 
   //todo priliko predstavljanja podataka, if literatruni jedan oblik, if terenski drugi, if nesiguran treci, if herbarski cetvrsta, if nov peti, if netacan, if neprecizan