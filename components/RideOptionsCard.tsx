import React, {FunctionComponent} from "react";
import { StyleSheet, View, Text } from "react-native";

import { useSelector } from "react-redux";
import { selectDestination } from "../slices/navSlice";
// import { Marker } from "react-native-maps";


const RideOptionsCard: FunctionComponent = () => {

    const destination = useSelector(selectDestination)
    console.log(destination)
   
    return(
      
            <View style={styles.container}>
                <Text>Ride Options Card</Text>
            </View>
       
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
     
})