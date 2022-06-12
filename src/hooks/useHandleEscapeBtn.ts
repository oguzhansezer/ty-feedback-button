import { useEffect } from 'react';
import { ModalProps } from '../components/modal/Modal';
import { handleEscapeBtn } from '../helpers/handleEscapeBtn';

export function useHandleEscapeBtn(onClose?: ModalProps['onClose']): void {
    useEffect(() => {
        const handler = handleEscapeBtn(onClose);
        window.addEventListener('keyup', handler);
        return () => {
            window.removeEventListener('keyup', handler);
        };
    }, [onClose]);
}
