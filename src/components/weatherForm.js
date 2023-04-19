import React, { useState } from 'react'
import styles from './weatherForm.module.css'

function WeatherForm({onChangeCity}) {
    const [city, setCity] = useState('')
    function onChange(e){
     const value = e.target.value;

     if(value !== ''){
        setCity(value); 
     }
    
    }

    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);

    }
  return (
    <form  className={styles.container}>
        <input className={styles.input} type="text" onChange={onChange} placeholder='Write your city' />
        <div className={styles.bcontainer}><button className={styles.btn} onClick={handleSubmit}>Search</button></div>
    </form>
  )
}

export default WeatherForm