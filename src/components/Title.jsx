import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useData } from './Context';
import Moment from 'moment';

const Title = () => {
	const { data } = useData();
	const { address1, address2, address3, firstName, startDate, quoteRef } = data.quote[0];

	return (
		<Grid item sm={12} md={6} gutterBottom data-testid='title-with-user-info'>
			<Typography variant='h5'>Hey {firstName}</Typography>
			<Typography variant='body1' gutterBottom>
				Here is your quote for {[address1, address2, address3].filter(Boolean).toString()}
			</Typography>
			<Typography variant='body1' gutterBottom>
				Quote reference: {quoteRef}
			</Typography>
			<Typography variant='body1' gutterBottom>
				Covers starts on : {Moment(startDate).format('d MMM YYYY, hh:mm')}
			</Typography>
		</Grid>
	);
};
export default Title