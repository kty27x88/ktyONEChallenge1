function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const result = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('resultText').innerText = result;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const result = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('resultText').innerText = result;
}
