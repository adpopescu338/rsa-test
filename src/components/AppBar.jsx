import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export const NavBar = () => {
	return (
		<AppBar position='static'>
			<Toolbar variant='dense'>
				<IconButton>
					<img src='/logo.svg' alt='rsa logo' />
				</IconButton>

				<Typography variant='h4' color='inherit' component='div'>
					Home Insurance
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
