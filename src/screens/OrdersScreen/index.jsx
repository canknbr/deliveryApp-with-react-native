import { View,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import OrderListItem from '../../components/OrderListItem'
const OrdersScreen = () => {
  return (
    <View style={styles.container}>
        <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <OrderListItem order={item}/>
            
        }
        ItemSeparatorComponent={() => (
            <View style={styles.seperator}/>
        )}
        />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        width: '100%',

    },
    seperator: {
        height: 1,
        backgroundColor: '#ddd',
        width: '100%',

    }
})