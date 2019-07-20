import React from 'react';
import { Query } from 'react-apollo';
import { getAllProducts } from 'queries';

export default () => (
	<Query query={getAllProducts}>
		{({ loading, error, data }) => 1}
	</Query>
);
