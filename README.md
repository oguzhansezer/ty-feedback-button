# TY-FEEDBACK-BUTTON

## _React Feedback Component_

for [live demo](https://react-for-feedback-button-6czlghbxv-oguzhansezer.vercel.app/)
there is a icon at right corner click it!

## Features

-   Collects all feedback at GoogleSheets
-   Customizable interface
-   Easy integration

## Installation

ty-feedbkack-button requires [Node.js](https://nodejs.org/) to run.

```sh
npm i ty-feedbkack-button
add  import TYFeedback from 'ty-feedbkack-button'
use <TYFeedback sheetMonkeyUrl='u need to sheet monkey url [sheetMonkey](https://sheetmonkey.io/)' />
```

Feedbacks at [google sheets](https://docs.google.com/spreadsheets/d/e/2PACX-1vTrQrVzfPNG1Ao3IhbiITbzsJq3oTVF5ADD2SuQxMONRXRlEU-hYslVY-xfMuvVGA94NgCIQWj9XgLi/pubhtml)

## Props (this area will be updated)

| Prop                    | type                          | isRequired |
| ----------------------- | ----------------------------- | ---------- |
| formTitleText           | string                        | optional   |
| formContentText         | string                        | optional   |
| sheetMonkeyUrl          | string (sheetMonkeyUrl)       | required   |
| modalWidth              | string or number              | optional   |
| modalZIndex             | number                        | optional   |
| modalClosable           | boolean                       | optional   |
| successText             | string                        | optional   |
| modalClassName          | string                        | optional   |
| feedbackButtonClassName | string                        | optional   |
| formTitleClassName      | string                        | optional   |
| formTitleColor          | string                        | optional   |
| formTitleAlign          | 'left' or'center' or 'right'; | optional   |
| onSubmit()              | () => void                    | optional   |
