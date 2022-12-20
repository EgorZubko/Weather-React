import React, { useState } from 'react';
import s from './Popup.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { DayItem } from '../../pages/Home/components/ThisDayInfo/DayItem';
interface Props {}

type PopUpProps = {
	active: boolean;
	setActive: (value: boolean) => void;
};

export const Popup = ({ active, setActive }: PopUpProps) => {
	return (
		<>
			<div className={s.blur}></div>
			<div
				className={active ? s.modalContent : s.modal}
				onClick={() => setActive(false)}
			>
				<div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
					<h1>Показ более 5-ти дней погоды платный. Купи подписку,по брацки</h1>
				</div>
				<div className={s.close}>
					<GlobalSvgSelector id="close" />
				</div>
			</div>
		</>
	);
};

// export const Popup = ({ activePopup }: PopUpProps) => {
// 	// const { active, setActive } = useState(false);
// 	// setActive(activePopup);

// 	return (
// 		<>
// 			{/* <div className={active ? 'popup active' : s.popup}>
// 				<h1>бла бла</h1>
// 			</div> */}
// 		</>

// 		// 	<>
// 		// 		<div className={s.blur}></div>
// 		//
// 		// 			<div className={s.day}>
// 		// 				<div className={s.day__temp}>20°</div>
// 		// 				<div className={s.day__name}>Среда</div>
// 		// 				<div className={s.img}>
// 		// 					<GlobalSvgSelector id="sun" />
// 		// 				</div>
// 		// 				<div className={s.day__time}>
// 		// 					Время: <span>21:54</span>
// 		// 				</div>
// 		// 				<div className={s.day__city}>
// 		// 					Время: <span>Санкт-Петербург</span>
// 		// 				</div>
// 		// 			</div>
// 		// 			<div className={s.this__day_info_items}>
// 		// 				{items.map((item: Item) => (
// 		// 					<DayItem key={item.icon_id} item={item} />
// 		// 				))}
// 		// 			</div>
// 		// 			<div className={s.close}>
// 		// 				<GlobalSvgSelector id="close" />
// 		// 			</div>
// 		// 		</div>
// 		// 	</>
// 	);
// };
