import { render, screen } from '@testing-library/react';
import React from 'react';
import { ModalOverlay } from './ModalOverlay';

describe(' <ModalOverlay/> ', () => {
    it('should render', () => {
        render(<ModalOverlay />);
        expect(screen.getByTestId('modal-overlay-testid')).toBeInTheDocument();
    });
    it('should render with z-index', () => {
        render(<ModalOverlay zIndex={1} />);
        expect(screen.getByTestId('modal-overlay-testid')).toHaveStyleRule(
            'z-index',
            '1'
        );
    });
});
