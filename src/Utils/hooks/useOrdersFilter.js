import { useEffect, useState } from 'react';

export default ({ status, selector, orders }) => {
	const [ordersFiltered, setOrdersFiltered] = useState(orders);

	useEffect(() => {
		const filterOrdersByStatus = () => {
			// eslint-disable-next-line no-console
			if (status === 'all') {
				setOrdersFiltered([...orders]);
			} else {
				const filteredOrders = orders.filter((order) => order.status === status);
				setOrdersFiltered([...filteredOrders]);
			}
		};
		if (orders !== undefined) {
			filterOrdersByStatus();
		}
	}, [orders, status]);

	useEffect(() => {
		const filterOrderBySelector = () => {
			if (selector === 'newest') {
				const filteredOrders = orders.sort((a, b) => b.createdAt - a.createdAt);
				setOrdersFiltered([...filteredOrders]);
			} else {
				const filteredOrders = orders.sort((a, b) => a.createdAt - b.createdAt);
				setOrdersFiltered([...filteredOrders]);
			}
		};
		if (orders !== undefined) {
			filterOrderBySelector();
		}
	}, [selector, orders]);

	return { ordersFiltered };
};
