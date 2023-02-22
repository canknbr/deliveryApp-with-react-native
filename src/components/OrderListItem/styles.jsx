import { StyleSheet } from "react-native";

export default StyleSheet.create({
    orderContainer: {
        flexDirection: "row",
        padding: 10,

    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        borderRadius: 10,
    },
    orderBody: {
        padding: 10,
        justifyContent: "space-evenly",
    },
    orderTitle: {
        fontWeight: "bold",
        fontSize: 18,

    },
    subTitle: {
        color: "#6e6969",
        fontSize: 14,

    }
});