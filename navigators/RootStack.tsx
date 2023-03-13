import React, {FunctionComponent} from "react";
import {Platform, StyleSheet} from "react-native"
import { KeyboardAvoidingView } from "react-native";

import Home from "../screens/Home";
import MapScreen from "../screens/Map";
// import 


// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"

//types


export type RootStackParamList = {
    Home: undefined
    MapScreen: undefined
}
 
const Stack = createStackNavigator<RootStackParamList>();

const RootStack : FunctionComponent = () =>{
    return (
       
        <NavigationContainer > 
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ?"padding": "height"} keyboardVerticalOffset={Platform.OS === "ios" ? -64: 0 }>
                <Stack.Navigator initialRouteName= "Home" screenOptions={{
                }}>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                    <Stack.Screen
                        name="MapScreen" 
                        component={MapScreen} 
                        options={{headerShown:false}} 
                    />
                </Stack.Navigator>
            </KeyboardAvoidingView>
        </NavigationContainer>
         
    )}

const styles = StyleSheet.create({
})

export default RootStack;