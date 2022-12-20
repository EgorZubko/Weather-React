import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/img/cloud.png';
import { DayItem } from './DayItem';
import { Main, Wind } from '../../../../store/types/Types';

interface Props {
	weather: Main;
	wind: Wind;
}

export interface Item {
	icon_id: string;
	name: string;
	value: string;
}

export const ThisDayInfo = ({ weather, wind }: Props) => {
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: `${Math.floor(weather.temp)} ° - ощущается как ${Math.floor(
				weather.feels_like
			)}°`,
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: `${weather.pressure} мм ртутного столба - нормальное`,
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: 'Без осадков',
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: `${wind.speed} м/с юго-запад - легкий ветер`,
		},
	];
	return (
		<div className={s.this__day_info}>
			<div className={s.this__day_info_items}>
				{items.map((item: Item) => (
					<DayItem key={item.icon_id} item={item} />
				))}
			</div>
			<img className={s.cloud__img} src={cloud} alt="облако" />
		</div>
	);
};
