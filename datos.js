export async function armaInformacionMensual(){
    let hoy = new Date();
    let mes = hoy.getMonth() + 1;
    let año = 2022;
    let dia = 0;

    let meses = [];

    for (let ind = 1; ind < 7; ind ++) {
        if(mes - 1 === 0){
            mes = 13;
            año = año - 1;
        }
        mes = mes - 1;
        if (mes < 10){
            mes = "0" + mes;
        }
        mes = mes.toString();
        if (mes === '01' || mes === '03' || mes === '05' || mes === '07' || mes === '08' || mes === '10' || mes === '12'){
            dia = 31;
        }else{
            if(mes === '02' ){
                dia = 28;
            }else{
                dia = 30;
            }
        }
        meses.push(`${año}-${mes}-${dia}`);
    }

    const datosMensuales = [];

    let armaUrl = "";

    for (const ind in meses) {
        const fecha = meses[ind];
        let primeraParte = "http://api.exchangeratesapi.io/v1/";
        let segundaParte = fecha;
        let terceraParte = "?access_key=e9417728d6311ade2700ed388aa95239&base=EUR&symbols=CAD,EUR,USD,MXN";
        armaUrl = `${primeraParte}${segundaParte}${terceraParte}`;

        await fetch(armaUrl)
        .then(function(respuesta){
            return respuesta.json();
        })
        .then((listas) => {
            const {date, rates: {CAD, USD, MXN}} = listas
            let armaObjeto = {date: date, CAD: CAD, USD: USD, MXN: MXN}
            datosMensuales.push(armaObjeto);
        });
    }

    return datosMensuales;
}