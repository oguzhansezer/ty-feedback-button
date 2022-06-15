import { render, screen } from '@testing-library/react';
import React from 'react';
import { ModalTitle } from './Title';

describe(' <ModalTitle/> ', () => {
    it('should render', () => {
        render(<ModalTitle />);
        expect(screen.getByTestId('modal-title-testid')).toBeInTheDocument();
    });
    it('should render with children', () => {
        render(<ModalTitle>Hello</ModalTitle>);
        expect(screen.getByTestId('modal-title-testid')).toHaveTextContent(
            'Hello'
        );
    });
    it('should render with className', () => {
        render(<ModalTitle className='test' />);
        expect(screen.getByTestId('modal-title-testid')).toHaveClass('test');
    });
    it('shold render with titleAlign', () => {
        render(<ModalTitle titleAlign='center' />);
        expect(screen.getByTestId('modal-title-testid')).toHaveStyleRule(
            'text-align',
            'center'
        );
    });
    it('should render with titleColor', () => {
        render(<ModalTitle titleColor='red' />);
        expect(screen.getByTestId('modal-title-testid')).toHaveStyleRule(
            'color',
            'red'
        );
    });
});
