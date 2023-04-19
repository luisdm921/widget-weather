import React from "react";
import styles from './weatherMainInfo.module.css'

function WeatherMainInfo({ weather }) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            alt={weather?.current.condition.text}
            width="128px"
          />
        </div>
        <div className={styles.weatherCondition}>
          <div className={styles.codition}>{weather?.current.condition.text}</div>
          <div className={styles.current}>{weather?.current.temp_c}°</div>
        </div>
      </div>
      <iframe
      title="map"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14412.791272039398!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1673037191677!5m2!1ses-419!2smx`}
        width="100%"
        height="50%"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default WeatherMainInfo;
