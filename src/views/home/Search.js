import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
	width: 100%;
`;
const Label = styled.label`
	width: 100%;
	background: #fff;
	box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
		0 1px 2px rgba(102, 119, 136, 0.3);
	display: flex;
	height: 64px;
	align-items: center;
	cursor: text;
`;

const Input = styled.input`
	width: 100%;
	height: 64px;
	background: 0 0;
	border: 0;
	flex: 1 1 auto;
	font-weight: 700;
	color: #111;
	min-width: 48px;
	padding: 0 25px;
	font-size: calc(19px + 0 * ((100vw - 768px) / 512));
`;

const Search = () => {
	const [search, setSearch] = useState('');
	return (
		<Form>
			<Label>
				<Input type="search" placeholder="Search..." />
			</Label>
		</Form>
	);
};

export default Search;
