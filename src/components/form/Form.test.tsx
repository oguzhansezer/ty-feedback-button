import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import { Form } from './Form';
import { postForm } from '../../service/postForm';

jest.mock('../../service/postForm', () => ({
    postForm: jest.fn()
}));

describe(' <Form/> ', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const mockProps = {
        sheetMonkeyUrl: 'https://sheetmonkey.com',
        onSubmit: jest.fn()
    };

    it('should render', () => {
        render(<Form {...mockProps} />);
        expect(screen.getByTestId('form-testid')).toBeInTheDocument();
    });
    it('should api request when submit', async () => {
        (postForm as jest.Mock).mockResolvedValue(true);
        render(<Form {...mockProps} />);
        const form = screen.getByTestId('form-testid');
        fireEvent.submit(form);
        await waitFor(() => {
            expect(mockProps.onSubmit).toHaveBeenCalled();
        });
    });
    it('should dont call  submit  when api request failed', async () => {
        (postForm as jest.Mock).mockResolvedValue(false);
        render(<Form {...mockProps} />);
        const form = screen.getByTestId('form-testid');
        fireEvent.submit(form);
        await waitFor(() => {
            expect(mockProps.onSubmit).not.toHaveBeenCalled();
        });
    });
});
