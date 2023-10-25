import {PokemonCard} from 'components/PokemonCard';
import {useFluxible} from 'hooks';
import {FlatList} from 'react-native';
import {THomeStackNavigationProp} from 'src/App/home';

interface IProps {
  navigation: THomeStackNavigationProp;
}

export default function Window({navigation}: IProps) {
  const {favorites} = useFluxible({items: ['favorites']});

  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item.name}
      renderItem={({item}) => <PokemonCard key={item.name} item={item} />}
    />
  );
}
