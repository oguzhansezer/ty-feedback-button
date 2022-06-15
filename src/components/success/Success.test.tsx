import { render, screen } from '@testing-library/react';
import React from 'react';
import { Success } from './Success';

describe(' <Success/> ', () => {
    it('should render', () => {
        render(<Success />);
        expect(screen.getByTestId('succes-text-testid')).toBeInTheDocument();
    });
    it('should render with successText', () => {
        render(<Success successText='Success' />);
        expect(screen.getByTestId('succes-text-testid')).toHaveTextContent(
            'Success'
        );
    });
});
