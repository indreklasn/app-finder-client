import { gql } from 'apollo-boost';

const getAllProducts = gql`
	query {
		products {
			name
			url
			description
			logo
			id
			tags
		}
	}
`;

export default getAllProducts;
