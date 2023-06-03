import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        
        //justifyContent: "space-around",
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: 20,
        marginTop: 30,


    },
    form: {
        width: "100%",
        paddingTop: 20,
    },
    formLabel: {
        color: "#000000",
        fontSize: 16,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor:"#f6f6f6",
        height: 40,
        margin: 10,
        paddingLeft: 10,

    },
    ButtonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 10,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff"

    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    }
})

export default styles