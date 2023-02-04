import * as React from 'react';
import './App.css';
import {Login} from './component/Login.jsx';
import {Home} from './page/Home.jsx';
import {Joblist} from './page/Joblist.jsx';
import {Report} from './page/Report.jsx';
import {Device} from './page/Device.jsx';
import {Dashboard} from './page/Dashboard.jsx';
import {Error} from './page/Error.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route index element={<Login />} />
					<Route path="joblist" element={<Joblist />} />
					<Route path="report" element={<Report />} />
					<Route path="device" element={<Device />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;