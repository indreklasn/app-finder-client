import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	background: white;
	padding: 10px 20px 20px 20px;
	border-radius: 3.5px;
	box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
		0 1px 2px rgba(102, 119, 136, 0.3);
	margin: 25px 0;
`;

const ProductName = styled.a`
	text-transform: capitalize;
	font-size: 25px;
	margin: 5px 0;
	padding: 0;
`;

const ProductLogo = styled.img`
	width: 50px;
	height: 50px;
	object-fit: contain;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Tags = styled.span`
	margin: 0 7.5px 0 0;
	background: #77dab2;
	padding: 4px 7px;
	border-radius: 3.5px;
	box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
		0 1px 2px rgba(102, 119, 136, 0.3);
`;

const Url = styled.a`
	font-size: 10px;
	margin: 10px 0 0 0;
`;

const Product = ({ product }) => (
	<Wrapper>
		<Content>
			<TextWrapper>
				<ProductName
					target="_blank"
					rel="noopener noreferrer"
					href={product.url}
				>
					{product.name}
				</ProductName>
				<div>{product.description}</div>
				<Url href={product.url}>{product.url}</Url>
			</TextWrapper>
			<ProductLogo src={product.logo} />
		</Content>
		<hr />
		{product.tags.map((tag, i) => (
			<Tags key={i}>{tag}</Tags>
		))}
	</Wrapper>
);

Product.propTypes = {
	product: object,
};

export default Product;
