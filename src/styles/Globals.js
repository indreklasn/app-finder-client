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

	a, u {
    text-decoration: none;
	}

	a {
    margin: 16px 0;
    padding: 0 0 16px;
    font-weight: 400;
    color: #745fb5;	
	}
`;
