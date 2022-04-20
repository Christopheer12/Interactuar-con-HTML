
const ESPACIO = (" ");
const UVA = 18 / 100;
const Especial = 36 / 100;
const IUDU = 50 / 100;
const Santander = 55.5 / 100;

function bancos() {
    let dinero = parseInt(document.getElementById("dinero_a_prestar").value);
    let cuotas = parseInt(document.getElementById("cantidad_de_cuotas").value);
    let bancosSeleccion = document.getElementById("bancosSeleccion").value;
    switch (bancosSeleccion) {
        case "UVA":
            let cuotasMenualesUva = dinero / cuotas;
            let interesesUva = cuotasMenualesUva * UVA;
            let finalPorMesUva = cuotasMenualesUva + interesesUva
            alert(` tus cuotas UVA son de ${finalPorMesUva} por mes, recuerda que al ser una taza uva esta sujeta a inflacion`);
            break;
        case "Especial":
            let cuotasMenualesEspecial = dinero / cuotas;
            let interesesEspecial = cuotasMenualesEspecial * Especial;
            let finalPorMesEspecial = cuotasMenualesEspecial + interesesEspecial
            alert(`${finalPorMesEspecial}`);
            break;
        case "IUDU":
            let cuotasMenualesIUDU = dinero / cuotas;
            let interesesIUDU = cuotasMenualesIUDU * IUDU;
            let finalPorMesIUDU = cuotasMenualesIUDU + interesesIUDU
            alert(`${finalPorMesIUDU}`);
            break;
        case "Santander":
            let cuotasMenualesSantander = dinero / cuotas;
            let interesesSantander = cuotasMenualesSantander * Santander;
            let finalPorMesSantander = cuotasMenualesSantander + interesesSantander
            alert(`${finalPorMesSantander}`);
            break;

    }
}


/*  if (bancosSeleccion = UVA) {
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
 } */
