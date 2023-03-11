import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { NavOptionsTypes } from "./types";
import { Icon } from "react-native-elements"
import {useNavigation} from "@react-navigation/native"
import {Props as HomeProps} from "../screens/Home"

//redux 
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data =[
    {
        id: 123,
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: 456,
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen"
    }
]

const NavOptions = () => {

    const navigation = useNavigation<HomeProps["navigation"]>()

    const origin = useSelector(selectOrigin)

    const handlePress = () =>{
        navigation.navigate("MapScreen")
    }

    return(
        <FlatList
            data={data}
            style={styles.list}
            keyExtractor={(item: any) => item.id}
            horizontal
            renderItem={({item}: any) =>  
            <TouchableOpacity style={ origin? styles.listItem: [styles.listItem, {opacity: 0.5}  ] }onPress={handlePress} disabled={!origin}>
                <Image style={styles.icon} source={{uri: item.image}} />
                <Text style={styles.text}>{item.title}</Text>
                <Icon name="arrowright" color="white" type="antdesign" style={styles.arrowRight}/>
            </TouchableOpacity> 
            }
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({
    icon:{
        width: 120,
        height: 120,
        resizeMode: "contain",
        
    },
    list:{
        
    },
    listItem: {
        alignItems: "center",
        backgroundColor: "#E0E0E0",
        height: 200,
        marginRight: 10,
        padding: 5,
    },
    text:{
        fontWeight: "bold",
        marginTop: 5
    },
    arrowRight:{
        backgroundColor: "#000",
        padding: 5,
        borderRadius: 50,
        marginTop: 10
    }
})