import React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
}

export const ModalFooter = (props: Props) => {
    return <Container>{props.children}</Container>;
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`;
