import React from 'react';
import styled from 'styled-components';

export interface Props {
    successText?: string;
}

export const Success = (props: Props) => {
    const { successText } = props;
    return (
        <SuccessText data-testid={'succes-text-testid'}>
            {successText}
        </SuccessText>
    );
};

const SuccessText = styled.div`
    height: fit-content;
    text-align: center;
    color: green;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
`;
