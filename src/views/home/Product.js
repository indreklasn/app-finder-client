import React from 'react';
import { object } from 'prop-types';

const Product = ({ product }) => {
	console.log(product);
	return (
		<div>
			<span>{product.name}</span>
			<span>{product.url}</span>
		</div>
	);
};

Product.propTypes = {
	product: object,
};

export default Product;
