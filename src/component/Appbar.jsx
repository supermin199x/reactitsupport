import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const settings = ['ออกจากระบบ'];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	let navigate = useNavigate();


	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const goJoblist = () => {
		setAnchorElNav(null);
		navigate('/joblist');
	};

	const goReport = () => {
		setAnchorElNav(null);
		navigate('/report');
	};

	const goDevice = () => {
		setAnchorElNav(null);
		navigate('/device');
	};

	const logout = () => {
		navigate('/');
	};

	const goJoblistMenu = (event) => {
		setAnchorElNav(event.currentTarget);
		navigate('/joblist');
	};
	const goReportMenu = (event) => {
		setAnchorElNav(event.currentTarget);
		navigate('/report');
	};
	const goDeviceMenu = (event) => {
		setAnchorElNav(event.currentTarget);
		navigate('/device');
	};

	return (
		<AppBar position="static" color="primary">
			<Container maxWidth="Fluid">
				<Toolbar disableGutters>
					<Typography
						variant="h4"
						noWrap
						component="a"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
							cursor: 'default',
						}}
						>
						ZENITEX
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<MenuItem  onClick={goJoblistMenu}>
								<Typography textAlign="center">งานซ่อม</Typography>
							</MenuItem>

							<MenuItem  onClick={goReportMenu}>
								<Typography textAlign="center">แจ้งซ่อม</Typography>
							</MenuItem>

							<MenuItem  onClick={goDeviceMenu}>
								<Typography textAlign="center">รายการอุปกรณ์</Typography>
							</MenuItem>
							
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
						>
						ZENITEX
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button
							onClick={goJoblist}
							sx={{ my: 2, color: 'white', display: 'block' }}
							>
							งานซ่อม
						</Button>
						<Button
							onClick={goReport}
							sx={{ my: 2, color: 'white', display: 'block' }}
							>
							แจ้งซ่อม
						</Button>
						<Button
							onClick={goDevice}
							sx={{ my: 2, color: 'white', display: 'block' }}
							>
							รายการอุปกรณ์
						</Button>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar />
						</IconButton>
						<Menu
							sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
								transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
							<MenuItem key={setting} onClick={logout}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
							))}
						</Menu>
					</Box>

				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;