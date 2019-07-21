import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { searchProducts } from 'queries';
import styled from 'styled-components';
import { ShowAllProducts, Product } from '.';

const Form = styled.form`
	width: 100%;
	margin: 0 0 55px 0;
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

export default () => {
	const [search, setSearch] = useState('');
	console.log(search);

	return (
		<>
			<Form>
				<Label>
					<Input
						onChange={e => setSearch(e.target.value)}
						type="search"
						placeholder="Search..."
					/>
				</Label>
			</Form>
			<div>
				<Query query={searchProducts} variables={{ name: search }}>
					{({ data, loading, error }) => {
						if (loading) return <span>...loading</span>;
						if (error) return <span>{error}</span>;
						if (data.searchProduct.length === 0) {
							return <ShowAllProducts />;
						}
						if (data.searchProduct.length >= 0) {
							return data.searchProduct.map((product, i) => (
								<Product key={i} product={product} />
							));
						}
					}}
				</Query>
			</div>
		</>
	);
};
