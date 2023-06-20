import { Client } from '@pages/Client';
import { Home } from '@pages/Home';
import { Login } from '@pages/LogIn';
import { Logistic } from '@pages/Logistic';
import { Order } from '@pages/Order';
import { Overview } from '@pages/Overview';
import { Product } from '@pages/Product';
import { Register } from '@pages/Register';

// This object contains all of paths for the App
export const PATHS = {
	HOME: '/',
	REGISTER: '/register',
	LOGIN: '/login',
	OVERVIEW: '/overview',
	LOGISTIC: '/logistic',
	CLIENT: '/client',
	PRODUCT: '/product',
	ORDER: '/order',
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
	{
		title: 'overview',
		path: PATHS.OVERVIEW,
		component: Overview,
	},

	{
		title: 'logistic',
		path: PATHS.LOGISTIC,
		component: Logistic,
	},

	{
		title: 'client',
		path: PATHS.CLIENT,
		component: Client,
	},

	{
		title: 'product',
		path: PATHS.PRODUCT,
		component: Product,
	},
	{
		title: 'order',
		path: PATHS.ORDER,
		component: Order,
	},
];
