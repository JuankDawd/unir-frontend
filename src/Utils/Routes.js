import { Client } from '@pages/Client';
import { Home } from '@pages/Home';
import { Login } from '@pages/LogIn';
import { Logistic } from '@pages/Logistic';
import { Order } from '@pages/Order';
import { Overview } from '@pages/Overview';
import { Product } from '@pages/Product';
import { Create } from '@pages/Product/Create';
import { Register } from '@pages/Register';
import { Edit } from '@pages/Client/Edit';

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
	CLIENT_DETAILS: '/client/edit',
	PRODUCT_LIST: '/product',
	PRODUCT_CREATE: '/product/create',
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
		title: 'listClient',
		path: PATHS.CLIENT_DETAILS,
		component: Edit,
	},
	{
		title: 'detailsClient',
		path: PATHS.CLIENT_DETAILS,
		component: Client,
	},
	{
		title: 'product',
		path: PATHS.PRODUCT,
		component: Product,
	},
	{
		title: 'listProducts',
		path: PATHS.PRODUCT,
		component: Product,
	},
	{
		title: 'createProduct',
		path: PATHS.PRODUCT_CREATE,
		component: Create,
	},
	{
		title: 'order',
		path: PATHS.ORDER,
		component: Order,
	},
];
