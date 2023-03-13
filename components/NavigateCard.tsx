import React, {FunctionComponent} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements"

// Redux
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from "@env"

import { useNavigation } from "@react-navigation/native";

import {Props as MapProps} from "../screens/Map"

import NavFavorites from "./NavFavorites";


const NavigateCard: FunctionComponent = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation<MapProps["navigation"]>()
   
    return(
      
            <View style={styles.container}>
                <Text style={styles.greeting}>Good morning, Ackerman!</Text>
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
                <NavFavorites/>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.navigate("RideOptionsCard")}>
                        <Icon name="car" type="font-awesome" color="white" size={16}/>
                        <Text style={styles.iconText}>Rides</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Icon name="fast-food-outline" type="ionicon" color="white" size={16}/>
                        <Text style={styles.iconText}>Eats</Text>
                    </TouchableOpacity>
                </View>
            </View>
       
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
      greeting:{
        fontSize: 20,
        paddingHorizontal: 20,
        fontWeight: 500
      },
      iconsContainer:{
        flexDirection: "row",
        justifyContent: "space-evenly"
      },
      iconContainer:{
        flexDirection: "row",
        backgroundColor: "black",
        width: 100,
        height: 40,
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 20
      },
      iconText:{
        color: "white",
        marginLeft: 10
      }

     
})