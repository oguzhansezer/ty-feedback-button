import { render, screen } from '@testing-library/react';
import React from 'react';
import { Feedback } from './Feedback';

describe(' <Button/> ', () => {
    it('should render', () => {
        render(<Feedback />);
        expect(
            screen.getByTestId('feedback-container-testid')
        ).toBeInTheDocument();
    });
    it('should call onClick', () => {
        const onClick = jest.fn();
        render(<Feedback onClick={onClick} />);
        screen.getByTestId('feedback-container-testid').click();
        expect(onClick).toHaveBeenCalled();
    });
    it('should render with className', () => {
        render(<Feedback className='test' />);
        expect(screen.getByTestId('feedback-container-testid')).toHaveClass(
            'test'
        );
    });
});
