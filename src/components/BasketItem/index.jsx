import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
const BasketItem = ({dish}) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: '600' }}>{dish.name}</Text>
      <Text style={{ marginLeft: 'auto', fontWeight: '400' }}>${dish.price}</Text>
    </View>
  );
};

export default BasketItem;
