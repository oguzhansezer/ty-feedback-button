import React, { createContext, useState } from 'react';

export interface PageValidateContext {
    pageValidate: boolean;
    handleValidate: (value: boolean) => void;
}
export interface Props {
    children: React.ReactNode;
}
export const PageValidateContext = createContext<PageValidateContext>({
    pageValidate: false,
    handleValidate: () => {}
});

const PageValidateProvider = ({ children }: Props) => {
    const [pageValidate, setPageValidate] = useState<boolean>(false);

    const handleValidate = (value: boolean) => {
        setPageValidate(value);
    };

    return (
        <>
            <PageValidateContext.Provider
                value={{ pageValidate, handleValidate }}
            >
                {children}
            </PageValidateContext.Provider>
        </>
    );
};

export default PageValidateProvider;
