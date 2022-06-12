import React from 'react';
import styled from 'styled-components';
export interface Props extends cssProps {
    children: React.ReactNode;
    className?: string;
}
export interface cssProps {
    textAlign?: 'left' | 'center' | 'right';
    textColor?: string;
}
export const ModalContent = (props: Props) => {
    const {
        textAlign = 'left',
        textColor = 'black',
        children,
        ...restProps
    } = props;
    return (
        <Container textAlign={textAlign} textColor={textColor} {...restProps}>
            {children}
        </Container>
    );
};

const Container = styled.div<cssProps>`
    display: flex;
    text-align: ${p => p.textAlign};
    color: ${p => p.textColor};
    margin: var(--spacing-st) 0;
`;
