import {useIsFocused} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {getPokemons} from 'api';
import {PokemonCard} from 'components/PokemonCard';
import {FlatList} from 'react-native';
import {THomeStackNavigationProp} from 'src/App/home';
import styled from 'styled-components/native';

interface IProps {
  navigation: THomeStackNavigationProp;
}

export default function Window({navigation}: IProps) {
  const isFocused = useIsFocused();
  const {data} = useQuery(['pokemons'], async () => await getPokemons(), {
    initialData: {results: []},
    enabled: isFocused,
  });

  return (
    <FlatList
      data={data?.results}
      keyExtractor={item => item.name}
      renderItem={({item}) => <PokemonCard key={item.name} item={item} />}
    />
  );
}
export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
`;
