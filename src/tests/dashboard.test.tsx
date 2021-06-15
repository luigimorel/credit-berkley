import { Dashboard } from '@material-ui/icons';
import { render, screen } from '@testing-library/react';

describe('Dashboard', () => {
    test('renders Dashboard component', () => {
        render(<Dashboard />);
        screen.debug();
    });
});
