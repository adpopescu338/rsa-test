import CircularProgress from '@mui/material/CircularProgress';
import MainCard from './MainCard';
import Title from './Title';
import Extras from './Extras';
import { useState } from 'react';
import { useData } from './Context';
import Grid from '@mui/material/Grid';

const Page = () => {
	const { data } = useData();
	const [period, setPeriod] = useState('monthlyPrice');

	if (!data) return (
		<Grid alignItems='center' justifyContent='center' container style={{ marginTop: '100px' }} data-testid='spinner'>
			<CircularProgress size={100} />
		</Grid>
   );
   
	return (
		<>
			<Grid container>
				<Title />
				<MainCard period={period} setPeriod={setPeriod} />
			</Grid>
			<Grid container style={{ marginTop: '25px' }}>
				<Extras period={period} />
			</Grid>
		</>
	);
};


export default Page