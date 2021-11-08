import axios from 'axios';

const api = axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5/weather?appid=e18423ea1f326e9db0676e0ca18b0003&units=metric"
});

export default api;
