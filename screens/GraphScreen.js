import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { scale } from "react-native-size-matters";
import EnergyButtons from "../components/EnergyButtons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const GraphScreen = () => {
  const [Data, setData] = useState([]);
  const [date, setDate] = useState(new Date().toLocaleString());
  const [showPicker, setShowPicker] = useState(false);
  const [catagory,setCatagory]= useState('History');

  const selectedCatagory = (title) =>{
    setCatagory(title)
  }

  const showDatePicker = () => {
    setShowPicker(true);
    
  };

  const hideDatePicker = () => {
    setShowPicker(false);
  };

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate.toLocaleString()); // Convert date to readable format
    hideDatePicker();
  };

  return (
    <View>
      <View style={styles.btnContainer}>
        <EnergyButtons title="History" style={{backgroundColor : "#1db954"}} onpress={()=>selectedCatagory('History')}/>
        <EnergyButtons title="Prediction" style={{backgroundColor : "#1db954"}} onpress={()=>selectedCatagory('Prediction')}/>
      </View>
    <Text style={{ textAlign: "center", fontWeight: "600" }}>{catagory}</Text>
      <View style={styles.ExtraBtn}>
        <EnergyButtons
          title="Daily Consumption"
          style={{
            backgroundColor: "#2196F3",
            width: "88%",
            marginHorizontal: scale(20),
            marginTop: scale(5),
          }}
        />
        <EnergyButtons
          title="Select Date"
          style={{
            backgroundColor: "#2196F3",
            width: "88%",
            marginHorizontal: scale(20),
            marginTop: scale(5),
          }}
          onpress={()=>showDatePicker()}
        />
      </View>
      <Text style={{ textAlign: "center", fontWeight: "600" }}>
        Date : {date}
      </Text>
      <DateTimePickerModal
        isVisible={showPicker}
        mode="date" // Change to "time" for time picker
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View>
        <FlatList
          data={Data}
          renderItem={(item) => {
            item;
          }}
        />
      </View>
    </View>
  );
};

export default GraphScreen;
const styles = StyleSheet.create({
  btnContainer: {
    height: scale(80),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ExtraBtn: {},
});
