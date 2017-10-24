import axios from 'axios';
const API_KEY="2aabb1b5ab1f2578163c471e9e65743f";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
export const FETCH_WEATHER = ' FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}