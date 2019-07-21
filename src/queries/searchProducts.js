import { gql } from 'apollo-boost';

const SearchProducts = gql`
	query($name: String!, $description: String, $tags: [String]) {
		searchProduct(name: $name, description: $description, tags: $tags) {
			name
			url
			description
			logo
			id
			tags
		}
	}
`;

export default SearchProducts;
