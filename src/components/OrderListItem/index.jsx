import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
const OrderListItem = ({ order }) => {
  return (
    <View style={styles.orderContainer}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View style={styles.orderBody}>
        <Text style={styles.orderTitle}>{order.Restaurant.name}</Text>
        <Text style={styles.subTitle}>
         3 items $33.00
        </Text>
        <Text style={styles.subTitle}>
          2 days ago &#8226; {order.status}
        </Text>
      </View>
    </View>
  );
};

export default OrderListItem;
