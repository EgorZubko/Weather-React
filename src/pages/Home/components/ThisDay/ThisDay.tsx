import React, { useEffect, useState } from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { City, Main, CurrentData, Icons } from '../../../../store/types/Types';
import s from './ThisDay.module.scss';
import { DateTime } from 'luxon';

interface Props {
	main: Main;
	city: City;
	currentData: CurrentData;
	icons: Icons;
}

export const ThisDay = ({ main, city, currentData, icons }: Props) => {
	const [time, setTime] = useState(
		DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS)
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS));
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div className={s.this_day}>
			<div className={s.top_block}>
				<div className={s.top_block_wrapper}>
					<div className={s.this_temp}>{Math.floor(main.temp)}°</div>
					<div className={s.this_day_name}>Сегодня</div>
				</div>
				<img
					className={s.svg}
					src={`https://openweathermap.org/img/w/${icons}.png`}
					alt=""
				/>
			</div>
			<div className={s.bottom_block}>
				<div className={s.this_time}>
					Время:<span>{time}</span>
				</div>
				<div className={s.this_city}>
					Город: <span>{city.name}</span>
				</div>
			</div>
		</div>
	);
};
