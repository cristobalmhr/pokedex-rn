import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, LogBox} from 'react-native';

//EXTERNAL
import PropTypes from 'prop-types';

//INTERNAL
import {
  getPokemonDetails,
  getPokemonSpeciesDetails,
  getEvolutionDetails,
} from './../services/PokeApiService';
import globalStyles from '../styles/globalStyles';
import {urlPokeresImages, fileTypePokeresImages} from './../utils/DataServices';
import BackButton from '../components/BackButton';
import ActivityIndicator from '../components/ActivityIndicator';
import AbilitiesList from '../components/AbilitiesList';
import PokemonDescription from '../components/PokemonDescription';
import StatsList from '../components/StatsList';
import EvolutionsList from '../components/EvolutionsList';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

/**
 * Pantalla para mostrar el detalle del pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param navigation - Navegacion de React Navigation
 */
const DetailsScreen = ({navigation, route}) => {
  const {idPokemon, name} = route.params;

  const [abilities, setAbilities] = useState([]);
  const [loadingAbilities, setLoadingAbilities] = useState(true);

  const [stats, setStats] = useState([]);
  const [loadingStats, setLoadingStats] = useState(true);

  const [description, setDescription] = useState('');
  const [loadingDescription, setLoadingDescription] = useState(true);

  const [evolutions, setEvolutions] = useState([]);
  const [loadingEvolutions, setLoadingEvolutions] = useState(true);

  useEffect(() => {
    callGetPokemonDetails();
    callGetPokemonSpeciesDetails();
  }, []);

  const callGetPokemonDetails = async () => {
    try {
      const pokemon = await getPokemonDetails(idPokemon);

      const abilitiesResponse = pokemon.abilities;
      setAbilities(abilitiesResponse);
      setLoadingAbilities(false);

      const statsResponse = pokemon.stats;
      setStats(statsResponse);
      setLoadingStats(false);
    } catch (error) {
      setLoadingAbilities(false);
      setLoadingStats(false);
      console.log('error: ', error.message);
    }
  };

  const callGetPokemonSpeciesDetails = async () => {
    try {
      const pokemon = await getPokemonSpeciesDetails(idPokemon);

      const descriptionResponse = pokemon.flavor_text_entries[0].flavor_text
        .replace('\n', ' ')
        .replace('\f', ' ');

      setDescription(descriptionResponse);
      setLoadingDescription(false);

      callGetEvolutionDetails(pokemon.evolution_chain.url);
    } catch (error) {
      setLoadingDescription(false);
      console.log('error: ', error.message);
    }
  };

  const callGetEvolutionDetails = async (url) => {
    try {
      const evolutionDetails = await getEvolutionDetails(url);
      const evolutionsResponse = [];

      let responseEvolution = evolutionDetails.chain;

      let pokemonId = await getPokemonId(responseEvolution.species.name);

      evolutionsResponse.push({
        name: responseEvolution.species.name,
        id: pokemonId,
        url: `${urlPokeresImages}${pokemonId}${fileTypePokeresImages}`,
      });

      while (responseEvolution.evolves_to.length > 0) {
        pokemonId = await getPokemonId(
          responseEvolution.evolves_to[0].species.name,
        );

        evolutionsResponse.push({
          name: responseEvolution.evolves_to[0].species.name,
          id: pokemonId,
          url: `${urlPokeresImages}${pokemonId}${fileTypePokeresImages}`,
        });
        const arregloEvoluciones = responseEvolution.evolves_to[0].evolves_to;
        responseEvolution = {evolves_to: arregloEvoluciones};
      }

      setEvolutions(evolutionsResponse);
      setLoadingEvolutions(false);
    } catch (error) {
      setLoadingEvolutions(false);
      console.log('error: ', error.message);
    }
  };

  const getPokemonId = async (pokemonName) => {
    try {
      const pokemonResponse = await getPokemonSpeciesDetails(pokemonName);
      const idPokemonResponse = pokemonResponse.pokedex_numbers[0].entry_number;
      return idPokemonResponse;
    } catch (error) {
      console.log('error: ', error.message);
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.containerPokemonTitle}>
        <BackButton navigation={navigation} />
        <Text
          style={globalStyles.pokemonNumber}>{`#${idPokemon
          .toString()
          .padStart(3, '0')}`}</Text>
        <View style={globalStyles.widthFakeItemHeader} />
      </View>
      <ScrollView>
        <PokemonDescription
          idPokemon={idPokemon}
          name={name}
          loadingDescription={loadingDescription}
          description={description}
        />
        <View style={globalStyles.containerPokemonDetails}>
          <Text style={[globalStyles.subtitles, globalStyles.marginLeftMedium]}>
            Abilities
          </Text>
          {!loadingAbilities ? (
            <AbilitiesList abilities={abilities} />
          ) : (
            <ActivityIndicator />
          )}
        </View>

        <View style={globalStyles.containerPokemonDetails}>
          <Text style={[globalStyles.subtitles, globalStyles.marginLeftMedium]}>
            Stats
          </Text>
          {!loadingStats ? <StatsList stats={stats} /> : <ActivityIndicator />}
        </View>
        <View
          style={[
            globalStyles.containerPokemonDetails,
            globalStyles.marginBottomSmall,
          ]}>
          <Text style={[globalStyles.subtitles, globalStyles.marginLeftMedium]}>
            Evolutions
          </Text>
          {!loadingEvolutions ? (
            <EvolutionsList
              evolutions={evolutions}
              navigation={navigation}
              idPokemon={idPokemon}
            />
          ) : (
            <ActivityIndicator />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

DetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DetailsScreen;
