import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import styles from './weatherApp.module.css'

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const url = 'https://api.weatherapi.com/v1/current.json?aqi=no';
  const key = '15b4ad0f4bd14334a7d180036230601';

  useEffect(()=>{
    loadInfo();
  }, []);


  useEffect(()=>{
    document.title = `Weather | ${weather?.location.name ?? ''}`
  },[weather])

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${url} &key=${key}&q=${city}`
      );
      const json = await request.json();
      setWeather(json)
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);

  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
}
