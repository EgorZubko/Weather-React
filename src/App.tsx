import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';

function App() {
	return (
		<div className="global_container">
			<div className="container">
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<Home
								header={{
									main: {
										temp: 0,
										pressure: 0,
									},
								}}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
