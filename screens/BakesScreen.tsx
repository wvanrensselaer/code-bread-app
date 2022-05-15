import { StyleSheet } from 'react-native';
import BakeList from '../components/composite/BakeList';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function BakesScreen({
  navigation,
}: RootTabScreenProps<'Bakes'>) {
  return (
    <View style={styles.container}>
      <BakeList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
