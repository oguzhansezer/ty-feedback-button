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

const Modal = (props: ModalProps) => {
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

    return isOpen && isVisible
        ? ReactDOM.createPortal(
              <div>
                  <ModalOverlay zIndex={zIndex} onClose={handleOnClose} />
                  <ModalContainer
                      onClose={handleOnClose}
                      zIndex={zIndex + 1}
                      closable={closable}
                      label={label}
                      width={width}
                      className={className}
                      {...restProps}
                  >
                      {children}
                  </ModalContainer>
              </div>,
              mountNode as HTMLElement
          )
        : null;
};
export default Modal;
