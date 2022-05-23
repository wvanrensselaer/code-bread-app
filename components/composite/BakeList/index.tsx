import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { Text } from '../../Themed';

const BAKES = [
  { name: 'Country Sourdough' },
  { name: 'Brioche' },
  { name: 'Focaccia' },
];

export default function BakeList() {
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.list}
      data={BAKES}
      keyExtractor={(bake) => bake.name}
      renderItem={({ item: bake }) => (
        <Pressable
          style={styles.listItem}
          onPress={() => {
            navigation.navigate('Bake');
          }}
        >
          <Text>{bake.name}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 8,
  },
  listItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    textAlign: 'left',
  },
});
