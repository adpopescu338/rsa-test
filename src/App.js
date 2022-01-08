import './App.css';
import  QuoteDataWrapper from './components/Context';
import { NavBar } from './components/AppBar';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Page from './components/Page'

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


