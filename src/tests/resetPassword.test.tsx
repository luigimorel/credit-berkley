import { render, fireEvent } from '@testing-library/react';

import ResetPassword from '../accounts/resetPassword/resetPassword';

test('test the account submit button', () => {
    const { getByTestId } = render(<ResetPassword />);
    const password = getByTestId('account-new-password');
    const submit = getByTestId('account-password-reset');

    fireEvent.change(password, { target: { value: 'password' } });
    expect(submit).not.toHaveClass('Mui-disabled');
});
