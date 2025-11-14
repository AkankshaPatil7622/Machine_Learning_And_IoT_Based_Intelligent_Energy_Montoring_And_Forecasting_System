import React, { useEffect, useState } from "react";
import { View} from "react-native";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const getStyle = (theme, colors) => ({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: theme === "dark" ? colors.background : "#FFF",
  },
});
const Weather = () => {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const styles = getStyle(theme, colors);

  const [weatherData, setWeatherData] = useState({
    windSpeed: "loading..",
    temperature: "loading..",
    pressure: "loading..",
    humidity: "loading..",
    Rain : "45%",
  });

  const fetchWeather = () => {
    const apiKey = "f382d6126afb91a1a0f8ecabe8f17788";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=gadhinglaj&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === 200) {
          setWeatherData({
            windSpeed: `${result.wind.speed} m/s`,
            temperature: `${result.main.temp} °C`,
            pressure: `${result.main.pressure} hPa`,
            humidity: `${result.main.humidity} %`,
          });
        } else {
          console.error("API Error:", result.message);
        }
      })
      .catch((error) => console.error("Fetch Error:", error));
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    // <LinearGradient colors={["#ade8f4", "#fff"]} style={styles.container}>

    <View style={styles.container}>
      <Card title="Wind speed" value={weatherData.windSpeed} />
      <Card title="Temperature" value={weatherData.temperature} />
      <Card title="Pressure" value={weatherData.pressure} />
      <Card title="Humidity" value={weatherData.humidity} />
      {/* <Card title="Rainfall" value="45 %" /> */}
    </View>

    // </LinearGradient>
  );
};
export default Weather;
