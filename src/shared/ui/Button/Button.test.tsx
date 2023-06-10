import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('className', () => {
    test('with only first param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with only first param', () => {
        render(<Button className={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
