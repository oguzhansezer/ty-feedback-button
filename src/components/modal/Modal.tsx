import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalOverlay } from './ModalOverlay';
import { ModalContainer } from './ModalContainer';

export interface ModalProps {
    children: React.ReactNode;
    className?: string;
    closable?: boolean;
    isOpen: boolean;
    label?: string;
    mountNode?: HTMLElement;
    onClose?: () => void;
    width?: string | number;
    zIndex: number;
}

const Modal = (props: ModalProps): JSX.Element => {
    const {
        children,
        className,
        closable = true,
        isOpen,
        label,
        mountNode = document.body,
        onClose,
        width,
        zIndex,
        ...restProps
    } = props;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    const handleOnClose = () => {
        if (closable) {
            onClose?.();
            setIsVisible(false);
        }
    };

    return isOpen && isVisible ? (
        ReactDOM.createPortal(
            <div data-testid='modal-testid' className={className}>
                <ModalOverlay
                    zIndex={zIndex}
                    onClose={handleOnClose}
                    data-testid='modal-child-overlay-testId'
                />
                <ModalContainer
                    onClose={handleOnClose}
                    zIndex={zIndex + 1}
                    closable={closable}
                    label={label}
                    width={width}
                    {...restProps}
                    data-testid='modal-child-container-testId'
                >
                    {children}
                </ModalContainer>
            </div>,
            mountNode as HTMLElement
        )
    ) : (
        <></>
    );
};
export default Modal;
