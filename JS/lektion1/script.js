let textToChange = document.querySelector('.mainTitle')
textToChange.innerHTML = "I changed you"

let mha = document.querySelector('h2')
mha.innerHTML = "Ändrade mha taggen"

let blockEl = document.querySelector('#myId')
let pToAppend = document.createElement("p")
pToAppend.innerHTML = "Ett nytt barn har fötts"
blockEl.appendChild(pToAppend)

let headerToChange = document.querySelector("#barn")
headerToChange.innerHTML += " hej"

mha.remove();

blockEl.removeChild(headerToChange)