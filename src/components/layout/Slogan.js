import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
	text-align: center;
`;

function Slogan() {
	return (
		<Wrapper>
			<h1>appDB</h1>
			<h4>Find any app.</h4>
		</Wrapper>
	);
}

Slogan.propTypes = {};

export default Slogan;
