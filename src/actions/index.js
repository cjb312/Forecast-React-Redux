import axios from 'axios';

// f5724ce6122affa9699ef9d1e6d08c61
const API_KEY = 'c22a3a4b4fdcd7d6c133d89090dcfac5';
/*using es6 template strings instead. kind of cleaner i guess
const URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=s' + API_KEY; */
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// instead of using 'FETCH_WEATHER' as a string in type made it a 
// variable so action types stay consistent between action creators and reducers 
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	// Static us country code 
	//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
	const url = `${ROOT_URL}&q=${city},us&units=imperial`
	const request = axios.get(url);



	return{
		type: FETCH_WEATHER,
		payload: request
	};
}
