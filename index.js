import {armaInformacionMensual} from './datos.js'
import {armaInformacionAnual} from './datos2.js'

// let datosMensual = 
// [	
//     { "date": "2021-09-30", "CAD": 1.468354, "EUR": 1, "USD": 1.157414, "MXN": 23.877914 },
//     { "date": "2021-10-31", "CAD": 1.431255, "EUR": 1, "USD": 1.155809, "MXN": 23.758456 },
//     { "date": "2021-11-30", "CAD": 1.447805, "EUR": 1, "USD": 1.133138, "MXN": 24.288132 },
//     { "date": "2021-12-31", "CAD": 1.437255, "EUR": 1, "USD": 1.137145, "MXN": 23.308415 },
//     { "date": "2022-01-31", "CAD": 1.427889, "EUR": 1, "USD": 1.122952, "MXN": 23.176833 },
//     { "date": "2022-02-28", "CAD": 1.420689, "EUR": 1, "USD": 1.121554, "MXN": 22.963428 }
// ];
// let datosAnual = 
// [	
//     { "date": "2017-12-31", "CAD": 1.509119, "EUR": 1, "USD": 1.199908, "MXN": 23.574582 },
// 	{ "date": "2018-12-31", "CAD": 1.558834, "EUR": 1, "USD": 1.149155, "MXN": 22.579394 },
// 	{ "date": "2019-12-31", "CAD": 1.459094, "EUR": 1, "USD": 1.121991, "MXN": 21.241987 },
// 	{ "date": "2020-12-31", "CAD": 1.550361, "EUR": 1, "USD": 1.217875, "MXN": 24.217142 },
// 	{ "date": "2021-12-31", "CAD": 1.437255, "EUR": 1, "USD": 1.137145, "MXN": 23.308415 },
//     { "date": "2021-11-31", "CAD": 1.428854, "EUR": 1, "USD": 1.127341, "MXN": 23.208312 }
// ];

const monedas = ["CAD", "USD", "MXN"];
const leyendas = ['Dólar Canadiense', 'Dólar Estadounidense', 'Pesos Mexicano'];
const relleno = ['blue', 'red', 'green'];
let grafico;

// ****************   Se muestran las gráficas en el tablero   ****************

const muestraGrafica = function( idGrafica, leyenda, fechas, datos, color )
{
    const ctx = document.getElementById(idGrafica).getContext('2d');
    
    Chart.defaults.font.family = "sans-serif";
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

// ****************   Se getionan los datos para las gráficas mensuales y anuales   ****************

const ImportaDatos = async function()
{   
    let idGrafica = "";
    let idBusqueda = "";
    let leyenda = "";
    let fechas = [];
    let datos = [];
    let color = "";

    // ****************   Armado de las gráficas mensuales   ****************

    // ****************   Se invoca la función que trae los datos mensuales de la API  ****************

    let MonedasMensual = await armaInformacionMensual(); 

    for (const moneda in monedas) 
    {
        idGrafica = monedas[moneda] + "-MM";
        idBusqueda = monedas[moneda];
        leyenda = leyendas[moneda];
        color = relleno[moneda];     

        for (const mon in MonedasMensual) 
        {
            fechas.push(MonedasMensual[mon].date);
            datos.push(MonedasMensual[mon][idBusqueda]);
        };
        
        muestraGrafica( idGrafica, leyenda, fechas, datos, color ); 
        fechas = [];
        datos = [];
    };


    // ****************   Armado de las gráficas anuales   ****************

    // ****************   Se invoca la función que trae los datos anuales de la API   ****************

    let MonedasAnual = await armaInformacionAnual();

    for (const moneda in monedas) 
    {
        idGrafica = monedas[moneda] + "-YY";
        idBusqueda = monedas[moneda];
        leyenda = leyendas[moneda];
        color = relleno[moneda];

        for (const mon in MonedasAnual) 
        {
            fechas.push(MonedasAnual[mon].date);
            datos.push(MonedasAnual[mon][idBusqueda]);
        };

        muestraGrafica( idGrafica, leyenda, fechas, datos, color ); 
        fechas = [];
        datos = [];
    }
}

ImportaDatos();