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
	CLIENT_LIST: '/client',
	PRODUCT: '/product',
	CLIENT_DETAILS: '/client/1',
	PRODUCT_LIST: '/product',
	PRODUCT_CREATE: '/product/new',
	ORDER: '/order',
};

// This Array contains all the Routes for the App

const clientItems = [
	{
	  title: 'list',
	  path: PATHS.CLIENT_DETAILS,
	},
	{
	  title: 'Detalles',
	  path: PATHS.CLIENT_DETAILS,
	},
  ];

const productItems =
[
	{
	  title: 'list',
	  path: PATHS.PRODUCT_LIST,
	},
	{
	  title: 'create',
	  path: PATHS.PRODUCT_CREATE,
	},
  ];

export const ROUTES = [
	{
		title: 'Home',
		path: PATHS.HOME,
		component: Home,
		items:  '',
	},
	{
		title: 'register',
		path: PATHS.REGISTER,
		component: Register,
		items:  '',
	},

	{
		title: 'login',
		path: PATHS.LOGIN,
		component: Login,
		items:  '',
	},
	{
		title: 'overview',
		path: PATHS.OVERVIEW,
		component: Overview,
		items:  '',
	},

	{
		title: 'logistic',
		path: PATHS.LOGISTIC,
		component: Logistic,
		items:  '',
	},

	{
		title: 'client',
		path: PATHS.CLIENT,
		component: Client,
		items: clientItems,
	},

	{
		title: 'product',
		path: PATHS.PRODUCT,
		component: Product,
		items: productItems,
	},
	{
		title: 'order',
		path: PATHS.ORDER,
		component: Order,
		items:  '',
	},
];
