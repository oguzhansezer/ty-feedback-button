interface Props {
    sheetMonkeyUrl: string;
    ref: React.RefObject<HTMLFormElement>;
}

export const postForm = async ({
    sheetMonkeyUrl,
    ref
}: Props): Promise<any | undefined> => {
    try {
        if (!ref.current) return false;
        const response = await fetch(sheetMonkeyUrl as string, {
            method: 'POST',
            body: new FormData(ref.current)
        });
        return response;
    } catch (error) {
        return undefined;
    }
};
