import {Text} from 'components/Text';
import {DefaultScrollBackground, Row, View, globalStyles} from 'global';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {THomeStackNavigationProp} from 'src/App/home';
import {colors} from '~constants';
import * as Progress from 'react-native-progress';
import {DefaultButton} from 'components/Buttons';
import {updateStore} from 'globalStore';
import {useFluxible} from 'hooks';
import {PokemonCard} from 'components/PokemonCard';
import {useQuery} from '@tanstack/react-query';
import {getPokemonEvolutions, getPokemonSpecies} from 'api';
import {useIsFocused} from '@react-navigation/native';

interface IProps {
  navigation: THomeStackNavigationProp;
}

const getNum = txt => {
  return txt?.replace(/[^0-9]/g, '');
};

export default function Window({navigation, route}) {
  const id = getNum(route?.params?.pokemon?.url);
  const isFocused = useIsFocused();
  const {data} = useQuery(
    ['pokemon-species', route?.params?.pokemon?.name],
    async () => await getPokemonSpecies(id),
    {
      initialData: {},
      enabled: isFocused,
    },
  );
  const {data: evolutions} = useQuery(
    ['pokemon-chain', route?.params?.pokemon?.name],
    async () => await getPokemonEvolutions(id),
    {
      initialData: {},
      enabled: isFocused,
    },
  );

  console.log(JSON.stringify(evolutions));

  const {favorites} = useFluxible({items: ['favorites']});
  const isFavorite = favorites?.findIndex(
    el => el?.name === route?.params?.pokemon?.name,
  );

  useEffect(() => {
    navigation.setOptions({
      title: route?.params?.pokemon?.name,
    });
  }, []);

  const onPress = () => {
    updateStore({
      favorites:
        isFavorite >= 0
          ? favorites.filter(el => el?.name !== route?.params?.pokemon?.name)
          : [...favorites, route?.params?.pokemon],
    });
  };

  return (
    <DefaultScrollBackground contentContainerStyle={styles.background}>
      <PokemonCard item={route?.params?.pokemon} />
      <View paddingHorizontal={16}>
        <Text color={colors.black} marginTop={16}>
          Description:
        </Text>
        <Text color={colors.black}>
          {data?.flavor_text_entries?.[0]?.flavor_text}
        </Text>

        <Text color={colors.black}>
          height: {route?.params?.pokemon?.metadata?.height}m
        </Text>
        <Text color={colors.black}>
          Weight: {route?.params?.pokemon?.metadata?.weight}kg
        </Text>
        <Text type="H3" color={colors.black} marginTop={16}>
          Base Stats
        </Text>
        {route?.params?.pokemon?.metadata?.stats.map(el => {
          const backgroundColor = {
            hp: 'red',
            attack: 'yellow',
            defense: 'blue',
            'special-attack': 'gray',
            'special-defense': 'green',
            speed: 'black',
          }[el?.stat?.name];

          return (
            <Row alignItems="center" key={el?.stat?.name}>
              <Text
                paddingHorizontal={16}
                color={colors.black}
                style={globalStyles.flex}>
                {el?.stat?.name}
              </Text>
              <Progress.Bar
                color={backgroundColor}
                progress={el?.base_stat / 100}
                width={200}
              />
            </Row>
          );
        })}

        {evolutions?.chain ? (
          <>
            <Text marginTop={16}>
              Evolution: {evolutions?.chain?.evolves_to?.[0]?.species?.name}
            </Text>
            <PokemonCard
              item={{
                ...evolutions?.chain?.evolves_to?.[0]?.species,
                url: `https://pokeapi.co/api/v2/pokemon/${getNum(
                  evolutions?.chain?.evolves_to?.[0]?.species?.url,
                )}`,
              }}
            />
          </>
        ) : null}
      </View>

      <DefaultButton
        type="secondary"
        formIsValid
        text={isFavorite >= 0 ? 'Remove from favorites' : 'Add to favorites'}
        onPress={onPress}
      />
    </DefaultScrollBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
  },
  row: {},
});
