import { Customer } from '@pages/Customer';
import { Logistic } from '@pages/Logistic';
import { Order } from '@pages/Order';
import { Overview } from '@pages/Overview';
import { Product } from '@pages/Product';
import { ProductCreate } from '@pages/ProductCreate';

// This object contains all of paths for the App
export const PATHS = {
	OVERVIEW: '/',
	LOGISTIC: '/logistic',
	CUSTOMER: '/customer',
	CUSTOMER_DETAILS: '/customer/edit',
	PRODUCT: '/product',
	PRODUCT_CREATE: '/product/create',
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
		title: 'createProduct',
		path: PATHS.PRODUCT_CREATE,
		component: ProductCreate,
	},
	{
		title: 'order',
		path: PATHS.ORDER,
		component: Order,
	},
];
