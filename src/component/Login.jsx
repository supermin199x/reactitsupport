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
	padding: theme.spacing(3),
	textAlign: 'center',
	borderRadius: '3px',
	color: theme.palette.text.secondary,
	display: 'flex',
	flexDirection: 'column',
	rowGap: '10px',
	width: '400px',
	height: 'fit-content',
	backgroundColor: 'white',
	justifyContent: 'center', 
	alignItems: 'center'
}));
 
const Title = styled(Typography)({
	fontSize: '40px',
  	fontWeight: '900',
	marginBottom:'30px',
	color: '#1567C2',
});

const ValidationTextField = styled(TextField)({
	width: '100%',
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
	width: '100%',
	height: '50px',
	fontSize: '16px',
	marginTop: '20px',
});


export function Login() {
	let navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handlesubmit = (e) => {
		console.log(username + password);
		if(username === "admin" && password === "admin")
		{ 	navigate('/joblist');
		}
		else
		{	alert("ไม่พบผู้ใช้งาน");
			setUsername('');
			setPassword('');
		}
	}

	return (
		<Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F6F7F9' }}>
			<Grid padding={10} xl={4}>
				<Grid xs={12} padding="0px">
					<Item>
						<Title>IT SUPPORT</Title>
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