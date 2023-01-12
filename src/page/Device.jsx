import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Appbar from '../component/Appbar.jsx';
import { AddComputer } from './AddComputer.jsx';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-contents',
    height: 'fit-contents',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
  };

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px',
    width: '200px',
    height: '200px',
    cursor: 'pointer',
}));

const BoxItem = styled(Box)(() => ({
    overflowY: 'scroll',
    height: '75vh',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

const computer = [
    {
        id: '1',
        label: 'hawk',
    },
    {
        id: '2',
        label: 'chamomile',
    },
    {
        id: '3',
        label: 'swan',
    },
    {
        id: '4',
        label: 'leopard',
    },
    {
        id: '5',
        label: 'skunk',
    },
    {
        id: '6',
        label: 'goat',
    },
    {
        id: '6',
        label: 'toad',
    },
    {
        id: '1',
        label: 'hawk',
    },
    {
        id: '2',
        label: 'chamomile',
    },
    {
        id: '3',
        label: 'swan',
    },
    {
        id: '4',
        label: 'leopard',
    },
    {
        id: '5',
        label: 'skunk',
    },
    {
        id: '6',
        label: 'goat',
    },
    {
        id: '6',
        label: 'toad',
    },
    {
        id: '1',
        label: 'hawk',
    },
    {
        id: '2',
        label: 'chamomile',
    },
    {
        id: '3',
        label: 'swan',
    },
    {
        id: '4',
        label: 'leopard',
    },
    {
        id: '5',
        label: 'skunk',
    },
    {
        id: '6',
        label: 'goat',
    },
    {
        id: '6',
        label: 'toad',
    },
    {
        id: '1',
        label: 'hawk',
    },
    {
        id: '2',
        label: 'chamomile',
    },
    {
        id: '3',
        label: 'swan',
    },
    {
        id: '4',
        label: 'leopard',
    },
    {
        id: '5',
        label: 'skunk',
    },
    {
        id: '6',
        label: 'goat',
    },
    {
        id: '6',
        label: 'toad',
    },
]

export function Device() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const fabs = [
        {
          color: 'primary',
          sx: fabStyle,
          icon: <AddIcon />,
          label: 'Add',
        },
    ]
  return (
    <Box sx={{ display:'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Appbar />
        {fabs.map((fab, index) => (
          <Fab onClick={handleOpen} sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
      ))}
      <Paper sx={{ display:'flex', flexDirection: 'row', width: '90%', height: '100%', mt: 5, p:5}}>
            {[lightTheme].map((theme, index) => (
                <ThemeProvider theme={theme}>
                    <BoxItem
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        columnGap: '50px',
                        rowGap: '50px',
                    }}
                    >
                    {computer.map((item) => (
                        <Item key={item.id} >
                            {`${item.label}`}
                        </Item>
                    ))}
                    </BoxItem>
                </ThemeProvider>
            ))}
        </Paper>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <AddComputer />
            </Typography>
            </Box>
        </Modal>
    </Box>    
  );
}