import React from 'react';
import { getAllProducts } from 'queries';
import { Query } from 'react-apollo';
import Product from './Product';

const ShowAllProducts = () => (
	<Query query={getAllProducts}>
		{({ loading, error, data }) => {
			if (loading) return null;
			if (error) return `${error}`;

			return data.products.map((product, i) => (
				<Product key={i} product={product} />
			));
		}}
	</Query>
);

export default ShowAllProducts;
