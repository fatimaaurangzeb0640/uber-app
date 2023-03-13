import React, {FunctionComponent, useState} from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";
import { Icon } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";
import {Props as MapProps} from "../screens/Map"

import { useSelector } from "react-redux";
import { selectDestination, selectTravelTimeInformation } from "../slices/navSlice";

import { Dimensions } from "react-native";
// import { Marker } from "react-native-maps";


const RideOptionsCard: FunctionComponent = () => {
    const data = [
        {
            id: "Uber-X-123",
            title: "UberX", 
            multiplier: 1,
            image: "https://links.papareact.com/3pn"
        },
        {
            id: "Uber-XL-456",
            title: "Uber XL", 
            multiplier: 1.2,
            image: "https://links.papareact.com/5w8"
        },
        {
            id: "Uber-LUX-789",
            title: "Uber LUX", 
            multiplier: 1.75,
            image: "https://links.papareact.com/7pf"
        }
    ]

    const navigation = useNavigation<MapProps["navigation"]>()
    const [selected, setSelected] = useState<any>(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    const SURGE_CHARGE_RATE = 1.5

   
   
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate("NavigateCard")}>
                    <Icon name="chevron-left" type="fontawesome"/>  
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Select a ride - {travelTimeInformation?.distance?.text}</Text>
                </View>
            </View>
            <FlatList
            data={data}
            keyExtractor={(item: any) => item.id}
            renderItem={({item:{id, title, multiplier, image}, item}: any) =>  
            <TouchableOpacity onPress={()=>setSelected(item)} style={[id===selected?.id && {backgroundColor: "#D9D9D9"} ,styles.listItem]}>
                <Image style={styles.image} source={{uri: image}}/>
                <View>
                    <Text>{title}</Text>
                    <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
                </View>
                <Text>{new Intl.NumberFormat("en-gb",{
                    style: "currency",
                    currency: "GBP"
                }).format(
                    (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier)/ 100
                )}</Text>
            </TouchableOpacity> 
            }
        />
        <TouchableOpacity style={selected? styles.selectButton: [ styles.selectButton,{backgroundColor:"#D9D9D9"}]} disabled={!selected}>
            <Text style={styles.buttonText}>Choose {selected?.title}</Text>
        </TouchableOpacity>
        </SafeAreaView>
       
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
      title:{
        fontSize: 20,
        fontWeight: "bold",
      },
      backButtonContainer:{
        flexDirection: "row",
      },
      titleContainer:{
        justifyContent: "center",
        alignItems:"center",
        flex: 2
      },
      image:{
        width: 100,
        height: 100,
        resizeMode: "contain"
      },
      listItem:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems:"center"
      },
      selectButton:{
        backgroundColor:"black",
        height: 50,
        justifyContent: "center"
      },
      buttonText:{
        color:"white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        
      }
      
     
})