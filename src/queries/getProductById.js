import { gql } from 'apollo-boost';

const getProductById = gql`
	query($id: ID!) {
		getProductById(id: $id) {
			name
			url
			id
			tags
		}
	}
`;

export default getProductById;
