import React, { useState } from 'react';
import { Popup } from '../../../../shared/Popup/Popup';
import s from './Days.module.scss';

interface Props {}

export const Tabs = (props: Props) => {
	const tabs = [
		{
			value: 'На неделю',
		},
		{
			value: 'На 10 дней',
		},
		{
			value: 'На месяц',
		},
	];
	const [popupActive, setPopupActive] = useState(false);
	return (
		<>
			<Popup active={popupActive} setActive={setPopupActive} />
			<div className={s.tabs}>
				<button className={s.tab} onClick={() => setPopupActive(true)}>
					open popup
				</button>

				<div className={s.tabs__wrapper}>
					{tabs.map((tab) => (
						<div className={s.tab} key={tab.value}>
							{tab.value}
						</div>
					))}
				</div>
				<div className={s.cancel}>Отменить</div>
			</div>
		</>
	);
};

// export const Tabs = () => {
// 	const [popupActive, setPopupActive] = useState(false);
// 	const tabs = [
// 		{
// 			value: 'На неделю',
// 			callback: () => {
// 				console.log('нажато');
// 			},
// 		},
// 		{
// 			value: 'На 10 дней',
// 			callback: () => {
// 				console.log('нажато');
// 			},
// 		},
// 		{
// 			value: 'На месяц',
// 			callback: () => {
// 				console.log('нажато');
// 			},
// 		},
// 		{
// 			value: 'нажми',
// 			callback: () => {
// 				console.log('нажато');
// 			},
// 		},
// 	];
// 	const viewPopup = () => {
// 		// redux.stateBTN(true);
// 	};

// 	return (
// 		<div className={s.tabs}>
// 			{tabs.map(({ value }) => (
// 				<button onClick={viewPopup}>{value}</button>
// 			))}

// 			<Popup activePopup={s.popupActive} setActive={setPopupActive} />
// 			<div className={s.tabs__wrapper}>
// 				{tabs.map((tab) => (
// 					<div className={s.tab} key={tab.value}>
// 						{tab.value}
// 					</div>
// 				))}
// 			</div>
// 			<div className={s.cancel}>Отменить</div>
// 		</div>
// 	);
// };
