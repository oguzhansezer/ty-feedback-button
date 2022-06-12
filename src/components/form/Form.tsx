import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { TextArea } from '../text-area';
import { Button } from '../button';
import { PageValidateContext } from '../../providers/PageValidateProvider';
import { PageContext } from '../../providers/PageProvider';
import { PAGE_TYPE } from '../../constants';
const configValue = 'https://api.sheetmonkey.io/form/rRjBvKqTE6oDZe8AEZxxPt';

export const Form = () => {
    const ref = useRef<HTMLFormElement>(null);
    const pageValidateContext = useContext(PageValidateContext);
    const pageContext = useContext(PageContext);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        pageValidateContext.handleValidate(e.target.value.trim().length > 3);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!ref.current) return;
        fetch(configValue as string, {
            method: 'POST',
            body: new FormData(ref.current)
        })
            .then(res => {
                if (res.ok) {
                    pageContext.changePage(PAGE_TYPE.SUCCESS);
                    console.log('SUCCESSFULLY SUBMITTED', res);
                } else {
                    console.log('ERROR SUBMITTING', res);
                    //hata ekranı göster
                }
            })
            .catch(err => console.log(err));
    };
    return (
        <Container>
            <form
                action='https://api.sheetmonkey.io/form/rRjBvKqTE6oDZe8AEZxxPt'
                method='post'
                onSubmit={handleSubmit}
                ref={ref}
            >
                <Wrapper>
                    <TextArea onChange={handleChange} />
                </Wrapper>
                <input
                    type='hidden'
                    name='Created'
                    value='x-sheetmonkey-current-date-time'
                />
                <Wrapper>
                    <Button disabled={!pageValidateContext.pageValidate}>
                        Gönder
                    </Button>
                </Wrapper>
            </form>
        </Container>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: var(--spacing-st);
`;
const Container = styled.div`
    padding: 0 var(--spacing-st);
    width: 100%;
`;
