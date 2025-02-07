import Buttons from '@/components/Buttons';
import React from 'react'
import {View,Text} from "react-native"
import { useSelector } from 'react-redux';


const getStyle = (theme,colors) =>( {
    container : {
      flex : 1,
      backgroundColor : theme === "dark" ? colors.background : "#f5f5ff"
    },
  
  })
const UpdateProfile = () => {
    const theme = useSelector((state)=>state.theme.theme);
    const colors = useSelector((state)=>state.theme.colors);
    const styles = getStyle(theme,colors);

  return (
    <View style={styles.container}>
        <Buttons btnName="Update" />
    </View>
  )
}

export default UpdateProfile
