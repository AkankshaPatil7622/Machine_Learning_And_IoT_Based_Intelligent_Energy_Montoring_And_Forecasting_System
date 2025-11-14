import {View, Text, Settings} from 'react-native'
import MainScreen from '@/screens/MainScreen';
import Register from '@/screens/Register'
import Login from '@/screens/Login';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Provider} from "react-redux";
import {store} from "@/screens/redux/Store";
import Setting from "@/screens/Setting";
import UpdateProfile from "@/screens/UpdateProfile";
import Help from "@/screens/Help";
import SplashScreen from "@/screens/SplashScreen";
import SignUp from "@/screens/SignUp";
import FireBaseData from "@/components/FireBaseData"



const Stack = createNativeStackNavigator();
export default function RouteLayout() {
  return(
   <Provider store={store}>
     <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown : false}}>
     <Stack.Screen name='SplashScreen' component={SplashScreen}/>
    <Stack.Screen name="mainscreen" component={MainScreen} />
    <Stack.Screen name='setting' component={Setting}/>
    <Stack.Screen name='updateprofile' component={UpdateProfile}/>
    <Stack.Screen name='help' component={Help}/>
    <Stack.Screen name='signup' component={SignUp}/>
    <Stack.Screen name='login' component={Login}/>
  </Stack.Navigator>
    
   </Provider>
   
  )
}