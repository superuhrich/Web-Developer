inputscore.value = 5;

function p1click() {

    if (p1score.innerHTML != topscore.innerHTML) {
        p1score.innerHTML = Number(p1score.innerHTML) + 1;
    }

    if (p1score.innerHTML == topscore.innerHTML) {
        p1score.style.color = "green";
        document.getElementById("p1button").disabled = true;
        document.getElementById("p2button").disabled = true;
        
    }   
}

function p2click() {

    if (p2score.innerHTML != topscore.innerHTML) {
        p2score.innerHTML = Number(p2score.innerHTML) + 1;
    }

    if (p2score.innerHTML == topscore.innerHTML) {
        p2score.style.color = "green";
        document.getElementById("p1button").disabled = true;
        document.getElementById("p2button").disabled = true;
    }   
}

function resetclick(){
    document.getElementById("p1button").disabled = false;
    document.getElementById("p2button").disabled = false;
    p2score.style.color = p1score.style.color = "black";
    topscoreclick();

    p2score.innerHTML = p1score.innerHTML = 0;
}

function topscoreclick(){
    topscore.innerHTML = inputscore.value;
}
