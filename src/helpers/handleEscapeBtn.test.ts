import { handleEscapeBtn } from './handleEscapeBtn';

const firstButton = 'button-1';
const secondButton = 'button-2';
const thirdButton = 'button-3';
const fourthButton = 'button-4';

describe('handleEscapeBtn', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    const container = document.createElement('div');
    container.innerHTML = `<div></div>
                           <button data-testid="${firstButton}"></button>
                           <button data-testid="${secondButton}"></button>
                           <button data-testid="${thirdButton}"></button>
                           <button data-testid="${fourthButton}"></button>`;

    const closeModalSpy = jest.fn();
    const escapeEvent = {
        keyCode: 27,
        key: 'Escape'
    } as unknown as KeyboardEvent;

    document.documentElement.appendChild(container);

    it('should call close modal when escape button is pressed', () => {
        const handler = handleEscapeBtn(closeModalSpy);
        handler(escapeEvent);
        expect(closeModalSpy).toBeCalled();
    });
});
