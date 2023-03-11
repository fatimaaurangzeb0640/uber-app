import React, {FunctionComponent} from "react";
import { StyleSheet, View } from "react-native";

import MapView, {Marker} from 'react-native-maps';

import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
// import { Marker } from "react-native-maps";


const MapComponent: FunctionComponent = () => {

    const origin = useSelector(selectOrigin)
    console.log(origin)
   
    return(
      
            <View>
                <MapView
                style={styles.map}
                initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                }}
                mapType="mutedStandard"
            >
                    {
                    origin.location &&
                    <Marker coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                    
                    />
                }
                </MapView>
            
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