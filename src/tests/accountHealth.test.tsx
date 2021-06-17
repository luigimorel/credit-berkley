import { render, screen } from '@testing-library/react';
import AccountHealth from '../ui/dashboard/components/accountHealth';

<AccountHealth />;

test('should render the account health component', () => {
    render(<AccountHealth />);
    const balances = screen.getByText(/total open balances/i);
    expect(balances).toBeInTheDocument();
});
