import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
import style from 'styled-components';
import Typography from '@mui/material/Typography';


const Item = styled(Box)(({ theme }) => ({
	padding: theme.spacing(6),
	textAlign: 'center',
	borderRadius: '3px',
	color: theme.palette.text.secondary,
	display: 'flex',
	flexDirection: 'column',
	rowGap: '10px',
	width: '400px',
}));
 
const Title = styled(Typography)({
	fontSize: '30px',
  	fontWeight: '700',
	marginBottom:'20px',
	color: '#2D333A'
});

const ValidationTextField = styled(TextField)({
	'& input:valid + fieldset': {
		borderColor: 'green',
		borderWidth: 2,
	},
	'& input:invalid + fieldset': {
		borderColor: '!important',
		borderWidth: 2,
	},
	'& input:valid:focus + fieldset': {
		borderLeftWidth: 6,
		padding: '4px !important', 
	},
});

const ButtonLogin = styled(Button)({
	height: '50px',
	fontSize: '18px',
	marginTop: '20px',
});

export function Login() {

	let navigate = useNavigate();

	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handlesubmit = () => {
		console.log(username + password);
		navigate('/joblist');
	}

	return (
		<Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
			<Grid container padding={10} xl={4}>
				<Grid xs={12} padding="0px">
					<Item>
						<Title>IT Support</Title>
						<ValidationTextField
							label="Username"
							type="text"
							variant="outlined"
							id="username"
							size="medium"
							autoComplete='off'
							required
							onChange={(e) => setUsername(e.target.value)}
						/>
						<ValidationTextField
							label="Password"
							type="password"
							variant="outlined"
							id="password"
							size="medium"
							autoComplete='off'
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
						<ButtonLogin size="large" onClick={handlesubmit} variant="contained" endIcon={<SendIcon />}>
							Login
						</ButtonLogin>
					</Item>
				</Grid>
			</Grid>
		</Box>
  	);
}