import { useEffect } from 'react';
export const useStopScreenScroll = () => {
    useEffect(() => {
        const body = document.body;

        body.style.overflow = 'hidden';

        return () => {
            body.style.overflow = '';
        };
    }, []);
};
