import React from 'react';
import { Query } from 'react-apollo';
import { getProductById } from 'queries';

const id = '5d32d50c7c213e5998eed883';
export default () => (
	<Query query={getProductById} variables={{ id }}>
		{({ loading, error, data }) => {
			console.log(loading);
			console.log(data);
			console.log(error);
			return 1;
		}}
	</Query>
);
