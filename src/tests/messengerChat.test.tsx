import { render } from '@testing-library/react';
import MessengerChat from '../ui/messenger/components/messengerChat';

test('renders the message textfield    ', () => {
    const { getByTestId } = render(<MessengerChat />);
    const pinnedMessages = getByTestId('question-input');
    expect(pinnedMessages).toHaveStyle('width: 100%');
});
