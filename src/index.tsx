import React from 'react';
import GlobalStyle from './styles/global';
import FeedbackModal, { Props } from './components/';
import PageProvider from './providers/PageProvider';
import PageValidateProvider from './providers/PageValidateProvider';
const TYFeedback = (props: Props) => {
    const { ...allProps } = props;
    return (
        <div>
            <GlobalStyle />
            <PageProvider>
                <PageValidateProvider>
                    <FeedbackModal {...allProps} />
                </PageValidateProvider>
            </PageProvider>
        </div>
    );
};
export default TYFeedback;
