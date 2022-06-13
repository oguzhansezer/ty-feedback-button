import React, { useRef } from 'react';
import styled from 'styled-components';
import Close from '../../icons/Close';

import { useHandleEscapeBtn } from '../../hooks/useHandleEscapeBtn';
import { useStopScreenScroll } from '../../hooks/useStopScreenSroll';

export interface CotainerActionProps extends Props {
    onClose?: () => void;
    children: React.ReactNode;
    closable?: boolean;
    elementToFocusOnModalOpen?: string;
    label?: string;
    className?: string;
}

interface Props {
    width?: string | number;
    zIndex: number;
    forwardedRef?: any;
}

export const ModalContainer = (props: CotainerActionProps) => {
    const ref = useRef<HTMLElement>(null);
    const { onClose, children, closable, className, label, zIndex } = props;

    useHandleEscapeBtn(onClose); // handle escape button press while modal is open
    useStopScreenScroll(); // stop document scroll while the modal is open

    return (
        <Container
            forwardedRef={ref}
            className={className}
            onClick={onClose}
            zIndex={zIndex}
        >
            <ContainerBody
                role='dialog'
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                aria-label={label}
                zIndex={zIndex}
            >
                {/* close button */}
                {closable && (
                    <CloseIconWrapper
                        onClick={onClose}
                        aria-label='close'
                        zIndex={zIndex}
                    >
                        <Close fill='white' />
                    </CloseIconWrapper>
                )}
                {children}
            </ContainerBody>
        </Container>
    );
};

const Container = styled.div<Props>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    overflow: auto;
    &. button[aria-label='close'] {
        cursor: pointer;
    }
    background-color: rgba(0, 0, 0, 0.5);
    z-index: ${p => p.zIndex};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerBody = styled.div<Props>`
  min-height: 450px;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  background:white;
  width: ${p => p.width || '90%'};
  padding={padding || var(--spacing-st)};
  position:relative;
  
 
               
`;

const CloseIconWrapper = styled.button<Props>`
    position: absolute;
    right: var(--spacing-xxs);
    top: var(--spacing-xxs);
    background: transparent;
    border: none;
    z-index: ${p => p.zIndex};
`;
