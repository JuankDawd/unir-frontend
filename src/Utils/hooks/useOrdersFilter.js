import { useEffect, useState } from 'react';

import { orders as mockedOrders } from '@pages/Order/Constants';

export default ({ status }) => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const loadOrders = () => {
			if (status === 'all') {
				setOrders([...mockedOrders]);
			} else {
				const filteredOrders = mockedOrders.filter((order) => order.status === status);
				setOrders([...filteredOrders]);
			}
		};

		loadOrders();
	}, [status]);

	return { orders };
};
