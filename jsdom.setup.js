// Taken from https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'https://localhost'
});
const { window } = jsdom;
global.document = window.document;
global.window = document.defaultView;
global.navigator = {
    userAgent: 'node.js'
};

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce(
            (result, prop) => ({
                ...result,
                [prop]: Object.getOwnPropertyDescriptor(src, prop)
            }),
            {}
        );
    Object.defineProperties(target, props);
}
copyProps(document.defaultView, global);
