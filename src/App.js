import * as React from 'react';
import './App.css';
import Appbar from './component/Appbar.js';
import {Login} from './component/Login.js';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Login />
		</React.Fragment>
	);
}

export default App;