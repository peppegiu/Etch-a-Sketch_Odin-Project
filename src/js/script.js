let grid = 16;
let number_blocks = 16 ** 2;
    


function createDiv() {
    const containerEl = document.querySelector(".container");
    containerEl.style.width = "300px"
    let containerWidth = containerEl.style.width;
    let new_width_var = containerWidth.replace("px", "");
    const div_size = new_width_var / grid;
    for (let i = 1; i <= number_blocks; i++) {
        let div = document.createElement("div");
        div.style.width = div_size + "px";
        div.style.height = div_size + "px";
        div.style.border = "1px solid gray"
        div.className = "box"
        if (div) {
            console.log("exists")
        } else {
            console.log('not loaded')
        }
        
        containerEl.appendChild(div);
    }
}

createDiv();
