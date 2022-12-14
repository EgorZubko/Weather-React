import { AxiosResponse } from 'axios';
import api from '../axios';
import { Weather } from '../store/types/Types';
const key = 'a3b7b8f81839811693cb36f4aed92444';

export class WeatherService {
	static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
		return api.get<Weather>(`/forecast?q=${city} &appid=${key}`);
	}
}
