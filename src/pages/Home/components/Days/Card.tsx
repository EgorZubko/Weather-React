import React from 'react';
import { Day } from './Days';
import { List } from '../../../../store/types/Types';
import { DateTime } from 'luxon';
import moment from 'moment';

import s from './Days.module.scss';

interface Props {
	day: Day;
	list: List;
}

interface Props {}

export const Card = ({ day }: Props) => {
	const ms = day.dt * 1000;
	const weekdayName = new Date(ms).toLocaleString('ru', { weekday: 'long' });
	const slise = weekdayName.slice(0, 1).toUpperCase() + weekdayName.slice(1);

	const date = moment(ms).format('D MMM');

	return (
		<div className={s.card}>
			<div className={s.day}>{slise}</div>
			<div className={s.day__info}>{date}</div>
			<img
				className={s.svg}
				src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`}
				alt=""
			/>
			<div className={s.temp__day}>{Math.round(day.main.temp_max)}</div>
			<div className={s.temp__night}>{Math.round(day.main.temp_min)}</div>
			<div className={s.info}>{day.weather[0].description}</div>
		</div>
	);
};
