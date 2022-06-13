import React, { useState, useContext } from 'react';
import Modal from './modal/Modal';
import { Feedback } from './feedback';
import { ModalTitle } from './modal/Title';
import { ModalContent } from './modal/Content';
import { Form } from './form';
import { Success } from './success';
import { PageContext } from '../providers/PageProvider';
import { PAGE_TYPE } from '../constants/';
export interface Props {
    sheetMonkeyUrl: string;
    formTitleText?: string;
    formContentText?: string;
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
        modalWidth = '90%',
        successText = 'WE HAVE GOT YOUR FEEDBACK',
        modalClassName = '',
        feedbackButtonClassName = '',
        modalZIndex = 1300,
        formTitleClassName = '',
        formTitleColor = 'red',
        formTitleAlign = 'center',
        onSubmit = () => {},
        sheetMonkeyUrl
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
                    <>
                        {pageTypeContext.pageType === PAGE_TYPE.FORM && (
                            <ModalTitle
                                titleAlign={formTitleAlign}
                                titleColor={formTitleColor}
                                className={formTitleClassName}
                            >
                                {formTitleText}
                            </ModalTitle>
                        )}
                        {pageTypeContext.pageType === PAGE_TYPE.SUCCESS && (
                            <Success successText={successText} />
                        )}

                        {pageTypeContext.pageType === PAGE_TYPE.FORM &&
                            formContentText && (
                                <ModalContent>{formContentText}</ModalContent>
                            )}

                        {pageTypeContext.pageType === PAGE_TYPE.FORM && (
                            <Form
                                onSubmit={onSubmit}
                                sheetMonkeyUrl={sheetMonkeyUrl}
                            />
                        )}
                    </>
                </Modal>
            )}
        </div>
    );
};
export default FeedbackModal;
