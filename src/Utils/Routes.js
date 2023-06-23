import { Home } from '@pages/Home';
import { Login } from '@pages/LogIn';
import { Logistic } from '@pages/Logistic';
import { Order } from '@pages/Order';
import { Overview } from '@pages/Overview';
import { Product } from '@pages/Product';
import { Create } from '@pages/Product/Create';
import { Register } from '@pages/Register';
import { Edit } from '@pages/Customer/Edit';
import { Customer } from '@pages/Customer';
// This object contains all of paths for the App
export const PATHS = {
	HOME: '/',
	REGISTER: '/register',
	LOGIN: '/login',
	OVERVIEW: '/overview',
	LOGISTIC: '/logistic',
	CUSTOMER: '/customer',
	PRODUCT: '/product',
	CLIENT_DETAILS: '/customer/edit',
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
		title: 'customer',
		path: PATHS.CUSTOMER,
		component: Customer,
	},
	{
		title: 'listCostumers',
		path: PATHS.CLIENT_DETAILS,
		component: Edit,
	},
	{
		title: 'product',
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
