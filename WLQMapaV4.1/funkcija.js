function myFunction(){
    const x = document.querySelector("#fname").value
    document.querySelector("#izabranaVrsta").innerText = x
}


//! window.onload = populateSelect(); // Automatski da se učita funkcija kako se stranica pokrene
function populateSelect() {
    // Create XMLHttpRequest object, with GET method.
    var xhr = new XMLHttpRequest(), 
        method = 'GET',
        overrideMimeType = 'application/json',
        url = './sviPodaci.json';  //! Add the file URL.

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

      // Parse JSON data.
      let skk = JSON.parse(xhr.responseText);
      const skk1 = skk.filter(podatak => (
        podatak.UTM_10x10 !== undefined && podatak.UTM_10x10 !== "Neprecizan podatak"  /*&& podatak.Tip_podatka == "Terenski"*/
      ));
      var skk2 = skk1.map( i => {
        return {
          vrsta: i.PunNaziv,
          utm10x10: i.UTM_10x10,
          podatak: i.Tip_podatka
        } 
      });
    
      const skk3 = skk2.map(vrste => vrste.vrsta)
      var skk4 = Array.from(new Set(skk3))
      console.log(skk4.length);

       // Sort the items in the array alphabetically.
       skk4.sort();

      let ele = document.getElementById('sel');
      for (let i = 0; i < skk4.length; i++) {
      
        // Bind data to <select> element.
        ele.innerHTML = ele.innerHTML +
          '<option value="' + skk4[i] + '">' + skk4[i] + '</option>';
      }
    }
  };
  xhr.open(method, url, true);
  xhr.send();
  
  
}


function show(ele) {
    // Get the selected value from <select> element and show it.
    var msg = document.getElementById('msg');
    msg.innerHTML = 'Izabran takson: <b>' + ele.options[ele.selectedIndex].text
}


