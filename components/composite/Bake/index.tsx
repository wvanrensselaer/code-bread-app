import { Fragment } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { Text, View } from '../../Themed';

const INGREDIENT_GROUPS = [
  {
    name: 'Levain',
    ingredients: [
      {
        quantity: 20,
        unit: 'gram',
        name: 'Starter',
      },
      {
        quantity: 40,
        unit: 'gram',
        name: 'Flour',
      },
      {
        quantity: 40,
        unit: 'gram',
        name: 'Water',
      },
    ],
  },
  {
    name: 'Main Dough',
    ingredients: [
      {
        quantity: 100,
        unit: 'gram',
        name: 'Levain',
      },
      {
        quantity: 450,
        unit: 'gram',
        name: 'Flour',
      },
      {
        quantity: 350,
        unit: 'gram',
        name: 'Water',
      },
      {
        quantity: 10,
        unit: 'gram',
        name: 'Salt',
      },
    ],
  },
];

const STEPS = [
  {
    time: '7:00 AM',
    title: 'Create Levain',
    description: '20g starter, 40g flour, 40g water (1:2:2 ratio)',
  },
  {
    time: '11:00 AM',
    title: 'Autolyze',
    description: '450g flour, 350g water',
  },
  {
    time: '12:00 PM',
    title: 'Add Levain',
    description: '500g total flour at 80% hydration',
  },
  {
    time: '12:30 PM',
    title: 'Add Salt',
  },
  {
    time: '1:00 PM',
    title: 'Fold',
  },
  {
    time: '1:30 PM',
    title: 'Laminate',
  },
  {
    time: '2:30 PM',
    title: 'Coil Fold',
  },
  {
    time: '3:30 PM',
    title: 'Coil Fold',
  },
  {
    time: '4:30 PM',
    title: 'Coil Fold',
  },
  {
    time: '5:30 PM',
    title: 'Shape',
  },
  {
    time: '6:00 PM',
    title: 'Cold Proof',
    description: 'Overnight in fridge.',
  },
  {
    time: '7:00 AM',
    title: 'Bake',
    description: '475℉, 20 minutes covered, 20 minutes uncovered',
  },
];

export default function Bake() {
  return (
    <View>
      <View>
        <Text style={styles.h2}>Ingredients</Text>
        {INGREDIENT_GROUPS.map((group) => (
          <Fragment key={group.name}>
            <Text style={styles.h3}>{group.name}</Text>
            <FlatList
              style={styles.list}
              data={group.ingredients}
              renderItem={({ item: ingredient }) => {
                const formatter = new Intl.NumberFormat('en-US', {
                  style: 'unit',
                  unit: ingredient.unit,
                  notation: 'compact',
                });

                return (
                  <Text style={styles.listItem}>
                    {formatter.format(ingredient.quantity)} {ingredient.name}
                  </Text>
                );
              }}
            />
          </Fragment>
        ))}
      </View>
      <View>
        <Text style={styles.h2}>Steps</Text>
        <Timeline
          style={styles.timeline}
          timeContainerStyle={styles.time}
          eventDetailStyle={styles.event}
          data={STEPS}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  h3: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  list: {
    marginVertical: 8,
  },
  listItem: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    textAlign: 'left',
  },
  timeline: {
    marginVertical: 16,
  },
  time: {
    minWidth: 80,
  },
  event: {
    paddingBottom: 16,
    paddingRight: 16,
    paddingTop: 0,
  },
});
