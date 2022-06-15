import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';

describe(' <Button/> ', () => {
    it('should render', () => {
        render(<Button>Hello</Button>);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });
    it('should render with disabled', () => {
        render(<Button disabled>Hello</Button>);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });
    it('should render with custom css', () => {
        render(<Button backgroundColor='red'>Hello</Button>);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });
    it('should not render with  disabled', () => {
        render(
            <Button backgroundColor='red' disabled>
                Hello
            </Button>
        );
        expect(screen.getByText('Hello').hasAttribute('disabled')).toBe(true);
    });
});
