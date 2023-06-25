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
				path: '/logistics',
				icon: mapOutline,
			},
		],
	},
	{
		title: 'Gestion',
		items: [
			{
				title: 'Clientes',
				path: '/customers',
				icon: manOutline,
			},
			{
				title: 'Productos',
				path: '/products',
				icon: bagOutline,
			},
			{
				title: 'Pedidos',
				path: '/orders',
				icon: cartOutline,
			},
		],
	},
];
