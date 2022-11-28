import React, { useEffect } from 'react';
import { useCustomDispatch } from '../../../hooks/store';
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather';
import { Days } from './Days/Days';
import s from './Home.module.scss';
import { ThisDay } from './ThisDay/ThisDay';
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo';

// interface Props {}
// export const Home = (props: Props) => {
// 	const dispatch = useCustomDispatch();
// 	useEffect(() => {
// 		dispatch(fetchCurrentWeather('paris'));
// 	}, []);

// 	return (
// 		<div className={s.home}>
// 			<div className={s.wrapper}>
// 				<ThisDay />
// 				<ThisDayInfo />
// 			</div>
// 			<Days />
// 		</div>
// 	);
// };
interface Props {}

export const Home = (props: Props) => {
	const dispatch = useCustomDispatch();
	// const { weather } = useCustomSelector(selectCurrentWeatherData);

	useEffect(() => {
		dispatch(fetchCurrentWeather('minsk'));
	}, []);
	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<ThisDay />
				<ThisDayInfo />
			</div>
			<Days />
		</div>
	);
};
function useCustomSelector(selectCurrentWeatherData: any): { weather: any } {
	throw new Error('Function not implemented.');
}
