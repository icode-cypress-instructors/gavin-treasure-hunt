const map = document.querySelector(".map");
const ship = document.querySelector(".boat");
const coin = document.querySelector(".coin")
const mapData = document.getElementById("mapData");
const treasure = document.getElementById("treasure");

const map_answer = document.getElementById("map-answer");
const boat_answer = document.getElementById("boat-answer");
const coin_answer = document.getElementById("coin-answer");

function saveAnswer(name) {
    let input = document.getElementById("inputID").value;
    window.localStorage.setItem(name, input);
}

// refresh answer boxes
map_answer.value = window.localStorage.getItem('mapAnswer')
boat_answer.value = window.localStorage.getItem('boatAnswer')
coin_answer.value = window.localStorage.getItem('coinAnswer')

if (treasure && map_answer.value == 53*3 && boat_answer.value == 6/2 && coin_answer.value == 163+31) {
    treasure.removeAttribute('hidden');
}