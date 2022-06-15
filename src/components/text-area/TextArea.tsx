import React from 'react';
import styled from 'styled-components';

export interface Props {
    maxLength?: number;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
}

export const TextArea = (props: Props) => {
    const { maxLength, onChange, className } = props;
    return (
        <Label>
            <Input
                maxLength={maxLength || 200}
                placeholder='Enter Feedback...'
                name='Feedback'
                onChange={onChange}
                data-testid={'text-area-testid'}
                className={className}
            />
        </Label>
    );
};
const Label = styled.label`
    width: 100%;
    display: flex;
`;

const Input = styled.textarea`
    height: 150px;
    width: 100%;
    margin-bottom: var(--spacing-xs);
    margin-top: var(--spacing-xs);
    resize: none;
    padding: var(--spacing-xs);
`;
