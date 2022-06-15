import { render, screen } from '@testing-library/react';
import React from 'react';
import { ModalContent } from './Content';

describe(' <ModalContent/> ', () => {
    it('should render', () => {
        render(<ModalContent className='test'> Hello </ModalContent>);
        expect(screen.getByTestId('modal-content-testid')).toBeInTheDocument();
        expect(screen.getByTestId('modal-content-testid')).toHaveTextContent(
            'Hello'
        );
    });
    it('should render with className', () => {
        render(<ModalContent className='test'> mock </ModalContent>);
        expect(screen.getByTestId('modal-content-testid')).toHaveClass('test');
    });
    it('should render with textAlign', () => {
        render(<ModalContent textAlign='center'> mock </ModalContent>);
        expect(screen.getByTestId('modal-content-testid')).toHaveStyleRule(
            'text-align',
            'center'
        );
    });
    it('should render with textColor', () => {
        render(<ModalContent textColor='red'> mock </ModalContent>);
        expect(screen.getByTestId('modal-content-testid')).toHaveStyleRule(
            'color',
            'red'
        );
    });
});
