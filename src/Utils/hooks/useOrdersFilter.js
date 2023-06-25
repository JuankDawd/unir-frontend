import { useEffect, useState } from 'react';

import { orders as mockedOrders } from '@pages/Order/Constants';

export default ({ status, selector, ordersOld }) => {
	const [ordersFiltered, setOrdersFiltered] = useState(ordersOld);

	useEffect(() => {
		const filterOrdersByStatus = () => {
			if (status === 'all') {
				setOrdersFiltered([...mockedOrders]);
			} else {
				const filteredOrders = mockedOrders.filter((order) => order.status === status);
				setOrdersFiltered([...filteredOrders]);
			}
		};

		filterOrdersByStatus();
	}, [status]);

	useEffect(() => {
		const filterOrderBySelector = () => {
			if (selector === 'newest') {
				const filteredOrders = ordersOld.sort((a, b) => a.createdAt - b.createdAt);
				setOrdersFiltered([...filteredOrders]);
			} else {
				const filteredOrders = ordersOld.sort((a, b) => b.createdAt - a.createdAt);
				setOrdersFiltered([...filteredOrders]);
			}
		};
		filterOrderBySelector();
	}, [selector, ordersOld]);

	return { ordersFiltered };
};
