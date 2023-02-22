import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
const DishDetailScreen = () => {
  const dish = restaurants[0].dishes[0];
  const [quantity, setQuantity] = useState(1);
  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    } else {
      setQuantity(1);
    }
  };
  const onPlus = () => {
    setQuantity(quantity => quantity + 1);
  };
  const getTotalPrice = () => {
    return (quantity * dish.price).toFixed(2);
  };
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={0.5} onPress={onMinus}>
          <AntDesign name="minuscircleo" size={60} color="#343a40" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
            onPress={onPlus}
            activeOpacity={0.5}
        >

          <AntDesign
            name="pluscircleo"
            size={60}
            color="#343a40"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
          Add {quantity} item{quantity > 1 ? 's' : ''} to cart for $
            {getTotalPrice()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DishDetailScreen;
