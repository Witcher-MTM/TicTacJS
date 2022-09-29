const info = document.getElementById("Info");
var choice = 'X';
var isWon = false;
const plates = document.getElementsByClassName('area');
Init()
function Init() {
    const grid = document.getElementById('TicTacToe');
    for (let i = 0; i < 9; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "area";
        newDiv.onclick = (e) => Click(e);
        grid.appendChild(newDiv);
    }
}

function Click(event) {
    if (isWon !== true) {
        if (event.target.innerHTML == '') {
            if (choice == 'X') {
                event.target.innerHTML = 'X';   
                console.log("Clicked! - X");
            }
            else {
                event.target.innerHTML = 'O';
                console.log("Clicked! - O");
            }
            choice = choice == 'X' ? 'O' : 'X';
            info.innerHTML = choice+":Turn";
        }

        else {
            alert("You cant stay here!");
        }
        Check();
    }
}

function Check() {
    for (let i = 0; i < 3; i++) {
        if (plates[i].innerHTML == plates[i + 1].innerHTML && plates[i + 2].innerHTML == plates[i].innerHTML && plates[i].innerHTML != '') {
            plates[i].style.backgroundColor = 'green';
            plates[i + 1].style.backgroundColor = 'green';
            plates[i + 2].style.backgroundColor = 'green';
            isWon = true;
            info.innerHTML= plates[i].innerHTML+":Won!"
        }
        if (plates[i].innerHTML == plates[i + 4].innerHTML && plates[i + 8].innerHTML == plates[i].innerHTML && plates[i].innerHTML != '') {
            plates[i].style.backgroundColor = 'green';
            plates[i + 4].style.backgroundColor = 'green';
            plates[i + 8].style.backgroundColor = 'green';
            isWon = true;
            info.innerHTML= plates[i].innerHTML+":Won!"
        }
        if (plates[i].innerHTML == plates[i + 3].innerHTML && plates[i + 6].innerHTML == plates[i].innerHTML && plates[i].innerHTML != '') {
            plates[i].style.backgroundColor = 'green';
            plates[i + 3].style.backgroundColor = 'green';
            plates[i + 6].style.backgroundColor = 'green';
            isWon = true;
            info.innerHTML= plates[i].innerHTML+":Won!"
        }
        if (plates[i + 2].innerHTML == plates[i + 4].innerHTML && plates[i + 6].innerHTML == plates[i + 2].innerHTML && plates[i + 2].innerHTML != '') {
            plates[i + 2].style.backgroundColor = 'green';
            plates[i + 4].style.backgroundColor = 'green';
            plates[i + 6].style.backgroundColor = 'green';
            isWon = true;
            info.innerHTML= plates[i+2].innerHTML+":Won!"
        }
    }
}