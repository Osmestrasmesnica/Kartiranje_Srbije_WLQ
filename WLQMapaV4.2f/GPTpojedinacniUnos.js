const myInput = document.querySelector('[name="inputText"]');
const XYnn = document.getElementById('XYnn');

const positions = {
    'C': {
        '0': 63.764,
        '1': 73.981,
        '2': 84.198,
        '3': 94.415
    },
    'D': {
        '0': 104.632,
        '1': 114.849,
        '2': 125.066,
        '3': 135.283
    },
    'E': {
        '0': 145.5,
        '1': 155.717,
        '2': 165.934,
        '3': 176.151
    },
    'F': {
        '0': 186.368,
        '1': 196.585,
        '2': 206.802,
        '3': 217.019
    },
    'M': {
        '0': 562.55,
        '1': 552.33,
        '2': 542.11,
        '3': 531.89,
        '4': 521.67,
        '5': 511.45
    },
    'N': {
        '0': 501.23,
        '1': 491.01,
        '2': 480.79,
        '3': 470.57,
        '4': 460.35,
        '5': 450.13
        },
    'P': {
        '0': 439.91,
        '1': 429.69,
        '2': 419.47,
        '3': 409.25,
        '4': 399.03
        },
    'Q': {
        '0': 388.81,
        '1': 378.59,
        '2': 368.37,
        '3': 358.15
        },
    'R': {
        '0': 347.93,
        '1': 337.71,
        '2': 327.49,
        '3': 317.27
        },
    'S': {
        '0': 307.05,
        '1': 296.83,
        '2': 286.61
        }
        };
        
        function moveXYnn() {
        const inputText = myInput.value;
        if (!inputText) {
        alert("Moraš da ubaciš ispravnu vrednost 10x10 UTM kvadrata!");
        return;
        }const firstLetter = inputText[0];
        const secondLetter = inputText[1];
        const firstNumber = inputText[2];
        const secondNumber = inputText[3];
        
        if (!positions[firstLetter] || !positions[firstLetter][firstNumber]) {
            console.log("Nije validna vrednost za prvo slovo i broj");
            return;
        }
        if (!positions[secondLetter] || !positions[secondLetter][secondNumber]) {
            console.log("Nije validna vrednost za drugo slovo i broj");
            return;
        }
        
        XYnn.style.left = `${positions[firstLetter][firstNumber]}px`;
        XYnn.style.top = `${positions[secondLetter][secondNumber]}px`;
    }
    const btn = document.querySelector('button');
    btn.addEventListener('click', moveXYnn);