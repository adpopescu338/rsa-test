import './App.css';
import { useState } from 'react';
import { QuoteDataWrapper, useData } from './components/Context';
import { NavBar } from './components/AppBar';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import MainCard from './components/MainCard';
import Title from './components/Title';
import Extras from './components/Extras';

const GeneralWrapper = styled(Grid)`
	padding: 5% 2% 5% 2%;
`;

const App = () => (
	<>
		<NavBar />
		<QuoteDataWrapper>
			<GeneralWrapper container>
				<Page />
			</GeneralWrapper>
		</QuoteDataWrapper>
	</>
);

export default App;

const Page = () => {
	const { data } = useData();
   const [ period, setPeriod ] = useState('monthlyPrice');
   
	if (!data)return <Loading />
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

const Loading = <Grid alignItems='center' justifyContent='center' container style={{ marginTop: '100px' }}>
				<CircularProgress size={100} />
			</Grid>
