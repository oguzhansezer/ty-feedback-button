import React from 'react';
import FeedbackIcon from '../../icons/Feedback';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
interface Props {
    mountNode?: HTMLElement;
    onClick?: () => void;
    className?: string;
}

export const Feedback = (props: Props): JSX.Element => {
    const { mountNode = document.body, onClick, className } = props;
    return ReactDOM.createPortal(
        <Container
            onClick={onClick}
            className={className}
            data-testid={'feedback-container-testid'}
        >
            <FeedbackIcon width={60} height={60} />
        </Container>,
        mountNode as HTMLElement
    );
};

const Container = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 8px 16px;
`;
