import React, {FunctionComponent} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";


import MapView from 'react-native-maps';


const MapComponent: FunctionComponent = () => {
   
    return(
      
            <View>
                <MapView
                style={styles.map}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
            </View>
       
    )
}

export default MapComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },

      map:{
        // flex: 1,
        height: 350
      }
     
})