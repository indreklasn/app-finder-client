import { gql } from 'apollo-boost';

const getAllProducts = gql`
	query {
		products {
			name
			url
			id
			tags
		}
	}
`;

export default getAllProducts;
