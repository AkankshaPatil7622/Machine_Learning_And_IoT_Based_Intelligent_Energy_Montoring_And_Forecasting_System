import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import EnergyInfo from '../components/EnergyInfo';
import EnergyInsight from '../screens/EnergyInsight';


const Stack = createStackNavigator();
const EnergyStack = () => {

  return (
   <Stack.Navigator
   screenOptions={{
    headerShown : false,
   }
 
   }>
    <Stack.Screen name='Energy Info' component={EnergyInfo} />
    <Stack.Screen name='Graph' component={EnergyInsight}/>
   </Stack.Navigator>
  )
}

export default EnergyStack;
