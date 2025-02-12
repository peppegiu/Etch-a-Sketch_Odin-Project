const containerEl = document.querySelector(".container");
const label = document.querySelector(".range");
const range = document.querySelector("#area");
const RGB_button = document.querySelector("#RGB_button")
const normal_button = document.querySelector("#normal_button")
let colorMode;
let request;

RGB_button.addEventListener("click", () => {
    request = "rainbow";

    
})

normal_button.addEventListener("click", () => {
    request = "normal";   
})
 
let grid;
let number_blocks;
let div;

label.textContent = range.value;
range.addEventListener("input", () => {
    label.textContent = range.value + "X" + range.value;
    grid = Number(range.value);
    number_blocks = grid ** 2;
})

function updateGrid() {
    if (Number(containerEl.childElementCount == 0)) {
        createDiv();
        
    }
    
    else {
        DeleteChildNodes();
        createDiv();
    }
        
    
}


function DeleteChildNodes() {
    containerEl.innerHTML = " ";
    
}


function createDiv() {
    containerEl.style.width = "700px"
    let containerWidth = containerEl.style.width;
    let new_width_var = containerWidth.replace("px", "");
    const div_size = new_width_var / grid;
    for (let i = 1; i <= number_blocks; i++) {
        div = document.createElement("div");
        div.style.width = div_size + "px";
        div.style.height = div_size + "px";
        div.style.border = "1px solid gray";
        div.className = "box";
        div.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = verifyColor();
                console.log(div.value);
        })
        
        containerEl.appendChild(div);
    }
}

function RandomizeRGBNumber() {
    return Math.floor(Math.random() * 255);
}

console.log(RandomizeRGBNumber())


function changeColorMode(mode) {
    if (mode === "rainbow") {
        return `rgb(${RandomizeRGBNumber()} ${RandomizeRGBNumber()} ${RandomizeRGBNumber()})`;
    }

    else if (mode === "normal") {
        return "gray";
    }
}

function verifyColor() {
    if (request === "normal") {
        colorMode = changeColorMode(request);
        return colorMode;
    }

    if (request === "rainbow") {
        colorMode = changeColorMode(request);
        return colorMode;
    }
}