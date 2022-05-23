import { Picker } from '@react-native-picker/picker';
import { Fragment, useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { Text, View } from '../../Themed';

interface Ingredient {
  id: string;
  quantity: string;
  unit: string;
  name: string;
}

interface IngredientGroup {
  name: string;
  ingredients: Ingredient[];
}

interface Step {
  time: string;
  title: string;
  description?: string;
}

const INGREDIENT_GROUPS: IngredientGroup[] = [
  {
    name: 'Levain',
    ingredients: [
      {
        id: 'Ingredient.1',
        quantity: '20',
        unit: 'gram',
        name: 'Starter',
      },
      {
        id: 'Ingredient.2',
        quantity: '40',
        unit: 'gram',
        name: 'Flour',
      },
      {
        id: 'Ingredient.3',
        quantity: '40',
        unit: 'gram',
        name: 'Water',
      },
    ],
  },
  {
    name: 'Main Dough',
    ingredients: [
      {
        id: 'Ingredient.4',
        quantity: '100',
        unit: 'gram',
        name: 'Levain',
      },
      {
        id: 'Ingredient.5',
        quantity: '450',
        unit: 'gram',
        name: 'Flour',
      },
      {
        id: 'Ingredient.6',
        quantity: '350',
        unit: 'gram',
        name: 'Water',
      },
      {
        id: 'Ingredient.7',
        quantity: '10',
        unit: 'gram',
        name: 'Salt',
      },
    ],
  },
];

const STEPS: Step[] = [
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
  const [ingredientGroups, setIngredientGroups] = useState(INGREDIENT_GROUPS);

  return (
    <View>
      <View>
        <Text style={styles.h2}>Ingredients</Text>
        {ingredientGroups.map((group, groupIndex) => (
          <Fragment key={group.name}>
            <Text style={styles.h3}>{group.name}</Text>
            <FlatList
              style={styles.list}
              data={group.ingredients}
              keyExtractor={(ingredient) => ingredient.id}
              renderItem={({ item: ingredient, index: ingredientIndex }) => {
                const handleQuantityChange = (quantity: string) => {
                  setIngredientGroups([
                    ...ingredientGroups.slice(0, groupIndex),
                    {
                      ...ingredientGroups[groupIndex],
                      ingredients: [
                        ...ingredientGroups[groupIndex].ingredients.slice(
                          0,
                          ingredientIndex
                        ),
                        {
                          ...ingredientGroups[groupIndex].ingredients[
                            ingredientIndex
                          ],
                          quantity,
                        },
                        ...ingredientGroups[groupIndex].ingredients.slice(
                          ingredientIndex + 1
                        ),
                      ],
                    },
                    ...ingredientGroups.slice(groupIndex + 1),
                  ]);
                };

                const handleUnitChange = (unit: string) => {
                  setIngredientGroups([
                    ...ingredientGroups.slice(0, groupIndex),
                    {
                      ...ingredientGroups[groupIndex],
                      ingredients: [
                        ...ingredientGroups[groupIndex].ingredients.slice(
                          0,
                          ingredientIndex
                        ),
                        {
                          ...ingredientGroups[groupIndex].ingredients[
                            ingredientIndex
                          ],
                          unit,
                        },
                        ...ingredientGroups[groupIndex].ingredients.slice(
                          ingredientIndex + 1
                        ),
                      ],
                    },
                    ...ingredientGroups.slice(groupIndex + 1),
                  ]);
                };

                const handleNameChange = (name: string) => {
                  setIngredientGroups([
                    ...ingredientGroups.slice(0, groupIndex),
                    {
                      ...ingredientGroups[groupIndex],
                      ingredients: [
                        ...ingredientGroups[groupIndex].ingredients.slice(
                          0,
                          ingredientIndex
                        ),
                        {
                          ...ingredientGroups[groupIndex].ingredients[
                            ingredientIndex
                          ],
                          name,
                        },
                        ...ingredientGroups[groupIndex].ingredients.slice(
                          ingredientIndex + 1
                        ),
                      ],
                    },
                    ...ingredientGroups.slice(groupIndex + 1),
                  ]);
                };

                return (
                  <View style={styles.formGroup}>
                    <View style={styles.formItemSmall}>
                      <TextInput
                        value={ingredient.quantity}
                        onChangeText={handleQuantityChange}
                        style={styles.formItemSmall}
                      />
                    </View>
                    <View style={styles.formItemSmall}>
                      <Picker
                        selectedValue={ingredient.unit}
                        onValueChange={handleUnitChange}
                      >
                        <Picker.Item label="g." value="gram" />
                        <Picker.Item label="kg." value="kilogram" />
                        <Picker.Item label="ml." value="milliliter" />
                        <Picker.Item label="l." value="liter" />
                        <Picker.Item label="tsp." value="teaspoon" />
                        <Picker.Item label="tbsp." value="tablespoon" />
                        <Picker.Item label="c." value="cup" />
                        <Picker.Item label="oz." value="ounce" />
                        <Picker.Item label="lb." value="pound" />
                      </Picker>
                    </View>
                    <View style={styles.formItemLarge}>
                      <TextInput
                        value={ingredient.name}
                        onChangeText={handleNameChange}
                      />
                    </View>
                  </View>
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
  formGroup: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  formItemSmall: {
    flex: 1,
    paddingHorizontal: 8,
  },
  formItemLarge: {
    flex: 3,
    paddingHorizontal: 8,
  },
});
