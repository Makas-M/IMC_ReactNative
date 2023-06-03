import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contextIMC: {
        marginTop: 20,
        paddingtop:15,
        alignItems: "center",
        width: "100%"
    },
   
    resultIMC: {
        flex: 1,
        marginTop: 15,
        paddingTop: 40,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
        
    },
    numberIMC: {
        fontSize: 40,
        color: "#FF0043",
        fontWeight: "bold",
        
        
    },
    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
        justifyContent: "center",
       
    },
    boxSharebutton:{
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
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
    }

})
export default styles