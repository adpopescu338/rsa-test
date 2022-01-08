import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useData } from './Context';
import { useState, useEffect } from 'react';

const Box = styled.div`
	background-color: #e7ebf0;
	border-radius: 14px;
	padding: 8px;
	width: 45%;
	margin-left: 1%;
	margin-right: 1%;
	margin-top: 18px;
	@media (max-width: 600px) {
		width: 90%;
	}
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const BoxesWrapper = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: center;
`;

const Extras = ({ period }) => {
	const { data, removeAddon, addAddon } = useData();
	const [extras, setExtras] = useState([]);

	useEffect(() => {
		fetch('https://alex-popescu.co.uk/rsa/getAddons.json')
			.then(r => r.json())
			.then(setExtras)
			.catch(console.log);
	}, []);

	return (
		<>
			<Typography variant='h5'>Tailor your cover with our optional extra</Typography>
			<BoxesWrapper>
				{extras.map(item => {
					const isAdded = data.addons.some(({ title }) => title === item.title);
					const color = isAdded ? 'error' : 'primary';
					const text = isAdded ? 'Remove' : 'Select';
					const action = isAdded ? () => removeAddon(item) : () => addAddon(item);
					const _period = period === 'monthlyPrice' ? 'month' : 'year';

					return (
						<Box key={item.title} item sx={6}>
							<Typography variant='h6'>
								{item.title}{' '}
								<span style={{ float: 'right', fontSize: '15px' }}>
									£{item[period]} per {_period}
								</span>
							</Typography>
							<Typography>{item.text}</Typography>

							<div style={{ textAlign: 'right', marginTop: '10px', position: 'relative', bottom: '0' }}>
								<Button variant='contained' color={color} onClick={action}>
									{text} this extra {isAdded ? <DeleteOutlineIcon /> : <AddIcon />}
								</Button>
							</div>
						</Box>
					);
				})}
			</BoxesWrapper>
		</>
	);
};

export default Extras;
