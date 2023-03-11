import React, {FunctionComponent} from "react";
import {StyleSheet} from "react-native"

// components
import RideOptionsCard from "../components/RideOptionsCard";
import NavigateCard from "../components/NavigateCard";


// React Navigation
import {createStackNavigator} from "@react-navigation/stack"

//types


export type MapStackParamList = {
    NavigateCard: undefined
    RideOptionsCard: undefined
}
 
const Stack = createStackNavigator<MapStackParamList>();

const MapStack : FunctionComponent = () =>{
    return (
        
            <Stack.Navigator initialRouteName= "NavigateCard" screenOptions={{
            }}>
               <Stack.Screen name="NavigateCard" component={NavigateCard} options={{headerShown:false}}/>
                <Stack.Screen
                    name="RideOptionsCard" 
                    component={RideOptionsCard} 
                    options={{headerShown:false}} 
                />
            </Stack.Navigator>
         
    )}

const styles = StyleSheet.create({
})

export default MapStack;