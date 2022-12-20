import { Day } from '../../pages/Home/components/Days/Days';

export type Main = {
	[x: string]: any;
	temp: number;
	pressure: number;
	name: string;
	feels_like: number;
	speed: number;
	dt_txt: number;
};

export type Header = {
	main: {
		temp: number;
		pressure: number;
	};
};
export type CurrentList = {
	[x: string]: any;
	temp: number;
	pressure: number;
};
export type Wind = {
	speed: number;
};

export type City = {
	name: string;
};

export type CurrentData = {
	[x: string]: any;
	dt_txt: number;
};
export type Icons = {
	list: { weather: { icon: '' } };
};
export type List = Day[];
