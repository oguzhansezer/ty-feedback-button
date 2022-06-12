import { ModalProps } from '../components/modal/Modal';

export function handleEscapeBtn(onClose?: ModalProps['onClose']) {
    return (e: KeyboardEvent) => {
        if (onClose && (e.keyCode === 27 || e.key === 'Escape')) {
            onClose();
        }
    };
}
