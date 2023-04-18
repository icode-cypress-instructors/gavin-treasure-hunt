function saveAnswer(name) {
    let input = document.getElementById("inputID").value;
    window.localStorage.setItem(name, input);
}