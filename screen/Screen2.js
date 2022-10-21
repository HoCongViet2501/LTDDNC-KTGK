import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Screen2({item}) {
    return (
        <View style={styles.container}>
        <Text style={{fontWeight:"bold",fontSize:20}}>{item.title} Startbug coffee</Text>
        <Text style={{fontWeight:"bold",fontSize:20, textAlign:"center"}}>{item.price}150$</Text>
        <Image style={{height:150,width:200}} source={require("../img/cf1.png")}></Image>
        <Text>Starbug ehonimae medium roast is the perfect</Text>
        <Text style={{textAlign:"center"}}>Coffee in th world</Text>
        <MaterialIcons></MaterialIcons>
        <TouchableOpacity style={{height:50}}>
            <Text style={{backgroundColor:"green",borderRadius:20,color:"white",textAlign:"center",fontSize:20,fontWeight:"bold"}}>Add to cart</Text>
        </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        
    }
})