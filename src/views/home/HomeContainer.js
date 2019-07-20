import React from 'react';
import { Query } from 'react-apollo';
import { getAllProducts } from 'queries';
import Search from './Search';
import Product from './Product';

export default () => (
	<>
		<Search></Search>
		<Query query={getAllProducts}>
			{({ loading, error, data }) => {
				console.log(data);
				if (loading) return null;
				if (error) return `Error! ${error}`;

				return data.products.map((product, i) => (
					<Product key={i} product={product} />
				));
			}}
		</Query>
	</>
);
