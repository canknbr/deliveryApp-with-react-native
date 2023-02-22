import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import BasketScreen from '../screens/BasketScreen';
import DishDetailScreen from '../screens/DishDetailScreen';

const Navigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Orders" component={OrdersScreen} options={{headerShown: false}}/>
            <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} options={{headerShown: false}}/>
            <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Basket" component={BasketScreen} options={{headerShown: false}}/>
            <Stack.Screen name="DishDetail" component={DishDetailScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
} 


export default Navigation;
