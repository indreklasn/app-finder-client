import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
		box-sizing: border-box;
	}
	html, body, #root {
    background: #f1f3f5;
    font-family: -apple-system,BlinkMacSystemFont,segoe ui,roboto,oxygen,ubuntu,cantarell,fira sans,droid sans,helvetica neue,sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #345;
    overflow-x: hidden;
	}
`;
