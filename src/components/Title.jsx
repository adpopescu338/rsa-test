import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useData } from './Context';


const Title = () => {
	const { data } = useData();
	const { address1, address2, address3, firstName } = data.quote[0];

	return (
		<Grid item sm={12} md={6} gutterBottom>
			<Typography variant='h5'>Hey {firstName}</Typography>
			<Typography variant='body1' gutterBottom>
				Here is your quote for {[address1, address2, address3].filter(Boolean)}
			</Typography>
			<Typography variant='body1' gutterBottom>
				Quote reference: {data.quote[0].quoteRef}
			</Typography>
			<Typography variant='body1' gutterBottom>
				Covers starts on : {data.quote[0].startDate}
			</Typography>
		</Grid>
	);
};
export default Title