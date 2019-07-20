import { gql } from 'apollo-boost';

const getProductById = productId => gql`
	query {
		getProductById(id: ${productId}) {
			name
			url
			id
			tags
		}
	}
`;

export default getProductById;
