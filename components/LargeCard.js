import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';
import { scale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';

const getStyle = (theme,colors) =>( {
    bigCard : {
        height : scale(200),
        width : '90%',
        backgroundColor : theme === "dark" ? "#161a1d" : "#fff",
        borderRadius : scale(5),
        alignSelf : "center",
        marginVertical : scale(20),
        alignItems : "center",
    },
    img : {
        height : scale(100),
        width : scale(100),
        borderRadius : scale(50),
        marginTop : scale(20)

    },
    usernameText : {
        fontSize : scale(18),
        fontWeight : "600",
        color : theme === "dark" ? colors.text : "#000",
    },
    emailText : {
        fontSize : scale(13),
        fontWeight : "600",
        color : theme === "dark" ? colors.text : "#000",
    }
  
  })
const LargeCard = () => {
    const theme = useSelector((state)=>state.theme.theme);
    const colors = useSelector((state)=>state.theme.colors);
    const styles = getStyle(theme,colors);
  return (
   <View style={styles.bigCard}>
    <Image source={require('@/assets/images/profile.jpg')} style={styles.img}/>
   <View style={{justifyContent : "center", alignItems : "center", marginTop : scale(10)}}>
   <Text style={styles.usernameText}>Akanksha Patil</Text>
   <Text style={styles.emailText}>akanksha123@gmail.com</Text>
   </View>
   </View>
  )
}

export default LargeCard
