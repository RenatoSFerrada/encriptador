function encriptar(){
    limpiarMensaje();
    let transformations = {
        'a': "ai",
        'e': "enter",
        'i': "imes",
        'o': "ober",
        'u': "ufat"
    };
    let texto = document.getElementById("textoAEncriptar").value;
    texto = texto.toLowerCase();
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    texto = texto.replace(/[^a-z\s]/g, "");
    let textoCadena = texto.split('');
    for (let i = 0; i < textoCadena.length; i++) {
        let char = textoCadena[i];
        if (transformations[char]) {
            textoCadena[i] = transformations[char];
        }
    }
    let textoEncriptado = textoCadena.join('');
    document.getElementById("textoEncriptado").textContent = textoEncriptado;
}

function desencriptar(){
    limpiarMensaje();
    let transformations = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };
    let texto = document.getElementById("textoAEncriptar").value;
    for (let key in transformations) {
        texto = texto.replace(new RegExp(key, 'g'), transformations[key]);
    }
    document.getElementById("textoEncriptado").textContent = texto;
}

/* el metodo execCommand esta obsoleto es mejor utilizar la api del portapapeles
function copiar() {
    let texto = document.getElementById("textoEncriptado").innerText;
    let textarea = document.createElement("textarea");
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Texto copiado al portapapeles");
}*/

function copiar() {
    var texto = document.getElementById("textoEncriptado").innerText;
    navigator.clipboard.writeText(texto).catch(function(err) {
        console.error("Error al copiar el texto: ", err);
    });
    document.getElementById("textoEncriptado").textContent = "";
    document.querySelector(".copiado").innerHTML = "Copiado";
}

function limpiarMensaje() {
    document.querySelector(".copiado").innerHTML = "";
}