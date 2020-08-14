import {urlPokeApi, urlPokeApiSpecies} from './../utils/DataServices';
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

/**
 * @description - Recuperar detalles de un pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param idPokemon - Identificador del pokemon a recuperar
 */
export const getPokemonDetails = (idPokemon) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${urlPokeApi}/${idPokemon}`,
      headers: {
        'content-type': 'application/json',
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

/**
 * @description - Recuperar detalles de un pokemon de especie
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param idPokemon - Identificador del pokemon a recuperar
 */
export const getPokemonSpeciesDetails = (idPokemon) => {
  console.log('idPokemon API', idPokemon);

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${urlPokeApiSpecies}/${idPokemon}`,
      headers: {
        'content-type': 'application/json',
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

/**
 * @description - Recuperar la cadena evolutiva de un pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param idPokemon - Identificador del pokemon a recuperar
 */
export const getEvolutionDetails = (url) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: url,
      headers: {
        'content-type': 'application/json',
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
