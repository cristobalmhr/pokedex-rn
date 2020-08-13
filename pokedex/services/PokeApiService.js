import {urlPokeApi} from './../utils/DataServices';
import axios from 'axios';

/**
 * @description - Recuperar lista de pokemones
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param limit - Cantidad de elementos a recuperar
 * @param offset - Punto de inicio a partir de donde se recuperan los pokemon
 */
export const getPokemonList = (limit, offset) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${urlPokeApi}`,
      headers: {
        'content-type': 'application/json',
      },
      params: {
        limit: limit,
        offset: offset,
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log('Error: ', error.message);
        reject(error.message);
      });
  });
};
