export async function armaInformacionAnual(){
    let hoy = new Date();
    let año = hoy.getFullYear();
    let mes = 12;
    let dia = 31;

    let años = [];

    for (let ind = 1; ind < 7; ind ++) {
        año = año - 1;
        años.push(`${año}-${mes}-${dia}`);
    }

    const datosAnuales = [];

    let armaUrl = "";

    for (const ind in años) {
        const fecha = años[ind];
        let primeraParte = "http://api.exchangeratesapi.io/v1/";
        let segundaParte = fecha;
        let terceraParte = "?access_key=e9417728d6311ade2700ed388aa95239&base=EUR&symbols=CAD,EUR,USD,MXN";
        armaUrl = `${primeraParte}${segundaParte}${terceraParte}`;

        // let respuesta = await fetch(armaUrl);
        // let listas = respuesta.json();
        // const {date, rates: {CAD, USD, MXN}} = listas
        // let armaObjeto = {date: date, CAD: CAD, USD: USD, MXN: MXN}
        // datosAnuales.push(armaObjeto);
        
        await fetch(armaUrl)
        .then(function(respuesta){
            return respuesta.json();
        })
        .then((listas) => {
            const {date, rates: {CAD, USD, MXN}} = listas
            let armaObjeto = {date: date, CAD: CAD, USD: USD, MXN: MXN}
            datosAnuales.push(armaObjeto);
        });
    }

    return datosAnuales;
}

