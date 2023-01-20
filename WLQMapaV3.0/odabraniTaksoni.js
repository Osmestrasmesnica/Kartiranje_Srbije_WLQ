 //!pravljenje funkcije koja prolazi kroz sve podatke i vadi za svaku vrstu svaki UTM koji se pojavljuje, i gleda da li ima duplikata ili ne
 function myFunction() {
    var x = document.getElementById("fname").value;
    document.getElementById("izabranaVrsta").innerHTML = x;
    let btnVrsta = document.querySelector('.btnVrsta');
    btnVrsta.addEventListener('click', event => {
        
        let arrIzabraneVrste = istocnaSrbija10x10.filter(function(item){
            if (item.Pun_naziv.includes(x)){
            return{}
            };
        });
        console.log(arrIzabraneVrste);


    let nizUTMOdabraneVrste = [];
    for(let i=0; i<arrIzabraneVrste.length; i++){
      nizUTMOdabraneVrste.push(arrIzabraneVrste[i].UTM10x10);
    }
    console.log(nizUTMOdabraneVrste);

    let outputVrste = "";
    for (let i=0; i < nizUTMOdabraneVrste.length; i++) {
    const zaUbacivanjeVrste = nizUTMOdabraneVrste[i];
    //* console.log(zaUbacivanjeVrste);
    let dugmeVrste = document.querySelector('.btnVrsta');
    dugmeVrste.addEventListener('click', event => {
      let prvoSlovoVrste = zaUbacivanjeVrste.substring(0,1);
      let drugoSlovoVrste = zaUbacivanjeVrste.substring(1,2);
      let prviBrojVrste = zaUbacivanjeVrste.substring(2,3);
      let drugiBrojVrste = zaUbacivanjeVrste.substring(3,4);
      //* console.log(prvoSlovoVrste, drugoSlovoVrste, prviBrojVrste, drugiBrojVrste);
      
      // za prvo slovo
      zaUbacivanjeVrste ==='' ? alert('Moraš da ubaciš ispravnu vrednost 10x10 UTM kvadrata!')
      : prvoSlovoVrste.includes('C') ? document.getElementById(`product${i}`).style.left = `calc(calc(0${prviBrojVrste}*10.217px) + 63.764px)`
      : prvoSlovoVrste.includes('D') ? document.getElementById(`product${i}`).style.left = `calc(calc(1${prviBrojVrste}*10.217px) + 63.764px)`
      : prvoSlovoVrste.includes('E') ? document.getElementById(`product${i}`).style.left = `calc(calc(2${prviBrojVrste}*10.217px) + 63.764px)`
      : prvoSlovoVrste.includes('F') ? document.getElementById(`product${i}`).style.left = `calc(calc(3${prviBrojVrste}*10.217px) + 63.764px)`
      : console.log('nista od navedenog');
  
      // za drugo slovo
      drugoSlovoVrste.includes('M') ? document.getElementById(`product${i}`).style.top = `calc(calc(-0${drugiBrojVrste}*10.24px) + 562.55px)`
      : drugoSlovoVrste.includes('N') ? document.getElementById(`product${i}`).style.top = `calc(calc(-1${drugiBrojVrste}*10.24px) + 562.55px)`
      : drugoSlovoVrste.includes('P') ? document.getElementById(`product${i}`).style.top = `calc(calc(-2${drugiBrojVrste}*10.24px) + 562.55px)`
      : drugoSlovoVrste.includes('Q') ? document.getElementById(`product${i}`).style.top = `calc(calc(-3${drugiBrojVrste}*10.24px) + 562.55px)`
      : drugoSlovoVrste.includes('R') ? document.getElementById(`product${i}`).style.top = `calc(calc(-4${drugiBrojVrste}*10.24px) + 562.55px)`
      : drugoSlovoVrste.includes('S') ? document.getElementById(`product${i}`).style.top = `calc(calc(-5${drugiBrojVrste}*10.24px) + 562.55px)`
      : console.log('nista od navedenog nema');
    });
    
    // kreireanje HTML outputa za svaki i
    outputVrste += `
      <div class="product" id="product${i}"></div>
    `
  };
   //* console.log(output);
   document.querySelector(".products").innerHTML = outputVrste; //!da li i ovo treba da bude u okviru for petlje ili ne?
   


    })
  }
