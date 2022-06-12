import React from 'react';
import FeedbackIcon from '../../icons/Feedback';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
interface Props {
    mountNode?: HTMLElement;
    onClick?: () => void;
    className?: string;
}

export const Feedback = (props: Props) => {
    const {
        mountNode = document.body,
        onClick,
        className,
        ...restProps
    } = props;
    return ReactDOM.createPortal(
        <Container {...restProps} onClick={onClick} className={className}>
            <FeedbackIcon width={48} height={48} />
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
