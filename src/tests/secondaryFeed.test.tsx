import { render } from '@testing-library/react';
import SecondaryFeed from '../ui/secFeed/secondaryFeed';

test('renders a child component ', () => {
    const { getByText } = render(<SecondaryFeed />);
    expect(getByText(/view all/i)).toBeInTheDocument();
});
