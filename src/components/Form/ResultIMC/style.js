import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contextIMC: {
        marginTop: 1,
        paddingtop:1,
        alignItems: "center",
        width: "100%"
    },
   
    resultIMC: {
        flex: 1,
        marginTop: 1,
        paddingTop: 1,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
        
    },
    numberIMC: {
        fontSize: 36,
        color: "#FF0043",
        fontWeight: "bold",  
    },

    information: {
        fontSize: 16,
        color: "#FF0043",
        fontWeight: "bold",
        justifyContent: "center",
       
    },
    boxSharebutton:{
        width: "100%",
        alignItems: "center",
        marginBottom: 1,
    },

    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },

    sharedText:{
        color:  "#ffffff",
        fontwight: "bold",
        paddingHorizontal: 30, 
    },
})
export default styles