//podesavanje varijabli
const   inputs = document.querySelectorAll('.varijable input')
function liveUpdate () {
    const sufiks = this.dataset.sizing || '';
    console.log(sufiks);
    console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`,this.value + sufiks);
}
inputs.forEach(input => input.addEventListener('change', liveUpdate));
inputs.forEach(input => input.addEventListener('mousemove', liveUpdate));

//todo napraviti varijablu za boju Herbarskog podatka 
//todo eventualno usmenog podatka