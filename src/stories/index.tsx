import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './main';

chrome.tabs.query({ active: true, currentWindow: true }, tab => {
    ReactDOM.render(<Main />, document.getElementById('popup'));
});
