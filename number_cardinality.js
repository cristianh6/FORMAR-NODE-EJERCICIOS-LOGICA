/* Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:

*
Devuelve la cadena zero si el número termina en 0
Devuelve la cadena five si el número termina en 5
Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas.

Ejemplos:

Input: 100
Output: zero

Input: 88
Output: even

Input: 155
Output: five

Input: 99
Output: odd */

const number_cardinality = (inputValue) => {
  if (
    !inputValue ||
    typeof inputValue !== "number" ||
    !Number.isInteger(inputValue)
  ) {
    console.log("Debe ingresar un número entero.");
    return;
  } else {
    let newValue = inputValue.toString();
    let response;
    switch (true) {
      case newValue.endsWith("0"):
        response = console.log("zero");
        break;
      case newValue.endsWith("5"):
        response = console.log("five");
        break;
      case newValue % 2 === 0 && !newValue.endsWith("0"):
        response = console.log("even");
        break;
      case newValue.endsWith("0"):
        response = console.log("odd");
        break;
      default:
        break;
    }
    return response;
  }
};

module.exports = number_cardinality;
