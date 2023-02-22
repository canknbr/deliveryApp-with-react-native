import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
const RestaurantItem = ({restaurant}) => {

  return (
    <TouchableOpacity
      style={styles.restaurantItemContainer}
      activeOpacity={0.9}
    >
      <Image
        style={styles.restaurantItemImage}
        source={{
          uri: restaurant.image,
        }}
      />
    
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subTitle}>
            $ {restaurant.deliveryFee} {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} • min
          </Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>4.5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;
