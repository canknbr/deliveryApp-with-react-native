import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './headerstyle';
const Header = ({order}) => {
  return (
    <View>
      <Image
        style={styles.restaurantItemImage}
        source={{
          uri: order.Restaurant.image,
        }}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text style={styles.subTitle}>{order.status} &#8226; 2 days ago</Text>
        <Text style={styles.menu}>Your Order</Text>
      </View>
    </View>
  );
}

export default Header