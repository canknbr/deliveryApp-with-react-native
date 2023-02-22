import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  restaurantItemContainer: {
    width: '100%',
    marginVertical: 10,
  },
  restaurantItemImage: {
    width: '100%',
    aspectRatio: 5 / 3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:5,
    marginHorizontal:10,
  },
  rating: {
    backgroundColor: '#ced4da',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    color: '#343a40',
    fontSize: 16,
  },
  title: {
    color: '#343a40',
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
  },
  subTitle: {
    color: '#868e96',
  },
});
