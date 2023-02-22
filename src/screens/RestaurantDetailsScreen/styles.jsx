import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
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