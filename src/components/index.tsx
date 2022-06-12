import React, { useState, useContext } from 'react';
import Modal from './modal/Modal';
import { Feedback } from './feedback';
import { ModalTitle } from './modal/Title';
import { ModalContent } from './modal/Content';
import { Form } from './form';
import { Success } from './success';
import { PageContext } from '../providers/PageProvider';

export interface Props {
    formTitleText?: string;
    formContentText?: string;
    successContentText?: string;
    modalWidth?: string | number;
    modalZIndex?: number;
    modalClosable?: boolean;
    successText?: string;
    modalClassName?: string;
    feedbackButtonClassName?: string;
    formTitleClassName?: string;
    formTitleColor?: string;
    formTitleAlign?: 'left' | 'center' | 'right';
    onSubmit?: () => void;
}

/*
i have used scriptMonkey for googleSheets
normally we can get url from here but
this will be npm package and I don't want to
complicate the use
*/

const FeedbackModal = (props: Props) => {
    const [feedbackVisible, setFeedbackVisible] = useState<boolean>(true);
    const [modalVisible, setmodalVisible] = useState<boolean>(false);

    const pageTypeContext = useContext(PageContext);

    const {
        formTitleText = 'SEND YOUR FEEDBACK',
        formContentText = '',
        successContentText = '',
        modalWidth = '90%',
        successText = 'WE HAVE GOT YOUR FEEDBACK',
        modalClassName = '',
        feedbackButtonClassName = '',
        modalZIndex = 1300,
        formTitleClassName = '',
        formTitleColor = 'red',
        formTitleAlign = 'center'
        onSubmit = () => {}
    } = props;

    const handleModalOpen = () => {
        setmodalVisible(true);
        setFeedbackVisible(false);
    };
    return (
        <div>
            {feedbackVisible && (
                <Feedback
                    onClick={() => handleModalOpen()}
                    className={feedbackButtonClassName}
                />
            )}
            {modalVisible && (
                <Modal
                    isOpen={true}
                    width={modalWidth}
                    className={modalClassName}
                    zIndex={modalZIndex}
                >
                    {pageTypeContext.pageType === 'form' && (
                        <ModalTitle
                            titleAlign={formTitleAlign}
                            titleColor={formTitleColor}
                            className={formTitleClassName}
                        >
                            {formTitleText}
                        </ModalTitle>
                    )}

                    {pageTypeContext.pageType === 'form' && formContentText && (
                        <ModalContent>{formContentText}</ModalContent>
                    )}
                    {pageTypeContext.pageType === 'success' &&
                        successContentText && (
                            <ModalContent>{successContentText}</ModalContent>
                        )}

                    {pageTypeContext.pageType === 'success' ? (
                        <Success successText={successText} />
                    ) : (
                        <Form onSubmit={} />
                    )}
                </Modal>
            )}
        </div>
    );
};
export default FeedbackModal;
