import React from "react"
import {
    View, 
    Text, 
    TouchableOpacity, 
    Share 
} from "react-native"
import styles from "./style";

export default function ResultIMC(props){
    const onShare = async () =>{
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.resultIMC,
        })
    }


    return(
        <View style={styles.contextIMC}>
            <View style={styles.boxSharebutton}> 
            {props.resultIMC !=null ?
                <TouchableOpacity style={styles.shared}
                onPress={onShare}>
                    <Text style={styles.sharedText}>Partilhar</Text>
                </TouchableOpacity>
                : <View/> 
            }
            </View>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberIMC}>{props.resultIMC}</Text>
        </View>
    );
}