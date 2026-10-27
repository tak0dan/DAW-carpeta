let letters = "abcdefghijklmnopqrstuvwxyz";

// random shift between 1 and 25
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Caesar shift (generated once per click)
function Cesar(texto, shift) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i].toLowerCase();
        let pos = letters.indexOf(char);

        if (pos !== -1) {
            let nuevaPos = (pos + shift) % letters.length;
            resultado += letters[nuevaPos];
        } else {
            resultado += char; // keep spaces, symbols, etc.
        }
    }

    return resultado;
}

// Button click
document.getElementById("execute").onclick = function () {
    const input = document.getElementById("text_cifrado").value;
    const output = document.getElementById("result");

    let shift = numeroAleatorio(1, letters.length - 1);

    output.value = Cesar(input, shift);
};