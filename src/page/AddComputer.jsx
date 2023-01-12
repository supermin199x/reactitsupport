import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

const Item = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2),
	textAlign: 'center',
	borderRadius: '3px',
	color: theme.palette.text.secondary,
	display: 'flex',
	flexDirection: 'column',
	rowGap: '10px',
    width: '400px',
    borderRadius: '10px',
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

export function AddComputer(){

    const [fullname, setFullname] = useState({});
	const [department, setDepartment] = useState();
    const [devicetype, setDevicetype] = useState();
    const [devicename, setDevicename] = useState();
    const [problem, setProblem] = useState();

    const handlesubmit = () => {
		console.log("fullname :" + fullname);
        console.log("department :" + department);
        console.log("devicetype :" + devicetype);
        console.log("devicename :" + devicename);
        console.log("problem :" + problem);
	}
    
    return (
        <>
            <Item>
                <Title>เพิ่มคอมพิวเตอร์</Title>
                <ValidationTextField
                    label="ชื่อผู้ใช้งาน"
                    type="text"
                    variant="outlined"
                    id="fullname"
                    size="medium"
                    autoComplete='off'
                    required
                    onChange={(e) => setFullname(e.target.value)}
                />
                <ValidationTextField
                    label="แผนก"
                    type="text"
                    variant="outlined"
                    id="department"
                    size="medium"
                    autoComplete='off'
                    required
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <ValidationTextField
                    label="ประเภทอุปกรณ์"
                    type="text"
                    variant="outlined"
                    id="devicetype"
                    size="medium"
                    autoComplete='off'
                    required
                    onChange={(e) => setDevicetype(e.target.value)}
                />
                <ValidationTextField
                    label="ชื่อเครื่อง"
                    type="text"
                    variant="outlined"
                    id="devicename"
                    size="medium"
                    autoComplete='off'
                    required
                    onChange={(e) => setDevicename(e.target.value)}
                />
                <ValidationTextField
                    label="อาการ"
                    type="text"
                    variant="outlined"
                    id="problem"
                    size="medium"
                    autoComplete='off'
                    required
                    onChange={(e) => setProblem(e.target.value)}
                />
                <ButtonLogin size="large" onClick={handlesubmit} variant="contained" >
                    SEND
                </ButtonLogin>
            </Item>
        </>
    );
}