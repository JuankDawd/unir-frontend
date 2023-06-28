import { bagOutline, cartOutline, manOutline, mapOutline, statsChartOutline, listOutline, createOutline, newspaperOutline } from 'ionicons/icons';

const clientItems = [
	{
	  title: 'Lista',
	  path: '/client',
	  icon: listOutline,
	},
	{
	  title: 'Editar',
	  path: '/client/edit',
	  icon: createOutline,
	},
  ];

const productItems =
[
	{
	  title: 'Lista',
	  path: '/product',
	  icon: statsChartOutline,
	},
	{
	  title: 'Crear',
	  path: '/product/create',
	  icon: newspaperOutline,
	},
  ];

export const Sections = [
	{
		title: 'General',
		items: [
			{
				title: 'Descripción General',
				path: '/',
				icon: statsChartOutline,
				subItems: '',
			},
			{
				title: 'Logistica',
				path: '/logistics',
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
				path: '/customers',
				icon: manOutline,
				subItems: [
					{
					  title: 'Lista',
					  path: '/client',
					  icon: listOutline,
					},
					{
					  title: 'Editar',
					  path: '/client/edit',
					  icon: createOutline,
					},
				  ],
			},
			{
				title: 'Productos',
				path: '/products',
				icon: bagOutline,
				subItems: [
					{
					  title: 'Lista',
					  path: '/product',
					  icon: statsChartOutline,
					},
					{
					  title: 'Crear',
					  path: '/product/create',
					  icon: newspaperOutline,
					},
				  ],

			},
			{
				title: 'Pedidos',
				path: '/orders',
				icon: cartOutline,
				subItems: '',

			},
		],
	},
];

