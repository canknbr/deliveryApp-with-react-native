import { View, Text, TouchableOpacity,FlatList } from 'react-native';
import React, { useState } from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import BasketItem from '../../components/BasketItem';
import styles from './styles';

const BasketScreen = () => {
  const restaurant = restaurants[0];

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.yourItems}>Your Items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketItem dish={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
       
      />
      <View style={styles.separator} />

      <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Create Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketScreen;
