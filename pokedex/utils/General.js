/**
 * @description - Colocar la primera letra de un String en mayuscula
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param string - Cadena a convertir
 */
export const fistLetterToUperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
