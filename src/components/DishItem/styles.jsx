import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    paddingHorizontal: 20,
    borderBottomColor: "#e9ecef",
    borderBottomWidth: 1,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
    row: {
    flexDirection: "row",
    justifyContent: "space-between",
    },
  name: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,

  },
    image: { width: 70, height: 70, borderRadius: 20 },
  description: {
    color: "#868e96",
    marginVertical: 10,

  },
  price: {
    fontSize: 16,
fontWeight: '500',
  },
});