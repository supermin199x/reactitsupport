import * as React from 'react';
import './App.css';
import Home from './page/Home.jsx';
import {Login} from './component/Login.jsx';
import CssBaseline from '@mui/material/CssBaseline';



function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Login />
		</React.Fragment>
	);
}

export default App;