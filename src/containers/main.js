import React, { useEffect, useState } from 'react';
import { Button } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../store/actions/liveweather';
import './main.css'
const Main = () => {
    const dispatch = useDispatch();
    const liveWeather = useSelector(state => state.weatherState.list==undefined?null:state.weatherState.list.data)

    const getWeatherValues = () => {
        navigator.geolocation.getCurrentPosition(success => {
            console.log(success)
            dispatch(getWeather(success.coords.latitude, success.coords.longitude))
        });
    }
    useEffect(() => {
        getWeatherValues()
    }, [])

    return (
        <div className='main'>
            <p>Location:{liveWeather==null?null:liveWeather.name}</p>
            <p>Temp:{liveWeather==null?null:liveWeather.main.temp}</p>
            <p>Feels Like:{liveWeather==null?null:liveWeather.main.feels_like}</p>
            <Button text='refresh' onClick={() => { getWeatherValues() }} />
        </div>
    )
}

export default Main