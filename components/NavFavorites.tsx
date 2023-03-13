import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from "react-native";
import { Icon } from "react-native-elements"
import {useNavigation} from "@react-navigation/native"
import {Props as HomeProps} from "../screens/Home"

//redux 
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data =[
    {
        id: 123,
        icon: "home",
        location: "Home",
        destination: "University Road, Karachi, PK"
    },
    {
        id: 456,
        icon: "briefcase",
        location: "Work",
        destination: "Mai Kolachi,Karachi, PK"
    }
]

const NavFavorites = () => {

    const navigation = useNavigation<HomeProps["navigation"]>()

    const origin = useSelector(selectOrigin)

    const handlePress = () =>{
        navigation.navigate("MapScreen")

    }

    return(
       
        <FlatList
            data={data}
            // ItemSeparatorComponent={() => <View style={styles.separator}/>}
            style={styles.list}
            keyExtractor={(item: any) => item.id}
            renderItem={({item}: any) =>  
            <TouchableOpacity onPress={handlePress} disabled={!origin}>
                <View style={ styles.listItem }>
                    <Icon name={item.icon} color="white" type="ionicon" style={styles.icon}/>
                    <View style={styles.listText}>
                        <Text style={styles.text}>{item.location}</Text>
                        <Text>{item.destination}</Text>
                    </View>
                </View>
            </TouchableOpacity> 
            }
        />
        
    )
}

export default NavFavorites

const styles = StyleSheet.create({
    icon:
        {
            width: 40,
            height: 40,
            backgroundColor: "gray", 
            paddingTop: 5,
            borderRadius: 50
          
        }
,        
    list:{
        // flex:1,
        flexDirection: "row",
        
    },
    listItem: {
        flexDirection: "row",
        marginTop: 20,
        paddingBottom: 10
    },
    listText:{
        marginLeft: 10
    },

    text:{
        fontWeight: "bold",
        marginTop: 5,
        fontSize: 15
    },
    separator:{
        height: 0.5,
        backgroundColor: "gray"
    }

})