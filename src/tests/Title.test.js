import React from 'react';
import { render } from '@testing-library/react';
import Title from '/src/components/Title';


it('check text', () => {
	const elem = render(<Title />);

	expect(elem).toHaveTextContent(/hello$/i);
});
