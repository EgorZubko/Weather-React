import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MonthStatistic } from './pages/MonthStatistic/components/MonthStatistic';
import { Home } from './pages/Home/components/Home';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';

function App() {
	return (
		<div className="global_container">
			{/* <Popup /> */}
			<div className="container">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/month-statistics" element={<MonthStatistic />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
