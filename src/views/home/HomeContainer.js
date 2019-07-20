import React from 'react';
import { Query } from 'react-apollo';
import { getProductById } from 'queries';

export default () => (
	<Query query={getProductById}>
		{({ loading, error, data }) => {
			console.log(loading);
			console.log(data);
			console.log(error);
			return 1;
		}}
	</Query>
);
