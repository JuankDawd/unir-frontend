import { Home } from '@pages/Home';
import { Login } from '@pages/LogIn';
import { Register } from '@pages/Register';

// This object contains all of paths for the App
export const PATHS = {
	HOME: '/',
	REGISTER: '/register',
	LOGIN: '/login',
};

// This Array contains all the Routes for the App
export const ROUTES = [
	{
		title: 'Home',
		path: PATHS.HOME,
		component: Home,
	},
	{
		title: 'register',
		path: PATHS.REGISTER,
		component: Register,
	},

	{
		title: 'login',
		path: PATHS.LOGIN,
		component: Login,
	},
];
