import React from 'react';
import ReactDOM from 'react-dom';
import FeedbackModal from '../src/index';

//example url cors enabled for localhost http://localhost:8080/
ReactDOM.render(
    <React.StrictMode>
        <FeedbackModal sheetMonkeyUrl='https://api.sheetmonkey.io/form/rRjBvKqTE6oDZe8AEZxxPt' />
    </React.StrictMode>,
    document.getElementById('root')
);
