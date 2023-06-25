import { useEffect, useState } from 'react';

import { CustomerController } from '@api/Customer.Controller';

export default () => {
	const [data, setData] = useState([
		{
			id: '',
			address1: '',
			address2: '',
			avatar: '',
			balance: 0,
			city: '',
			country: '',
			currency: '',
			email: '',
			hasDiscount: false,
			isVerified: false,
			name: '',
			phone: '',
			state: '',
			vatRate: 0,
			zipCode: '',
		},
	]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const customers = await CustomerController.getCustomers();
				setData([...data, ...customers]);
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
