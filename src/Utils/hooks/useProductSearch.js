import { useEffect, useState } from 'react';

import { ProductController } from '@api/Product.Controller';

export default () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const products = await ProductController.getProducts();
				setData([...data, ...products]);
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
