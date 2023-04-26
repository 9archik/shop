import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Registration from './Components/Header/AuthReg/Registration/Registration';

function App() {
  return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/registration" element={<Registration/>}  />
				<Route path="/authorization" />
			</Routes>
		</div>
	);
}

export default App;
