import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useData } from './Context';

const PriceWrapper = styled.div`
	text-align: center;
	margin-top: 20px;
`;

const MainCard = ({ period, setPeriod }) =>{
	const { data } = useData();
	const fullPrice = (
		data.quote[0][period] +
		Number(
			data.addons.length &&
				data.addons.reduce((current, next) => {
					return { [period]: current[period] + next[period] };
				})[period]
		)
	).toFixed(2);
	const _period = period === 'monthlyPrice' ? 'month' : 'year';
	const switchPeriod = () => setPeriod(period === 'monthlyPrice' ? 'annualPrice' : 'monthlyPrice');

	return (
		<Grid item sm={12} md={6} style={{ backgroundColor: '#e7ebf0', borderRadius: ' 14px', padding: '8px' }}>
			<PriceWrapper>
				<Typography variant='h4'>£{fullPrice}</Typography>
				<Typography variant='h5'>per {_period}</Typography>
			</PriceWrapper>
			<div style={{ textAlign: 'center' }}>
				<Typography>This price includes Insurance Premium Tax at the current rate.</Typography>
				<Typography>No charge for paying monthly.</Typography>
			</div>

			<div style={{ textAlign: 'center', marginTop: '10px' }}>
				<Button variant='contained' onClick={switchPeriod}>
					Switch to {period === 'monthlyPrice' ? 'annual' : 'monthly'}
				</Button>
			</div>
		</Grid>
	);
}

export default MainCard