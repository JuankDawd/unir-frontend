import { bagOutline, cartOutline, manOutline, mapOutline, statsChartOutline } from 'ionicons/icons';

const clientItems = [
	{
	  title: 'list',
	  path: '/client',
	},
	{
	  title: 'Detalles',
	  path: '/client/details',
	},
  ];

const productItems =
[
	{
	  title: 'list',
	  path: '/product',
	},
	{
	  title: 'create',
	  path: '/product/create',
	},
  ];

  const orderItems =
  [
	  {
		title: 'list',
		path: '/orders',
	  },
	  {
		title: 'create',
		path: '/orders/create',
	  },
	];

export const Sections = [
	{
		title: 'General',
		items: [
			{
				title: 'Descripción General',
				path: '/overview',
				icon: statsChartOutline,
				subItems: '',
			},
			{
				title: 'Logistica',
				path: '/logistic',
				icon: mapOutline,
				subItems: '',
			},
		],
	},
	{
		title: 'Gestión',
		items: [
			{
				title: 'Clientes',
				path: '/client',
				icon: manOutline,
				subItems: clientItems,
			},
			{
				title: 'Productos',
				path: '/product',
				icon: bagOutline,
				subItems: productItems,

			},
			{
				title: 'Pedidos',
				path: '/order',
				icon: cartOutline,
				subItems: orderItems,

			},
		],
	},
];

