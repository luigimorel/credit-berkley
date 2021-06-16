import { render, screen } from '@testing-library/react';
import FindAccount from '../accounts/findAccount/findAccount';

test('renders the find account component', () => {
    render(<FindAccount />);

    const creditBerkleyText = screen.getByAltText(/credit berkley/i);
    expect(creditBerkleyText).toBeInTheDocument();
});
