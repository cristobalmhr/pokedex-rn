/**
 * @description Constantes para consumo de APIs
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 */

const endPointPokeApi = 'https://pokeapi.co/api/v2';
const uriPokemon = '/pokemon';
const fileTypePokeresImages = '.png';

const urlPokeApi = `${endPointPokeApi}${uriPokemon}`;
const urlPokeresImages = 'https://pokeres.bastionbot.org/images/pokemon/';

const dataServices = {
  urlPokeApi,
  urlPokeresImages,
  fileTypePokeresImages,
};

module.exports = dataServices;
