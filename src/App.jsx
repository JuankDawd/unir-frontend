import '@style/App.scss';
import '@ionic/react/css/core.css';

import { IonApp, setupIonicReact } from '@ionic/react';
import { Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ROUTES } from '@utils/Routes';
import { mockedUsers } from '@utils';
import store from '@services/store';
import { useEffect } from 'react';

setupIonicReact();
const App = () => {
	useEffect(() => {
		if (!localStorage.getItem('users')) {
			const usersJson = JSON.stringify(mockedUsers);

			localStorage.setItem('users', usersJson);
		}
	});

	return (
		<Provider store={store}>
			<IonApp>
				<Routes>
					{ROUTES.map((route, index) => (
						<Route key={index} path={route.path} element={<route.component />} />
					))}
				</Routes>
			</IonApp>
		</Provider>
	);
};

export default App;
