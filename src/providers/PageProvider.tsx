import React, { createContext, useState } from 'react';
import { PAGE_TYPE } from '../constants';

export interface PageContext {
    pageType: PAGE_TYPE;
    changePage: (value: PAGE_TYPE) => void;
}
export const PageContext = createContext<PageContext>({
    pageType: PAGE_TYPE.FORM,
    changePage: () => {}
});

export interface Props {
    children: React.ReactNode;
}

const PageProvider = ({ children }: Props) => {
    const [pageType, setPageType] = useState<PAGE_TYPE>(PAGE_TYPE.FORM);

    const changePage = (value: PAGE_TYPE) => {
        if (value) {
            setPageType(value);
        } else {
            setPageType(PAGE_TYPE.FORM);
        }
    };

    return (
        <>
            <PageContext.Provider value={{ pageType, changePage }}>
                {children}
            </PageContext.Provider>
        </>
    );
};

export default PageProvider;
