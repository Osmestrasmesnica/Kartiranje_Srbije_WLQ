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

    // //read local JSON
    // fetch("book1.json")
    // .then(response => response.json())
    // .then(data => showInfo(data));

    // function showInfo(data) {
    //     console.log(data.podaci);
    // }


