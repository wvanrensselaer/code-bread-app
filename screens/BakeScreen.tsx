import { StyleSheet } from 'react-native';
import Bake from '../components/Bake';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function BakeScreen({
  navigation,
}: RootStackScreenProps<'Bake'>) {
  return (
    <View style={styles.container}>
      <Bake />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingVertical: 6,
  },
});
