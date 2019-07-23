import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Wrapper = styled.nav`
	display: flex;
	justify-content: flex-end;
	padding: 0 50px;
`;

const UL = styled.ul`
	display: flex;
`;

const Li = styled.li`
	margin: 0 10px;
`;

const Header = () => (
	<Wrapper>
		<UL>
			<Li>
				<Link to="/submit">Submit</Link>
			</Li>
			<Li>
				<Link to="/">Search</Link>
			</Li>
		</UL>
	</Wrapper>
);

export default Header;
