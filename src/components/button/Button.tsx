import React from 'react';
import styled from 'styled-components';
export interface Props
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        cssProps {
    children?: React.ReactNode;
    disabled?: boolean;
}
export interface cssProps {
    backgroundColor?: string;
    borderColor?: string;
}
export const Button = (props: Props) => {
    const { children, disabled, ...restProps } = props;
    return (
        <SubmitButton disabled={disabled} {...restProps}>
            {children}{' '}
        </SubmitButton>
    );
};

const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--color-primary);
    border: none;
    border-radius: var(--border-radius-xs);
    color: var(--color-white);
    font-size: var(--font-size-xs);
    padding: var(--spacing-st);
    color: white;
    height: 3rem;
    cursor: pointer;
    &:disabled {
        background: gray;
        color: black;
        cursor: none;
    }
`;
