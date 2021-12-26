import React from "react";
import {
    View,
    Text,
    StyleSheet, 
} from "react-native";
import {CreateBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feddback from "../Screens/Feedback";
import CreatePost from "../screens/CreatePost";
import { resourceLimits } from "worker_threads";

const Tab = createBottomTabNavigator();
const BottomTabNavigator= () =>{
    return(
        <Tab.Navigator
          screensOptions={({route})=>({
            tabBarIcon:({focused, color, size})=>{
                let iconName;
                if(route.name === 'Feed'){
                    iconName = focused ?'book': 'book-outline';
                }
                else if(resourceLimits.name === 'CreatePost'){
                    iconName = focused ? 'create': 'create-outline';
                }
                return( <Ionicons name={iconName} size={size} color={color} />)
            },        
            
          })}
          tabBarOptions={{
            acitveTintColor:'tomato',
            inactiveTintColor:'gray',
        }}  >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="CreatePost" component={CreatePost}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator

export default class Feedback extends Component {
    
    render() {
        return(
        <View></View>
        )
        
        }
    }


const styles = StyleSheet.create({
   
});