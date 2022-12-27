import * as React from 'react';
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

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(6),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	display: 'flex',
	flexDirection: 'column',
	rowGap: '10px',
  }));

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

export function Login() {
	return (
		<Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7F7F8' }}>
			<Grid container padding={10} xl={4}>
				<Grid xs={12}>
					<Item>
						<ValidationTextField
							label="Username"
							type="text"
							variant="outlined"
							id="validation-outlined-input"
							size="small"
							autoComplete='off'
							required
						/>
						<ValidationTextField
							label="Password"
							type="password"
							variant="outlined"
							id="validation-outlined-input"
							size="small"
							autoComplete='off'
							required
						/>
						<Button variant="contained" endIcon={<SendIcon />}>
							Login
						</Button>
					</Item>
				</Grid>
			</Grid>
		</Box>
  	);
}