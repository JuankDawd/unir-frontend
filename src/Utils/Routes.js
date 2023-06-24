import Customer from '@pages/Customer/Customer';
import { Logistic } from '@pages/Logistic';
import { Order } from '@pages/Order';
import { Overview } from '@pages/Overview';
import { Product } from '@pages/Product';

// This object contains all of paths for the App
export const PATHS = {
	OVERVIEW: '/',
	LOGISTIC: '/logistic',
	CUSTOMER: '/customer',
	PRODUCT: '/product',
	ORDER: '/order',
};

// This Array contains all the Routes for the App
export const ROUTES = [
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
