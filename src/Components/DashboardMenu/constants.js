import { bagOutline, cartOutline, manOutline, mapOutline, statsChartOutline } from 'ionicons/icons';

export const Sections = [
	{
		title: 'General',
		items: [
			{
				title: 'Descripción General',
				path: '/',
				icon: statsChartOutline,
			},
			{
				title: 'Logistica',
				path: '/logistic',
				icon: mapOutline,
			},
		],
	},
	{
		title: 'Gestion',
		items: [
			{
				title: 'Customer',
				path: '/customer',
				icon: manOutline,
			},
			{
				title: 'Productos',
				path: '/product',
				icon: bagOutline,
			},
			{
				title: 'Pedidos',
				path: '/order',
				icon: cartOutline,
			},
		],
	},
];
