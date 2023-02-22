import { Text, View, Image } from 'react-native';
import styles from './headerstyle';
import React from 'react';

const Header = ({ restaurant }) => {
  return (
    <>
      <Image
        style={styles.restaurantItemImage}
        source={{
          uri: restaurant.image,
        }}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          $ {restaurant.deliveryFee} {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} • min
        </Text>
      </View>
    </>
  );
};

export default Header;

