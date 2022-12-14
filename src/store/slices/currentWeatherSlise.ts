import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Weather } from '../types/Types';

type CurrentWeather = {
	weather: Weather;
	isLoading: boolean;
	response: Response;
};

type Response = {
	status: number;
	message: string;
};



const initialState: CurrentWeather = {
	weather: {
		main: {
			temp: 0,
			pressure: 0,
		},
		name: '',
	},
	isLoading: false,
	response: {
		status: 0,
		message: '',
	},
	
};

export const CurrentWeatherSlice = createSlice({
	name: 'current_weather',
	initialState,
	reducers: {
		fetchCurrentWeather(state) {
			state.isLoading = true;
		},
		fetchCurrentWeatherSucceess(
			state,
			action: PayloadAction<AxiosResponse<Weather>>
		) {
			state.weather = action.payload.data;
			state.isLoading = false;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			};
		},
		fetchCurrentWeatherError(
			state,
			action: PayloadAction<AxiosResponse<Weather>>
		) {
			state.isLoading = false;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			};
		},
	},
});

export default CurrentWeatherSlice.reducer;
