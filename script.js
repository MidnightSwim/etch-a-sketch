const container = document.querySelector(".container");
const button = document.querySelector("button");

for (let index = 0; index <= 256; index++) {
    const grid = document.createElement("div");
    grid.className = "box";
    setWidth(16);
    container.appendChild(grid);
    console.log("pouet");
}

draw();

button.addEventListener("click", () => {
    let choice = prompt("Please, enter the number of squares per side for a new grid");
    choice = parseInt(choice);
    if ((typeof(choice) === "number") && (choice <= 100)) {
        let containerDestroy = document.querySelectorAll(".box")
        containerDestroy.forEach(e => e.remove());
        for (let index = 0; index <= (choice*choice); index++) {
            const grid = document.createElement("div");
            grid.className = "box";
            setWidth(choice);
            container.appendChild(grid);
            console.log("pouet");
            draw();
        }
    } else {
        alert("Number must be 100 max");
    }
})

function draw() {
    let canvas = document.querySelectorAll(".box");
    canvas.forEach(box => {
        box.addEventListener("mouseover", function () {
            console.log("working?");
            box.classList.add("hovered");
        });
    });
}

function setWidth(sqNumber) {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.width = ((960 / sqNumber) - 2) + "px";
        box.style.height = ((960 / sqNumber) - 2) + "px";
    })
}

// function setBg(box) {
//     box.classList.add("hovered");
//     const hover = document.querySelector(".hovered");
//     hover.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//   }