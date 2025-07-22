const {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
} = require('./app.js');

// fromEuroToDollar
test("One euro should be 1.07 dollars", () => {
    const result = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(result).toBe(expected);
});

// ✅ Prueba de fromDollarToYen
test("One dollar should be approximately 146.26 yenes", () => {
    const result = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(result).toBeCloseTo(expected, 2); // Usamos toBeCloseTo por decimales
});

// ✅ Prueba de fromYenToPound
test("1000 yenes should be approximately 5.56 pounds", () => {
    const result = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(result).toBeCloseTo(expected, 2); // Precisión con decimales
});
