import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

export default () => (
	<Query
		query={gql`
			query {
				getProductById(id: "5d32d50c7c213e5998eed883") {
					name
					url
					id
					tags
				}
			}
		`}
	>
		{({ loading, error, data }) => {
			console.log(loading);
			console.log(data);
			console.log(error);
			return 1;
		}}
	</Query>
);
