import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	background: white;
	padding: 20px 40px;
`;

const ProductName = styled.a`
	text-transform: uppercase;
`;

const Product = ({ product }) => {
	console.log(product);
	return (
		<Wrapper>
			<ProductName target="_blank" rel="noopener noreferrer" href={product.url}>
				{product.name}
			</ProductName>
			<span>{product.url}</span>
			{product.tags.map((tag, i) => (
				<span key={i}>{tag}</span>
			))}
		</Wrapper>
	);
};

Product.propTypes = {
	product: object,
};

export default Product;
