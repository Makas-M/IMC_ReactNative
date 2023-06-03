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
        <View styles={styles.contextMC}>
            <View> 
            {props.resultIMC !=null ?
                <TouchableOpacity>
                    <Text>Partilhar</Text>
                </TouchableOpacity>
                : <View/> 
            }
            </View>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberIMC}>{props.resultIMC}</Text>
        </View>
    );
}