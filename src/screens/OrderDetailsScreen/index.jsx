import { View, Text,Image ,FlatList} from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import styles from './styles';
import Header from './Header';
import BasketItem from '../../components/BasketItem';
const order = orders[0];
const OrderDetailsScreen = () => {
  return (
    <View>

        <FlatList
            data={restaurants[0].dishes}
            renderItem={({item}) => <BasketItem dish={item} />}
            keyExtractor={(item) => item.name}
            ListHeaderComponent={() => (
                <Header order={order} />
            )}
        />
    </View>
  );
}

export default OrderDetailsScreen