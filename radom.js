let button = document.getElementById('random')
let num = document.getElementById("random_num")

button.addEventListener("click", row)


function row(){
    let random = Math.floor(Math.random() * num.value) + 1;

    document.getElementById("output").innerHTML = random;
}
