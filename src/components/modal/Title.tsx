import React from 'react';
import styled from 'styled-components';

interface Props extends cssProps {
    children?: React.ReactNode;
    className?: string;
}
interface cssProps {
    titleAlign?: 'left' | 'center' | 'right';
    titleColor?: string;
}

export const ModalTitle = (props: Props) => {
    const {
        titleAlign = 'center',
        children,
        titleColor = 'red',
        ...restProps
    } = props;
    return (
        <Container
            titleColor={titleColor}
            titleAlign={titleAlign}
            {...restProps}
            data-testid={'modal-title-testid'}
        >
            {children}
        </Container>
    );
};

const Container = styled.div<cssProps>`
    height: fit-content;
    margin-bottom: var(--spacing-xxs);
    margin-top: var(--spacing-xxs);
    text-align: ${p => p.titleAlign};
    color: ${p => p.titleColor};
    font-size: 2rem;
    font-weight: var(--font-weight-bold);
`;
