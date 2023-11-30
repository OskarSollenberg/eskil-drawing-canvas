const canvasEl = document.querySelector("#canvas");
const context = canvasEl.getContext("2d");

let isDrawing = false;
let canDraw = true;

let seconds = 10;

// setInterval(function () {
//     if (seconds <= 0) {
//         canDraw = false;
//     } else {
//         seconds -= 1;

//         document.querySelector("#counter").textContent = seconds;
//     }
// }, 1000);

canvasEl.addEventListener("pointerdown", function (e) {
    isDrawing = true;

    const x = e.clientX - canvasEl.offsetLeft;
    const y = e.clientY - canvasEl.offsetTop;

    context.beginPath();
    context.moveTo(x, y);
});

canvasEl.addEventListener("pointermove", function (e) {
    if (canDraw && isDrawing) {
        const x = e.clientX - canvasEl.offsetLeft;
        const y = e.clientY - canvasEl.offsetTop;

        context.lineTo(x, y);
        context.stroke();
    }
});

canvasEl.addEventListener("pointerup", function () {
    isDrawing = false;
    context.stroke();
    context.closePath();
});

const resetBtn = document.querySelector("#resetButton");
resetBtn.addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

function saveImage() {
    // const canvas = {};
    localStorage.setItem("imgCanvas", canvasEl.toDataURL());

    // var dataURL = localStorage.getItem(canvasEl);

    const imgGallery = document.querySelector(".img__gallery");

    let img = document.createElement("img");
    img.src = localStorage.getItem("imgCanvas");
    imgGallery.append(img);
}

const button = document.querySelector("#button");

button.addEventListener("click", saveImage);
