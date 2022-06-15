import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { TextArea } from '../text-area';
import { Button } from '../button';
import { PageValidateContext } from '../../providers/PageValidateProvider';
import { PageContext } from '../../providers/PageProvider';
import { PAGE_TYPE } from '../../constants';
import { postForm } from '../../service/postForm';
interface Props {
    onSubmit: () => void;
    sheetMonkeyUrl: string;
}
export const Form = (props: Props) => {
    const ref = useRef<HTMLFormElement>(null);
    const pageValidateContext = useContext(PageValidateContext);
    const pageContext = useContext(PageContext);
    const { onSubmit, sheetMonkeyUrl } = props;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        pageValidateContext.handleValidate(e.target.value.trim().length > 3);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await postForm({ sheetMonkeyUrl, ref });
        console.log(result, 'mylog');
        if (result) {
            onSubmit?.();
            pageContext.changePage(PAGE_TYPE.SUCCESS);
        } else {
            console.log('ERROR SUBMITTING', result);
        }
    };
    return (
        <Container>
            <form
                action='https://api.sheetmonkey.io/form/rRjBvKqTE6oDZe8AEZxxPt'
                method='post'
                onSubmit={handleSubmit}
                ref={ref}
                data-testid='form-testid'
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
