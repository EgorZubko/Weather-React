import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import {
	City,
	CurrentList,
	Main,
	Wind,
	CurrentData,
	Icons,
	List,
} from '../types/Types';

type CurrentWeather = {
	currentList: CurrentList;
	main: Main;
	wind: Wind;
	city: City;
	currentData: CurrentData;
	isLoading: boolean;
	response: Response;
	icons: Icons;
	list: List;
};

type Response = {
	status: number;
	message: string;
};

const initialState: CurrentWeather = {
	currentList: {
		temp: 0,
		pressure: 0,
	},

	main: {
		temp: 0,
		pressure: 0,
		feels_like: 0,
		speed: 0,
		name: '',
		dt_txt: 0,
	},
	wind: {
		speed: 0,
	},
	city: {
		name: '',
	},

	currentData: {
		dt_txt: 0,
	},

	isLoading: false,
	response: {
		status: 0,
		message: '',
	},
	icons: {
		list: { weather: { icon: '' } },
	},
	list: [],
};

export const currentWeatherSlice = createSlice({
	name: 'currentWeather',
	initialState,
	reducers: {
		fetchCurrentWeather(state) {
			state.isLoading = true;
		},
		fetchCurrentWeatherSucceess(
			state,
			action: PayloadAction<AxiosResponse<Main>>
		) {
			state.main = action.payload.data.list[0].main;
			state.currentList = action.payload.data;
			state.wind = action.payload.data.list[0].wind;
			state.city = action.payload.data.city;
			state.icons = action.payload.data.list[0].weather[0].icon;
			state.list = action.payload.data.list;
			state.isLoading = false;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			};
		},
		fetchCurrentWeatherError(
			state,
			action: PayloadAction<AxiosResponse<Main>>
		) {
			state.isLoading = false;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			};
		},
	},
});

export default currentWeatherSlice.reducer;
