import { ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import{View, Text, Button} from 'react-native';
import { db } from '@/firebaseConfig';
import {get} from 'firebase/database'

const FireBaseData = () => {

    const fetchData = async() => {
       try{
        const snapShot = await get(ref(db,'/'));
        if(snapShot.exists()){
            console.log(snapShot.val())
        }
        else
        {
            console.log("no data present");
        }
       }catch(error){
            console.log(error);
       }
    }
    return(
        <View style={{marginVertical : 50}}>
            <Button title='fetch data'  onPress={()=>fetchData()}></Button>
        </View>
    )

};

export default FireBaseData;
