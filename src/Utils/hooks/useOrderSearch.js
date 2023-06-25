/* eslint-disable no-console */
import { OrderController } from '@api/Order.Controller';
import { useEffect, useState } from 'react';

export default ({ id }) => {
	const [order, setOrder] = useState({
		id: '',
		createdAt: 0,
		currency: '',
		customer: {
			address1: '',
			address2: '',
			city: '',
			country: '',
			email: '',
			name: '',
		},
		items: [
			{
				id: '',
				billingCycle: '',
				currency: '',
				name: '',
				quantity: 0,
				unitAmount: 0,
			},
		],
		number: '',
		paymentMethod: '',
		status: 'pending',
		totalAmount: 0,
	});

	useEffect(() => {
		const loadOrder = () => {
			try {
				const orderFound = OrderController.getOrder(id);
				if (orderFound !== null) {
					console.log(orderFound, { ...orderFound });
					setOrder({ ...orderFound });
				}
			} catch (err) {
				setOrder();
			}
		};
		loadOrder();
	}, [id]);

	return { order };
};
