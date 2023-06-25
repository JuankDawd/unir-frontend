import { useEffect, useState } from 'react';

import { orders as mockedOrders } from '@pages/Order/Constants';

export default () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const filterOrdersByStatus = () => {
			const ordersList = mockedOrders;
			setOrders([...ordersList]);
		};

		filterOrdersByStatus();
	}, []);

	return { orders };
};
