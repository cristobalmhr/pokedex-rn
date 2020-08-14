import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView, FlatList} from 'react-native';

//EXTERNAL
import PropTypes from 'prop-types';
import {widthPercentageToDP} from 'react-native-responsive-screen';

//INTERNAL
import {
  getPokemonDetails,
  getPokemonSpeciesDetails,
  getEvolutionDetails,
} from './../services/PokeApiService';
import globalStyles from '../styles/globalStyles';
import {urlPokeresImages, fileTypePokeresImages} from './../utils/DataServices';
import BackButton from '../components/BackButton';
import {fistLetterToUperCase} from '../utils/General';
import ActivityIndicator from '../components/ActivityIndicator';

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
      console.log('Habilidades: ', abilitiesResponse);
      setAbilities(abilitiesResponse);
      setLoadingAbilities(false);

      const statsResponse = pokemon.stats;
      console.log('Estadisticas: ', statsResponse);
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
      console.log(
        'Detalles Pokemon: ',
        pokemon.flavor_text_entries[0].flavor_text,
      );

      const descriptionResponse = pokemon.flavor_text_entries[0].flavor_text
        .replace('\n', ' ')
        .replace('\f', ' ');

      console.log('descriptionResponse ', descriptionResponse);
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

      evolutionsResponse.push(responseEvolution.species.name);

      while (responseEvolution.evolves_to.length > 0) {
        evolutionsResponse.push(responseEvolution.evolves_to[0].species.name);
        const arregloEvoluciones = responseEvolution.evolves_to[0].evolves_to;
        responseEvolution = {evolves_to: arregloEvoluciones};
      }

      setEvolutions(evolutionsResponse);
      setLoadingEvolutions(false);
      console.log('evolutionsResponse: ', evolutionsResponse);
    } catch (error) {
      setLoadingEvolutions(false);
      console.log('error: ', error.message);
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.containerPokemonTitle}>
        <BackButton navigation={navigation} />
        <Text style={globalStyles.pokemonNumber}>{`#${(idPokemon + 1)
          .toString()
          .padStart(3, '0')}`}</Text>
        <View style={globalStyles.widthFakeItemHeader} />
      </View>
      <ScrollView>
        <View
          style={[
            globalStyles.containerDetailsPokemon,
            globalStyles.containerPokemonDetails,
          ]}>
          <Image
            resizeMode={'cover'}
            style={{
              width: widthPercentageToDP('35%'),
              height: widthPercentageToDP('35%'),
            }}
            source={{
              uri: `${urlPokeresImages}${idPokemon}${fileTypePokeresImages}`,
            }}
          />
          <View>
            <Text style={[globalStyles.titles, globalStyles.marginLeftMedium]}>
              {fistLetterToUperCase(name)}
            </Text>
            {!loadingDescription ? (
              <Text style={globalStyles.descriptionPokemon}>{description}</Text>
            ) : (
              <ActivityIndicator />
            )}
          </View>
        </View>
        <View style={globalStyles.containerPokemonDetails}>
          <Text style={[globalStyles.subtitles, globalStyles.marginLeftMedium]}>
            Abilities
          </Text>
          {!loadingAbilities ? (
            <FlatList
              ListFooterComponent={
                <View style={globalStyles.marginBottomSmall} />
              }
              data={abilities}
              numColumns={2}
              horizontal={false}
              renderItem={({item, index}) => (
                <View
                  style={[
                    {width: widthPercentageToDP('40%')},
                    globalStyles.marginLeftMedium,
                  ]}>
                  <Text style={globalStyles.subtitles2}>
                    {fistLetterToUperCase(item.ability.name)}
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.slot}
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
