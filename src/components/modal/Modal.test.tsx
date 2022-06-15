import { render, screen } from '@testing-library/react';
import React from 'react';
import Modal from './Modal';

describe(' <Modal/> ', () => {
    const mockProps = {
        isOpen: true,
        width: '100%',
        className: 'test',
        zIndex: 1
    };
    it('should render', () => {
        render(<Modal {...mockProps}> Modal Content</Modal>);
        expect(screen.getByTestId('modal-testid')).toBeInTheDocument();
    });
    it('should render with className', () => {
        render(
            <Modal {...mockProps} className='test'>
                {' '}
                Modal Content
            </Modal>
        );
        expect(screen.getByTestId('modal-testid')).toHaveClass('test');
    });
    it('should close the modal when click to overlay and call', () => {
        render(<Modal {...mockProps}> Modal Content</Modal>);
        screen.getByTestId('modal-overlay-testid').click();
        expect(screen.queryByTestId('modal-testid')).not.toBeInTheDocument();
    });
    it('overlay click should not close the modal when closable is false', () => {
        render(
            <Modal {...mockProps} closable={false}>
                {' '}
                Modal Content
            </Modal>
        );
        screen.getByTestId('modal-overlay-testid').click();
        expect(screen.queryByTestId('modal-testid')).toBeInTheDocument();
    });
});
