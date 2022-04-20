
const ESPACIO = (" ");
const UVA = 18 / 100;
const Especial = 36 / 100;
const IUDU = 50 / 100;
const Santander = 56 / 100;

function bancos() {
    let dinero = parseInt(document.getElementById("dinero_a_prestar").value);
    let cuotas = parseInt(document.getElementById("cantidad_de_cuotas").value);
    let bancosSeleccion = document.getElementById("bancosSeleccion");
    if (bancosSeleccion = UVA) {
        let cuotasMenuales = dinero / cuotas;
        let intereses = cuotasMenuales * UVA;
        let finalPorMes = cuotasMenuales + intereses
        alert(` ${finalPorMes} por mes`);
    }
    else if (bancosSeleccion = Especial) {
        let cuotasMenuales = dinero / cuotas;
        let intereses = cuotasMenuales * Especial;
        let finalPorMes = cuotasMenuales + intereses
        alert(` ${finalPorMes} por mes`);
    }
    else if (bancosSeleccion = IUDU) {
        let cuotasMenuales = dinero / cuotas;
        let intereses = cuotasMenuales * IUDU;
        let finalPorMes = cuotasMenuales + intereses
        alert(` ${finalPorMes} por mes`);
    }
    else if (bancosSeleccion = Santander) {
        let cuotasMenuales = dinero / cuotas;
        let intereses = cuotasMenuales * Santander;
        let finalPorMes = cuotasMenuales + intereses
        alert(` ${finalPorMes} por mes`);
    }
    else {
        alert("no esta funcionado bien");
    }
}