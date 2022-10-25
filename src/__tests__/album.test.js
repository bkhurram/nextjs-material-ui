import { render, screen } from '@testing-library/react';
import Album from '../pages/album';


describe('Album', () => {
	it('renders a heading', () => {
		render(<Album />)

		const heading = screen.getByRole('heading', {
			name: /My awesome website/i,
		})

		expect(heading).toBeInTheDocument();
	})
});
