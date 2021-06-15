import { render, screen } from '@testing-library/react';
import Calculator from '../ui/creditCalculator/components/calculator';

test('contains view reports texx', () => {
    render(<Calculator />);
    const viewReports = screen.getByText(/view report changes/i);
    expect(viewReports).toBeInTheDocument();
});
