export function armaInformacionMensual(){
    console.log("4. Entré a Armar Información Mensual")
    let hoy = new Date();
    let mes = hoy.getMonth() + 1;

    let meses = [];
    let años = [];
    let año = 2022;
    let dia = 0;

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

    console.log("5. Se inicializa arreglo datosMensuales");
    const datosMensuales = [];
    console.log(datosMensuales);

    let armaUrl = "";

    for (const ind in meses) {
        const fecha = meses[ind];
        let primeraParte = "http://api.exchangeratesapi.io/v1/";
        let segundaParte = fecha;
        let terceraParte = "?access_key=2df3a2552a79bebc54a8a73aba2a7680&base=EUR&symbols=CAD,EUR,USD,MXN";
        armaUrl = `${primeraParte}${segundaParte}${terceraParte}`;

        console.log("6. Entré al Fetch");
        // fetch(armaUrl)
        // .then(function(respuesta){
        // return respuesta.json();
        // })
        // .then((listas) => {
        //     console.log(listas);
        //     const {date, rates: {CAD, USD, MXN}} = listas
        //     console.log("7. Valores de los datos destructurados");
        //     console.log(date, CAD, USD, MXN);
        //     let armaObjeto = {date: date, CAD: CAD, USD: USD, MXN: MXN}
        //     console.log("7. Valor de armaObjeto");
        //     console.log(armaObjeto);
        //     datosMensuales.push(armaObjeto);
        //     console.log("8. Valores del push en datosMensuales");
        //     console.log(datosMensuales);
        // });
    }

    console.log("9. Arreglo y tipo de información mensual final");
    console.log(datosMensuales);
    console.log(typeof(datosMensuales));
    console.log("10. Salí de Armar Información Mensual");

    return datosMensuales;
}

export function armaInformacionAnual(){
    // let hoy = new Date();
    // let año = hoy.getFullYear();

    // let años = [];
    // let mes = 12;
    // let dia = 31;

    // for (let ind = 1; ind < 7; ind ++) {
    //     año = año - 1;
    //     años.push(`${año}-${mes}-${dia}`);
    // }

    // const datosAnuales = [];
    // let armaUrl = "";

    // for (const ind in años) {
    //     const fecha = años[ind];
    //     let primeraParte = "http://api.exchangeratesapi.io/v1/";
    //     let segundaParte = fecha;
    //     let terceraParte = "?access_key=4f54334ca24a596dcc5c14290d1534ae&base=EUR&symbols=CAD,EUR,USD,MXN"
    //     armaUrl = `${primeraParte}${segundaParte}${terceraParte}`;

    //     fetch(armaUrl)
    //     .then(function(respuesta){
    //     return respuesta.json();
    //     })
    //     .then((listas) => {
    //         datosAnuales.push(listas);           
    //     });
    // }

    // return datosAnuales;
}

