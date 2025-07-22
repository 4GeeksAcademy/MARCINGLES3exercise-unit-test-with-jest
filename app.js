// Tasas de conversión desde el Euro
const oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// Función de conversión Euro -> Dólar (ya estaba hecha)
const fromEuroToDollar = function(euros) {
    return euros * oneEuroIs.USD;
};

// Nueva función: Dólar -> Yen
const fromDollarToYen = function(dollars) {
    const euros = dollars / oneEuroIs.USD;      // Convertimos a euros
    return euros * oneEuroIs.JPY;               // De euros a yenes
};

// Nueva función: Yen -> Libra Esterlina
const fromYenToPound = function(yens) {
    const euros = yens / oneEuroIs.JPY;         // Convertimos a euros
    return euros * oneEuroIs.GBP;               // De euros a libras
};

// Puedes dejar esta para pruebas opcionales
const sum = (a, b) => a + b;

// Exportamos todas
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
