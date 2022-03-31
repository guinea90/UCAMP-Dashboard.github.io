# UCAMP-Dashboard.github.io
En este proyecto se trabajó con la librería de gráficas "Chart.js".
Se hizo una conexión a través de la API https://exchangeratesapi.io/, a una base de datos controlada por "Exchange Rates API".
De la API se extraen los tipos de cambio tomando como base el EURO, de los últimos seis meses a partir del mes actual y de los últimos 5 años a partir del año actual, de las monedas: dólar canadiense (CAD), dólar estadounidense (USD) y peso mexicano (MXN).
Mediante "fetch" se consumen los datos de la API.
Los datos extraídos se muestran en una gráfica por moneda y por período.
Se aplican los conceptos de async y await en JavaScript.
Se modularizaron las principales funciones, como la extracción de datos.
