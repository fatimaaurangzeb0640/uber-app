import React, {FunctionComponent} from "react";
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";

import { StackScreenProps } from "@react-navigation/stack" 
import MapComponent from "../components/MapComponent";

import MapStack from "../navigators/MapStack";
import { MapStackParamList } from "../navigators/MapStack";

import { Icon } from "react-native-elements";


import { RootStackParamList } from "../navigators/RootStack";

type Props = StackScreenProps<RootStackParamList, "MapScreen">

const MapScreen: FunctionComponent<Props> = ({navigation}) => {
    
    
   
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.navigate("Home") }>
                <Icon name="menu"/>
            </TouchableOpacity>
            <View style={styles.half}>
                <MapComponent/>
            </View>
            <View style={styles.half}>
                <MapStack/>  
            </View>
        </SafeAreaView>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      half:{
        flex: 1
      },
      menuButton:{
        position: "absolute",
        backgroundColor: "white",
        left: 0,
        top: 40,
        zIndex: 2,
        borderRadius: 50,
        padding: 15
      }
     
})