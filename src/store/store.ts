import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentWeather from './slices/currentWeatherSlise';

const rootReducer = combineReducers({
	currentWeather,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
