


const ESPACIO = (" ");
const TAZA_UVA = 18 / 100;
const TAZA_ESPECIAL = 36 / 100;
const TAZA_MILA = 50 / 100;
const TAZA_SANTANDER = 55.5 / 100;

switch (banco) {
    case "UVA": TAZA_UVA;
        break;
    case "Especial": TAZA_ESPECIAL;
        break;
    case "IUDU": TAZA_MILA;
        break;
    case "Santander": TAZA_SANTANDER;
        break;
    default:
        alert("seleccione una taza");
        break;
}


function financiamiento() {
    let dinero = parseInt(document.getElementById("dinero_a_prestar").value);
    let cuotas = parseInt(document.getElementById("cantidad_de_cuotas").value);
    /* let prestador = document.getElementsByClassName */
    let cuotas_menuales = dinero / cuotas;
    let intereses = cuotas_menuales * TAZA_ESPECIAL;
    let final = intereses;
    alert(final);
}
financiamiento();
