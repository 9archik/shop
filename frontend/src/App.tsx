import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Registration from './Components/Header/AuthReg/Registration/Registration';
import Favorite from './Components/Favorite/Favorite';
import Bucket from './Components/Bucket/Bucket';
import Main from './Components/Main/Main';


function App() {
  return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/favorite" element={<Favorite />} />
				<Route path="/bucket" element={<Bucket />} />
				<Route path="/" element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;
