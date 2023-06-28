import { useEffect, useState } from 'react';

import { CustomerController } from '@api/Customer.Controller';

export default () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const dataFetch = await CustomerController.getCustomers();
				setData([...data, ...dataFetch]);
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data };
};
