import { WeatherService } from '../../services/WeatherService';
import { AppDispatch } from '../store';
import { CurrentWeatherSlice } from '../slices/currentWeatherSlise';

export const fetchCurrentWeather =
	(payload: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(CurrentWeatherSlice.actions.fetchCurrentWeather());
			const res = await WeatherService.getCurrentWeather(payload);
			if (res.status === 200) {
				dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherSucceess(res));
			} else {
				dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherError(res));
			}
		} catch (error) {
			console.log(error);
		}
	};
