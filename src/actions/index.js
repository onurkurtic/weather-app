import Axios from "axios";

const API_KEY = "f1a1820e2db3c73e14cc53bc95d59b1a";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}${city},ca&appid=${API_KEY}`;
    const request = Axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}