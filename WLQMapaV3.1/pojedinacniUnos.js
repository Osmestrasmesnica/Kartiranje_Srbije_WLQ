//podesavanje inputa
const myInput = document.querySelector('[name="inputText"]')
let btn = document.querySelector('button');
btn.addEventListener('click', event => {
    let prvoSlovo = myInput.value.substring(0,1);
    let drugoSlovo = myInput.value.substring(1,2);
    let prviBroj = myInput.value.substring(2,3);
    let drugiBroj = myInput.value.substring(3,4);
    console.log(prvoSlovo, drugoSlovo, prviBroj, drugiBroj); 
  
    //za prvo slovo
    myInput.value ==='' ? alert('Moraš da ubaciš ispravnu vrednost 10x10 UTM kvadrata!')
    : prvoSlovo.includes('C') ? document.getElementById('XYnn').style.left = `calc(calc(0${prviBroj}*10.217px) + 63.764px)`
    : prvoSlovo.includes('D') ? document.getElementById('XYnn').style.left = `calc(calc(1${prviBroj}*10.217px) + 63.764px)`
    : prvoSlovo.includes('E') ? document.getElementById('XYnn').style.left = `calc(calc(2${prviBroj}*10.217px) + 63.764px)`
    : prvoSlovo.includes('F') ? document.getElementById('XYnn').style.left = `calc(calc(3${prviBroj}*10.217px) + 63.764px)`
    : console.log('nista od navedenog');
   
    //za drugo slovo
    drugoSlovo.includes('M') ? document.getElementById('XYnn').style.top = `calc(calc(-0${drugiBroj}*10.24px) + 562.55px)`
    : drugoSlovo.includes('N') ? document.getElementById('XYnn').style.top = `calc(calc(-1${drugiBroj}*10.24px) + 562.55px)`
    : drugoSlovo.includes('P') ? document.getElementById('XYnn').style.top = `calc(calc(-2${drugiBroj}*10.24px) + 562.55px)`
    : drugoSlovo.includes('Q') ? document.getElementById('XYnn').style.top = `calc(calc(-3${drugiBroj}*10.24px) + 562.55px)`
    : drugoSlovo.includes('R') ? document.getElementById('XYnn').style.top = `calc(calc(-4${drugiBroj}*10.24px) + 562.55px)`
    : drugoSlovo.includes('S') ? document.getElementById('XYnn').style.top = `calc(calc(-5${drugiBroj}*10.24px) + 562.55px)`
    : console.log('nista od navedenog nema');
});
