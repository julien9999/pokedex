import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {getPokemon} from 'api';
import {Text} from 'components/Text';
import {Row, View} from 'global';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const PokemonCard = ({item}) => {
  const navigation = useNavigation();

  console.log(item?.url);

  const {data} = useQuery(
    ['pokemon', item?.name],
    async () => await getPokemon(item?.url),
    {
      initialData: {},
    },
  );

  const backgroundColor =
    {
      grass: 'green',
      fire: 'orange',
      water: 'blue',
      bug: 'green',
    }[data?.types?.[0]?.type?.name] ?? 'green';

  const onPress = () => navigation.push('Pokemon', {pokemon: item});

  return (
    <Card onPress={onPress} style={{backgroundColor}}>
      <View flex={1}>
        <Text type="H3" color="black">
          {item?.name}
        </Text>
        <Row>
          {data?.types?.map(el => (
            <MiniCard key={el?.type.name}>
              <Text type="P2" color="black">
                {el?.type.name}
              </Text>
            </MiniCard>
          ))}
        </Row>
      </View>
      <FastImage
        style={styles.image}
        source={{uri: data?.sprites?.other?.home?.front_default}}
      />
    </Card>
  );
};

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 8px;
  border-color: black;
  border-width: 1px;
  border-radius: 20px;
  padding-vertical: 8px;
  padding-horizontal: 8px;
`;

export const MiniCard = styled.View`
  border-color: black;
  border-width: 1px;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 4px;
`;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});
