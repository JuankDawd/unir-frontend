import { informationCircle, timeOutline, warningOutline } from 'ionicons/icons';

export const OrderCards = {
	complete: warningOutline,
	canceled: warningOutline,
	pending: informationCircle,
	rejected: timeOutline,
};

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
