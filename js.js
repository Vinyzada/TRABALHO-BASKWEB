
function calculo() {
    let valorA = Number(document.getElementById("valorA").value);
    let valorB = Number(document.getElementById("valorB").value);
    let valorC = Number(document.getElementById("valorC").value);

    let delta = valorB * valorB - 4 * valorA * valorC;

    if (delta >= 0) {
        let resultado1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
        let resultado2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
        document.getElementById("resultado").innerHTML = `x1 = ${resultado1} <br> x2 = ${resultado2}`;
    } else {
        document.getElementById("resultado").innerHTML = "A equação não possui raízes reais.";
    }
}

function limpar(){
    document.getElementById("valorA").value = "";
    document.getElementById("valorB").value = "";
    document.getElementById("valorC").value = "";
    document.getElementById("resultado").innerHTML = "";
}