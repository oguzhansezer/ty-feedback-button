import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { TextArea } from './TextArea';

describe(' <TextArea/> ', () => {
    it('should render', () => {
        render(<TextArea />);
        expect(screen.getByTestId('text-area-testid')).toBeInTheDocument();
    });
    it('should render with maxLength', () => {
        render(<TextArea maxLength={200} />);
        expect(screen.getByTestId('text-area-testid')).toHaveAttribute(
            'maxlength',
            '200'
        );
    });
    it('should render with placeholder', () => {
        render(<TextArea placeholder='Enter Feedback...' />);
        expect(screen.getByTestId('text-area-testid')).toHaveAttribute(
            'placeholder',
            'Enter Feedback...'
        );
    });

    it('should called onChange when typing', async () => {
        const onChange = jest.fn();
        render(<TextArea onChange={onChange} />);
        const input = screen.getByTestId('text-area-testid');

        fireEvent.change(input, { target: { value: 'Enter Feedback' } });
        expect(onChange).toHaveBeenCalled();

        await waitFor(async () => {
            expect(input).toHaveValue('Enter Feedback');
        });
    });

    it('should render with className', () => {
        render(<TextArea className='test' />);
        expect(screen.getByTestId('text-area-testid')).toHaveClass('test');
    });
});
