import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
const DishItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={{
        flex:1,
      }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
    {dish.image &&  <Image
        style={styles.image}
        source={{
          uri: dish.image,
        }}
      />}
    </View>
  );
};

export default DishItem;
