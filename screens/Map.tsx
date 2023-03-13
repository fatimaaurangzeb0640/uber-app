import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

import { StackScreenProps } from "@react-navigation/stack" 
import MapComponent from "../components/MapComponent";

import MapStack from "../navigators/MapStack";
import { MapStackParamList } from "../navigators/MapStack";

// export type Props = StackScreenProps<RootStackParamList, "MapScreen">
export type Props = StackScreenProps<MapStackParamList, "NavigateCard">

const MapScreen = () => {
   
    return(
        <SafeAreaView style={styles.container}>
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
      }
     
})