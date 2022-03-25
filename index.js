import {armaInformacionMensual} from './datos.js'
import {armaInformacionAnual} from './datos.js'

// let datosMensual = 
// [	
//     {
//         "date": "2021-09-30", "CAD": 1.468354, "EUR": 1, "USD": 1.157414, "MXN": 23.877914
//     },
//     {
//         "date": "2021-10-31", "CAD": 1.431255, "EUR": 1, "USD": 1.155809, "MXN": 23.758456
//     },
//     {
//         "date": "2021-11-30", "CAD": 1.447805, "EUR": 1, "USD": 1.133138, "MXN": 24.288132 
//     },
//     {
//         "date": "2021-12-31", "CAD": 1.437255, "EUR": 1, "USD": 1.137145, "MXN": 23.308415
//     },
//     {
//         "date": "2022-01-31", "CAD": 1.427889, "EUR": 1, "USD": 1.122952, "MXN": 23.176833
//     },
//     {
//         "date": "2022-02-28", "CAD": 1.420689, "EUR": 1, "USD": 1.121554, "MXN": 22.963428
//     }
// ];

const monedas = ["CAD", "USD", "MXN"];
const leyendas = ['Dólar Canadiense', 'Dólar Estadounidense', 'Pesos Mexicano'];
const relleno = ['blue', 'red', 'green'];
let grafico;

const muestraGrafica = function( idGrafica, leyenda, fechas, datos, color )
{
    const ctx = document.getElementById(idGrafica).getContext('2d');
    
    Chart.defaults.font.family = "Teko";
    Chart.defaults.font.size = 12;
    Chart.defaults.color = "black";
    Chart.defaults.font.weight = "bold";

    grafico = new Chart(ctx, {
    type: 'line',
    data: { labels: fechas,
            datasets: [ { label: leyenda, data: datos, backgroundColor: color, borderColor: color, borderWidth: 3, tension: 0.3 } ] },
    options: { scales: { y: { beginAtZero: false } }, title: { display: true, text: 'Periodo Últimos 6 meses', position: 'top'}, fill: false },                   
    });
};

// const ImportaDatos = function(MonedasMensual){   // Quitar comentario si se usa el arreglo manual
const ImportaDatos = async function()                     // Comentar si se usa el arreglo manual
{                    
    console.log("2. Entré a Importar Datos");
    let idGrafica = "";
    let idBusqueda = "";
    let leyenda = "";
    let fechas = [];
    let datos = [];
    let color = "";

    console.log("3. Se llama a Armar Información Mensual");     // Comentar si se usa el arreglo manual
    let MonedasMensual = await armaInformacionMensual();              // Comentar si se usa el arreglo manual
    console.log("11. Regresé de Armar Información Mensual");    // Comentar  si se usa el arreglo manual
    console.log("MonedasMensual", MonedasMensual)
    for (const moneda of monedas) {
        console.log("monedas", monedas)
        idGrafica = moneda + "-MM";
        idBusqueda = monedas[moneda];
        leyenda = leyendas[moneda];
        color = relleno[moneda];

        console.log("12. Datos para crear el gráfico");
        console.log(idGrafica);
        console.log(idBusqueda);
        console.log(leyenda);
        console.log(color);        
        console.log(MonedasMensual);
        // const listas = {...MonedasMensual};
        console.log("13. Datos que se recibieron del arreglo MonedaMensual");
        console.log(MonedasMensual.length);
        console.log(MonedasMensual);
        console.log(typeof(MonedasMensual));        

        for (const mon in MonedasMensual) {
            console.log("14. Datos que se leen del arreglo recibido MonedasMensual");
            console.log(MonedasMensual[mon].date);
            console.log(MonedasMensual[mon][idBusqueda]);

            fechas.push(MonedasMensual[mon].date);
            datos.push(MonedasMensual[mon][idBusqueda]);

            console.log("15. Información cargada en los arreglos de Fechas y datos");
            console.log(fechas);
            console.log(datos);
        };
        
        console.log("16. Se manda crear gráfica" + idGrafica);
        muestraGrafica( idGrafica, leyenda, fechas, datos, color ); 
        console.log("17. Regresa de crear gráfica" + idGrafica);
        fechas = [];
        datos = [];
        console.log("18. Se termina un ciclo de Importación de Datos");
    };

    // let MonedasAnual = armaInformacionAnual();
    // for (const moneda in monedas) {
    //     idGrafica = monedas[moneda] + "-YY";
    //     idBusqueda = monedas[moneda];
    //     leyenda = leyendas[moneda];
    //     color = relleno[moneda];

    //     const listas = MonedasAnual;
    //     console.log(listas);

    //     for (const mon in listas) {
    //         fechas.push(listas[mon].date);
    //         datos.push(listas[mon].idBusqueda);
    //     };

    //     muestraGrafica( idGrafica, leyenda, fechas, datos, color ); 
    //     fechas = [];
    //     datos = [];
    // }
}

console.log("1. Se llama a Importar Datos");
ImportaDatos();                     // Comentar si se usa el arreglo manual
// ImportaDatos(datosMensual);      // Quitar comentario si se usa el arreglo manual