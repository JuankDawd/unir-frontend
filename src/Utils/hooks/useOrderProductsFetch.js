import { useEffect, useState } from 'react';

import { ProductController } from '@api/Product.Controller';

export default ({ orderProducts }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// eslint-disable-next-line no-console
				console.log({ msg: 'Hello There', orderProducts });
				const products = await ProductController.getOrderProducts(orderProducts);

				setProducts([...products]);
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [orderProducts]);

	return { products };
};
