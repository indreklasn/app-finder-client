import React from 'react';
import { getAllProducts } from 'queries';
import { Query } from 'react-apollo';
import Product from './Product';

const ShowAllProducts = () => (
	<Query query={getAllProducts} pollInterval={60 * 60}>
		{({ loading, error, data }) => {
			if (loading) return <span>...loading</span>;
			if (error) return `${error}`;

			return (
				data.products &&
				data.products.map((product, i) => <Product key={i} product={product} />)
			);
		}}
	</Query>
);

export default ShowAllProducts;
