import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import jsonData from "../components/data.json"; // History data
import predictionData from "../components/prediction1.json"; // Prediction data
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import * as ScreenOrientation from "expo-screen-orientation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";

export const processJsonData = (data) => {
  const labels = data.map((item) => item.timestamp); // Extract timestamps
  const dataPoints = data.map((item) => item.unitConsumption); // Extract unit consumption values
  return { labels, dataPoints }; // Return the labels and data points
};

// Date formating function
const formatDateTime = (dateString, onlyDate = false) => {
  const date = new Date(dateString); // Convert date string into js Date object

  if (onlyDate) {
    return moment(date).format("MMMM Do YYYY"); // Show only date
  }

  const formattedDate = moment(date).format("MMMM Do YYYY"); // October 17th, 2024
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 24-hour time to 12-hour format
  const formattedTime = `${hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${ampm}`;

  return `${formattedDate}, ${formattedTime}`; // Return full date and time
};

// Daily consumption calculation
const calculateDailyConsumption = (jsonData) => {
  const dailyConsumption = {};

  jsonData.forEach((item) => {
    const date = moment(item.timestamp).format("YYYY-MM-DD");
    if (dailyConsumption[date]) {
      dailyConsumption[date] += item.unitConsumption;
    } else {
      dailyConsumption[date] = item.unitConsumption;
    }
  });

  const sortedDates = Object.keys(dailyConsumption).sort();
  const labels = sortedDates.map((_, index) => `${index + 1}`);
  const data = sortedDates.map((date) =>
    parseFloat(dailyConsumption[date].toFixed(2))
  );
  const dateMapping = sortedDates;

  return { labels, data, dateMapping };
};
const getStyle = (theme, colors) => ({
  Maincontainer: {
    flex: 1,
    padding: scale(16),
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: scale(16),
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: scale(16),
    borderRadius: scale(8),
    width: scale(150),
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  additionalButtonsContainer: {
    marginTop: scale(16),
  },
  additionalButton: {
    backgroundColor: "#2196F3",
    padding: scale(16),
    borderRadius: scale(8),
    marginBottom: scale(8),
  },
  selectedDateText: {
    marginTop: scale(16),
    fontSize: scale(16),
  },
  graphScreenIcons: {
    height: scale(90),
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop : scale(20)
  },
  rotation: {
    height: scale(50),
    width: scale(50),
    borderRadius: 50,
    marginHorizontal: scale(20),
    backgroundColor: theme === "dark" ? "#161a1d" : "#fff",
    marginVertical: scale(30),
  },
  rotationIcon: {
    justifyContent: "center",
    marginVertical: scale(12),
    marginLeft: scale(12),
  },
  BackIcon: {
    justifyContent: "center",
    marginVertical: scale(12),
    marginLeft: scale(12),
  },
  contentContainer: {
    backgroundColor: theme === "dark" ? colors.background : "#f5f5ff",
  },
});
const EnergyInsight = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);

  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [isGraphVisible, setIsGraphVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLandscape, setIsLandscape] = useState(false);
  const [chartConfig, setChartConfig] = useState({
    labels: [],
    data: [],
    dateMapping: [],
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    fetchDataForDate(date);
    hideDatePicker();
  };

  const fetchDataForDate = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    const dataSource =
      selectedCategory === "Prediction" ? predictionData : jsonData;

    try {
      const filteredData = dataSource.filter(
        (item) => moment(item.timestamp).format("YYYY-MM-DD") === formattedDate
      );

      if (filteredData.length > 0) {
        setData(filteredData);
        const processedData = processData(filteredData);
        setChartConfig(processedData);
        setIsGraphVisible(true);
      } else {
        Alert.alert("No data available for the selected date");
        setIsGraphVisible(false);
      }
    } catch (error) {
      Alert.alert("Error fetching data");
      setIsGraphVisible(false);
    }
  };

  const handleSelection = (option) => {
    if (option === "Daily Consumption") {
      const dataSource =
        selectedCategory === "Prediction" ? predictionData : jsonData;
      const processedData = calculateDailyConsumption(dataSource);
      setChartConfig(processedData);
      setSelectedCategory("Daily Consumption"); // Set the selected category for clarity
      setIsGraphVisible(true);
    } else {
      setSelectedCategory(option); // Set the selected category
      setIsGraphVisible(false); // Reset graph visibility
    }
  };

  //******************************** */
  const switchToLandScape = async () => {
    try {
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      if (isLandscape) {
        // Switch to portrait mode
        await ScreenOrientation.unlockAsync();
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
        StatusBar.setHidden(false);
      } else {
        // Switch to landscape mode
        await ScreenOrientation.unlockAsync();

        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
        );
        StatusBar.setHidden(true);
      }
      setIsLandscape(!isLandscape); // Toggle the state
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  //********************************************** */
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.graphScreenIcons}>
        <TouchableOpacity
          style={styles.rotation}
          onPress={() => navigation.goBack()}
        >
          {theme === "dark" ? (
            <Ionicons
              name="arrow-back-sharp"
              size={27}
              color="white"
              style={styles.BackIcon}
            />
          ) : (
            <Ionicons
              name="arrow-back-sharp"
              size={27}
              color="black"
              style={styles.BackIcon}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rotation}
          onPress={() => switchToLandScape()}
        >
          {theme === "dark" ? (
            <MaterialCommunityIcons
              name="phone-rotate-landscape"
              size={27}
              color="white"
              style={styles.rotationIcon}
            />
          ) : (
            <MaterialCommunityIcons
              name="phone-rotate-landscape"
              size={27}
              color="black"
              style={styles.rotationIcon}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.Maincontainer}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleSelection("History");
                setShowAdditionalButtons(true);
              }}
            >
              <Text style={styles.buttonText}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleSelection("Prediction");
                setShowAdditionalButtons(true);
              }}
            >
              <Text style={styles.buttonText}>Prediction</Text>
            </TouchableOpacity>
          </View>

          {showAdditionalButtons && (
            <View style={styles.additionalButtonsContainer}>
              <TouchableOpacity
                style={styles.additionalButton}
                onPress={() => handleSelection("Daily Consumption")}
              >
                <Text style={styles.buttonText}>Daily Consumption</Text>
              </TouchableOpacity>

              {selectedCategory === "History" && (
                <TouchableOpacity
                  style={styles.additionalButton}
                  onPress={showDatePicker}
                >
                  <Text style={styles.buttonText}>Select Date</Text>
                </TouchableOpacity>
              )}
            </View>
          )}

          {selectedDate && (
            <Text style={styles.selectedDateText}>
              Selected Date: {moment(selectedDate).format("MMMM Do YYYY")}
            </Text>
          )}

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />

          {isGraphVisible && chartConfig.data.length > 0 && (
            <ScrollView horizontal={true}>
              <View style={{ width: chartConfig.data.length * 40 }}>
                <LineChart
                  data={{
                    labels: chartConfig.labels,
                    datasets: [{ data: chartConfig.data }],
                  }}
                  width={chartConfig.data.length * 40}
                  height={verticalScale(200)}
                  yAxisSuffix=" kWh"
                  chartConfig={{
                    backgroundColor: "#F8F8F8",
                    backgroundGradientFrom: "#F8F8F8",
                    backgroundGradientTo: "#F8F8F8",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: { borderRadius: scale(1) },
                    propsForDots: {
                      r: scale("4"),
                      strokeWidth: scale("2"),
                      stroke: "#ffa726",
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: scale(8),
                    borderRadius: moderateScale(8),
                  }}
                  onDataPointClick={({ index, value }) => {
                    if (index !== undefined && value !== undefined) {
                      if (
                        selectedCategory === "Daily Consumption" &&
                        chartConfig.dateMapping
                      ) {
                        const dateKey = chartConfig.dateMapping[index];
                        const totalConsumption =
                          chartConfig.data[index].toFixed(2);
                        const formattedDate = formatDateTime(dateKey, true);
                        Alert.alert(
                          `${formattedDate}:`,
                          `Total Consumption: ${totalConsumption} kWh`
                        );
                      } else {
                        const timestamp = data[index]?.timestamp;
                        if (timestamp) {
                          const formattedDateTime = formatDateTime(timestamp);
                          Alert.alert(
                            `Energy Consumption: ${value.toFixed(
                              2
                            )} kWh on ${formattedDateTime}`
                          );
                        } else {
                          Alert.alert(
                            "Error retrieving timestamp for this data point."
                          );
                        }
                      }
                    } else {
                      Alert.alert("Error retrieving data for this point.");
                    }
                  }}
                />
              </View>
            </ScrollView>
          )}
        </View>
      </View>
      {isGraphVisible ? (
        <View>
          <Text style={{ marginLeft: scale(10), fontWeight: "600" }}>
            Numbers on x-axis indicates days
          </Text>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default EnergyInsight;
