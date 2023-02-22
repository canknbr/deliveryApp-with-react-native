import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
const RestaurantDetailPage = ({ navigation }) => {
  const restaurant = restaurants[0];
  return (
    <View style={styles.page}>
      <Image
        style={styles.restaurantItemImage}
        source={{
          uri: restaurant.image,
        }}
      />
      <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={styles.iconContainer}>
        <Ionicons name="arrow-back" size={25} color="#343a40" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          $ {restaurant.deliveryFee} {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} • min
        </Text>
      </View>

    </View>
  );
};

export default RestaurantDetailPage;

const styles = StyleSheet.create({
  page: {},
  restaurantItemImage: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    marginVertical: 10,
    color: '#343a40',
  },
  subTitle: {
    color: '#868e96',
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 1,
    backgroundColor: '#f8f9fa',

    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
