import React from 'react';
import { Router } from '@reach/router';
import { Globals } from 'styles';
import { HomeContainer } from './views/home';
import { NotFoundContainer } from './views/not-found';
import { SubmitContainer } from './views/submit';

function App() {
	return (
		<>
			<Globals></Globals>
			<Router>
				<HomeContainer path="/"></HomeContainer>
				<SubmitContainer path="/submit"></SubmitContainer>
				<div path="/lol">lol</div>
				<NotFoundContainer default></NotFoundContainer>
			</Router>
		</>
	);
}

export default App;
