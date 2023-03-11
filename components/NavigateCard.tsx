import React, {FunctionComponent} from "react";
import { StyleSheet, View, Text } from "react-native";

// Redux
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from "@env"

import { useNavigation } from "@react-navigation/native";

import {Props as MapProps} from "../screens/Map"


const NavigateCard: FunctionComponent = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation<MapProps["navigation"]>()
   
    return(
      
            <View style={styles.container}>
                 <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: {
                                lat: details?.geometry.location.lat,
                                lng: details?.geometry.location.lng
                            } ,                           
                            description: data.description
                        }))
                        navigation.navigate("RideOptionsCard")
                    }}
                    styles={{
                        container:{
                            flex: 0,
                            backgroundColor: "white",
                            paddingTop: 20
                        },
                        textInput:{
                            fontSize: 18,
                            borderRadius: 0,
                            backgroundColor: "#DDDDDF"
                        },
                        textInputContainer:{
                            paddingHorizontal: 20,
                            paddingVertical: 0
                        }

                    }}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}
                    
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={300}
                    minLength={2}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                />
            </View>
       
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
     
})