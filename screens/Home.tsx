import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import NavOptions from "../components/NavOptions";
import NavFavorites from "../components/NavFavorites";

import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack" 

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from "@env"

// Redux
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";


export type Props = StackScreenProps<RootStackParamList, "Home">


const Home = () => {
    const dispatch = useDispatch()
  

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.logo} source={{uri: "https://links.papareact.com/gzs"}} />
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: {
                                lat: details?.geometry.location.lat,
                                lng: details?.geometry.location.lng
                            } ,                           
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                        
                    }}
                    styles={{
                        container:{
                            flex: 0
                        },
                        textInput:{
                            fontSize: 18
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
                    // returnKeyType={"search"}
                   
                />
          </View>
          <View  style={styles.optionsContainer}>
                <NavOptions/>
            </View>
           
            <View style={styles.favContainer}>
                <NavFavorites/>
            </View>      
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
      },
      logo:{
        width: 100,
        height: 100,
        resizeMode: "contain",
      },

      optionsContainer:{
        flex: 1
      },

      favContainer:{
        flex: 2
      }

    
   

})