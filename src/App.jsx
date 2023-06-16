import '@style//App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@utils/Routes';
import { mockedUsers } from '@utils';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		if (!localStorage.getItem('users')) {
			const usersJson = JSON.stringify(mockedUsers);

			localStorage.setItem('users', usersJson);
		}
	});

	return (
		<BrowserRouter>
			<Routes>
				{ROUTES.map((route, index) => (
					<Route key={index} path={route.path} element={<route.component />} />
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
