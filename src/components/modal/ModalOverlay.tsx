import React from 'react';
import styled from 'styled-components';

export interface ModalActionProps extends ModalOverlayProps {
    onClose?: () => void;
}
export interface ModalOverlayProps {
    zIndex?: number;
}

export const ModalOverlay = (props: ModalActionProps) => {
    const { onClose } = props;
    return (
        <Container
            onClick={onClose}
            data-testid='modal-overlay-testid'
            zIndex={props.zIndex}
        ></Container>
    );
};

const Container = styled.div<ModalOverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: ${p => p.zIndex};
`;
