

interface Props {
    sheetMonkeyUrl: string;
    ref: React.RefObject<HTMLFormElement>;
}

export const postForm = async({sheetMonkeyUrl,ref}:Props) : Promise<boolean | undefined> => {
    if (!ref.current) return false
            fetch(sheetMonkeyUrl as string, {
            method: 'POST',
            body: new FormData(ref.current)
        })
            .then(res => {
                if (res.ok) {
                    return true
                } else {
                    console.log('ERROR SUBMITTING', res);
                    return false
                }
            })
            .catch(err => false);
}