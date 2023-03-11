import React, {FunctionComponent, useRef, useEffect} from "react";
import { StyleSheet, View } from "react-native";

// map
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";

import { GOOGLE_MAPS_API_KEY } from "@env";


const MapComponent: FunctionComponent = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef<any>(null);

    useEffect(() =>{
        if(!origin || !destination){
            return;
        }

        //Zoom and fit to markerss
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"],{
            edgePadding: {
                top: 50,
                right: 50,
                left: 50,
                bottom: 50
            }
        })

    },[origin, destination])

   
    return(
      
            <View>
                <MapView
                ref={mapRef}
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
                    origin && destination && 
                    <MapViewDirections
                        origin={origin.description}
                        destination={destination.description}
                        apikey= {GOOGLE_MAPS_API_KEY}
                        strokeWidth={3}
                        strokeColor="hotpink"
                    />
                }
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

                {
                    destination?.location &&
                    <Marker coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="Destination"
                    description={destination.description}
                    identifier="destination"
                    
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