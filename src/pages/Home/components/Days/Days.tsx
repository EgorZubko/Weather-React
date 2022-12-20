import moment from 'moment';
import React, { ReactNode } from 'react';
import { useCustomSelector } from '../../../../hooks/store';
import { Card } from './Card';

import s from './Days.module.scss';
import { Tabs } from './Tabs';

interface Props {}

export interface Day {
	date: ReactNode;
	weekdayName: ReactNode;
	dt_txt: ReactNode;
	icon: any;
	weather: any;
	main: any;
	dt: number;
	day: string;
	day_info: string;
	temp_day: string;
	temp_night: string;
	info: string;
	description: string;
}

export const Days = ({}: Props) => {
	const date = moment().format('D MMM');
	const list = useCustomSelector((state) =>
		state.currentWeather.list.filter((day: any, index: number) => {
			return index % 8 === 0;
		})
	);

	return (
		<>
			<Tabs />
			<div className={s.days}>
				{list.map((day: Day) => (
					<Card day={day} key={day.dt} list={[]} />
				))}
			</div>
		</>
	);
};
