import { informationCircle, timeOutline, warningOutline } from 'ionicons/icons';

export const OrderCards = [
	{
		Amount: 38,
		Message: 'Pedidos actuales',
		Icon: warningOutline,
	},
	{
		Amount: 2,
		Message: 'Pedidos Perdidos',
		Icon: warningOutline,
	},
	{
		Amount: 1,
		Message: 'Pedidos en Cola',
		Icon: informationCircle,
	},
	{
		Amount: 1,
		Message: 'Llegada de mercaderia',
		Icon: timeOutline,
	},
];

export const ReviewCards = [
	{
		Title: 'Bueno',
		Amount: 85,
		Message: 'Excelente servicio',
	},
	{
		Title: 'Regular',
		Amount: 10,
		Message: 'Buen servicio',
	},
	{
		Title: 'Malo',
		Amount: 5,
		Message: 'Problemas',
	},
];
