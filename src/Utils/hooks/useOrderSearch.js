import { useEffect, useState } from 'react';

/* eslint-disable no-console */
import { OrderController } from '@api/Order.Controller';

export default ({ id }) => {
	const [order, setOrder] = useState({});

	useEffect(() => {
		const loadOrder = async () => {
			const orderFound = await OrderController.getOrder(id);
			console.log(orderFound);
			setOrder(orderFound);
		};
		loadOrder();
	}, [id]);

	return { order };
};
