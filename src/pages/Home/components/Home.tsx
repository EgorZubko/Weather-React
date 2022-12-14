import React, { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { selectCurrentWeatherData } from '../../../store/selectors';
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather';
import { Days } from './Days/Days';
import s from './Home.module.scss';
import { ThisDay } from './ThisDay/ThisDay';
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo';
import { Header } from '../../../store/types/Types';

interface Props {
	header: Header;
}

export const Home = ({ header }: Props) => {
	const dispatch = useCustomDispatch();
	const { main, wind, city, currentData, icons } = useCustomSelector(
		selectCurrentWeatherData
	);

	useEffect(() => {
		dispatch(fetchCurrentWeather(''));
	}, []);
	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<ThisDay
					main={main}
					city={city}
					currentData={currentData}
					icons={icons}
				/>
				<ThisDayInfo weather={main} wind={wind} />
			</div>
			<Days />
		</div>
	);
};
