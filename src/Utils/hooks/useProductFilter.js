import { useEffect, useState } from 'react';

export default ({ data, searchTerm, selectedCategory, selectedStatus, selectedStock }) => {
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		const filterData = () => {
			const filtered = data.filter((product) => {
				const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
				const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
				const matchesStatus = selectedStatus ? product.status === selectedStatus : true;
				const matchesStock =
					selectedStock === 'available' ? product.inStock : selectedStock === 'outOfStock' ? !product.inStock : true;

				return matchesSearchTerm && matchesCategory && matchesStatus && matchesStock;
			});

			setFilteredData(filtered);
		};
		filterData();
	}, [searchTerm, selectedCategory, selectedStatus, selectedStock, data]);

	return filteredData;
};
