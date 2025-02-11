const containerEl = document.querySelector(".container");
const label = document.querySelector(".range");
const range = document.querySelector("#area");
 
let grid;
let number_blocks;
let div;

label.textContent = range.value
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
    containerEl.style.width = "960px"
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
            e.target.style.backgroundColor = "gray";
        })
        
        containerEl.appendChild(div);
    }
}


