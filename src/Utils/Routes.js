import { Customer } from '@pages/Customer';
import { Logistic } from '@pages/Logistic';
import { Order } from '@pages/Order';
import { OrderDetails } from '@pages/OrderDetails';
import { Overview } from '@pages/Overview';
import { Product } from '@pages/Product';
import { ProductCreate } from '@pages/ProductCreate';
import { Register } from '@pages/Register';

// This object contains all of paths for the App
export const PATHS = {
	OVERVIEW: '/',
	LOGISTIC: '/logistics',
	CUSTOMER: '/customers',
	PRODUCT: '/products',
	PRODUCT_CREATE: '/products/create',
	ORDER: '/orders',
	ORDER_EDIT: '/orders/:id',
	REGISTER: '/register',
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
	{
		title: 'order edit',
		path: PATHS.ORDER_EDIT,
		component: OrderDetails,
	},
	{
		title: 'register',
		path: PATHS.REGISTER,
		component: Register,
	},
];
