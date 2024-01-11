function getRandomColor() {
    color = Math.floor(Math.random()*16777215).toString(16);
    return color;
}

function changeMode(backgroundEl)
{
    if (backgroundEl.style.backgroundColor == "rgb(255, 255, 255)")
    {
        backgroundEl.style.backgroundColor = "#000000";
        backgroundEl.style.color = "#ffffff";
    }
    else
    {
        backgroundEl.style.backgroundColor = "#ffffff";
        backgroundEl.style.color = "#000000";
    }
}

let randomColorText = document.querySelector("#textWithSomeColor");

randomColorText.addEventListener("mouseover", (event) => {
    event.target.style.color = "#" + getRandomColor();
});

let bgState = document.querySelector("body");
let changeModeBtn = document.querySelector("#changeState")
changeModeBtn.addEventListener("click", () => changeMode(bgState));

let lamp = document.querySelector("#lampa");
lamp.addEventListener("click", (event) => {
    if (lamp.alt == "lampOn")
    {
        lamp.src = "lampOff.svg"
        lamp.alt = "lampOff"
    }
    else{
        lamp.src = "lampOn.svg"
        lamp.alt = "lampOn"
    }
});

document.querySelector("#hideBody").addEventListener("click", () => {
    bgState.style.display = "none";
});