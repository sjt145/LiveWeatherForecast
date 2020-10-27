
import * as actionType from './types';
import axios from 'axios'
const url = 'http://localhost:4000/'
export const fetchWeatherState = () => {
    return {
        type: actionType.LIVEWEATHER_SAVE_START
    }
}

export const fetchWeatheSuccess = (liveweather) => {
    return {
        type: actionType.LIVEWEATHER_SAVE_SUCCESS,
        value: liveweather
    }
}

export const fetchWeatheFailure = (error) => {
    return {
        type: actionType.LIVEWEATHER_SAVE_FAILURE,
        value: error
    }
}

export const getWeather = (lat, lon) => {
    return dispatch => {
        dispatch(fetchWeatherState())
        try {
            // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
            axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=7b6fa4e034676a6c7d10aff8a7ad2ba9')
                .then((response) => {
                    console.log("response..", response);
                    dispatch(fetchWeatheSuccess(response))
                })
                .catch(error => {
                    console.log("error..", error);
                    dispatch(fetchWeatheFailure(error))
                })
        } catch (error) {
            dispatch(fetchWeatheFailure(error))
        }
    }
}
