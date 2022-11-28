import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use((config) => {
	config.url =
		config.url + '&units=metric' + '&appid=a3b7b8f81839811693cb36f4aed92444';
	return config;
});

export default api;
