import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {
        borderColor: 'lightgray',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
    },
});

export default function Input() {
  return (
    <Box
        component="form"
        noValidate
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gridTemplateColumns: { sm: '1fr 1fr' },
            gap: 2,
        }}
    >
        <ValidationTextField
            label="Username"
            required
            variant="outlined"
            id="validation-outlined-input"
        />
        <ValidationTextField
            label="Password"
            required
            variant="outlined"
            id="validation-outlined-input"
        />
    </Box>
  );
}
