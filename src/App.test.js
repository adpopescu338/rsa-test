import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './components/Page';
import QuoteDataWrapper, { QuoteData } from './components/Context';
import Title from './components/Title';
import Moment from 'moment';


test('The page shows a loading spinner while fetching data', () => {
	render(
		<QuoteDataWrapper>
			<Page />
		</QuoteDataWrapper>
	);
	expect(screen.getByTestId('spinner')).toBeInTheDocument()
});

test('The title section displays the user data', () => {
	const mockData = {data: {
		quote: [
			{
				firstName: 'James',
				lastName: 'Kirk',
				address1: 'St Marks Court',
				address2: 'Chart Way',
				address3: '',
				town: 'Horsham',
				postcode: 'RH12 1XL',
				quoteRef: 'NBSH00044898200Q',
				startDate: '2021-07-02T13:03:54Z',
				monthlyPrice: 21.64,
            annualPrice: 259.68,
            
			},
		],
   }
   };
   const { address1, address2, address3, firstName, quoteRef, startDate } = mockData.data.quote[0];
render(
	<QuoteData.Provider value={mockData}>
		<QuoteData.Consumer>{() => <Title />}</QuoteData.Consumer>
	</QuoteData.Provider>
   )


   expect(screen.getByText(`Hey ${firstName}`)).toBeInTheDocument()
   expect(screen.getByText(/Here is your quote for /)).toHaveTextContent(
				[address1, address2, address3].filter(Boolean).toString()
   );
   expect(screen.getByText(`Quote reference: ${quoteRef}`)).toBeInTheDocument();
   expect(screen.getByText(`Covers starts on : ${Moment(startDate).format('d MMM YYYY, hh:mm')}`)).toBeInTheDocument();
});
