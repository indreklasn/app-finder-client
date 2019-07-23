import React from 'react';
import { Router } from '@reach/router';
import { Globals } from 'styles';
import styled from 'styled-components';
import { Header, Slogan } from './components/layout';
import { HomeContainer } from './views/home';
import { NotFoundContainer } from './views/not-found';
import { SubmitContainer } from './views/submit';
import { SearchContainer } from './views/search';

const Layout = styled.div`
	max-width: 740px;
	margin: 35px auto;
	padding: 16px;
`;

function App() {
	return (
		<>
			<Globals></Globals>
			<Header></Header>
			<Slogan></Slogan>
			<Layout>
				<Router>
					<HomeContainer path="/"></HomeContainer>
					<SubmitContainer path="/submit"></SubmitContainer>
					<SearchContainer path="/search"></SearchContainer>
					<NotFoundContainer default></NotFoundContainer>
				</Router>
			</Layout>
		</>
	);
}

export default App;
