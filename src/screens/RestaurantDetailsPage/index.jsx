import {  FlatList, View, TouchableOpacity } from 'react-native';
import DishItem from '../../components/DishItem';
import { Ionicons } from '@expo/vector-icons';
import Header from './Header';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import styles from './styles';
const RestaurantDetailPage = ({ navigation }) => {
  const restaurant = restaurants[0];
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <DishItem dish={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={
          <Header restaurant={restaurant} navigation={navigation} />
        }
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={styles.iconContainer}
      >
        <Ionicons name="arrow-back" size={25} color="#343a40" />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantDetailPage;

