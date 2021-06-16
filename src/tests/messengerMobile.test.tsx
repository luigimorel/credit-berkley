import { render, screen } from '@testing-library/react';
import MessengerMobile from '../ui/messenger/components/messengerMobile';

test('renders the messenger mobile component', () => {
    render(<MessengerMobile />);

    const inputBase = screen.getByPlaceholderText(/search/i);
    expect(inputBase).toBeInTheDocument();
});
