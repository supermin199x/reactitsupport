import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Buttons() {
	return (
		<Stack direction="row" spacing={2} marginTop={5}>
			<Button size="large" variant="contained">
				Login
			</Button>
		</Stack>
	);
}