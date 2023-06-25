import './Component.scss';

import { IonButton, IonButtons, IonCardContent } from '@ionic/react';
import { useEffect, useState } from 'react';

import { ProductTable } from '@components/ProductTable/Component';
import PropTypes from 'prop-types';
import useProductSearch from '@utils/hooks/useProductSearch';

export function ProductsList({ searchTerm, selectedCategory, selectedStatus, selectedStock }) {
	const [filteredData, setFilteredData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	const { data } = useProductSearch({});

	const goToPreviousPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const goToNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	useEffect(() => {
		const filterData = () => {
			// eslint-disable-next-line no-console

			const filtered = data.filter((product) => {
				const productName = product.name.toLowerCase();
				const matchesSearchTerm = productName.includes(searchTerm.toLowerCase());
				const matchesCategory = selectedCategory !== '' ? product.category === selectedCategory : true;
				const matchesStatus = selectedStatus ? product.status === selectedStatus : true;
				const matchesStock =
					selectedStock === 'available' ? product.inStock : selectedStock === 'outOfStock' ? !product.inStock : true;
				// eslint-disable-next-line no-console
				console.log(matchesSearchTerm && matchesCategory && matchesStatus && matchesStock);
				return matchesSearchTerm && matchesCategory && matchesStatus && matchesStock;
			});

			setFilteredData(filtered);
		};

		filterData();
	}, [searchTerm, selectedCategory, selectedStatus, selectedStock, data]);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

	return (
		<IonCardContent>
			<ProductTable items={currentItems} />
			<IonButtons>
				<IonButton color="primary" fill="outline" onClick={goToPreviousPage} disabled={currentPage === 1}>
					Previous
				</IonButton>
				<IonButton color="primary" fill="outline" onClick={goToNextPage} disabled={currentItems.length < itemsPerPage}>
					Next
				</IonButton>
			</IonButtons>
		</IonCardContent>
	);
}

ProductsList.propTypes = {
	searchTerm: PropTypes.string,
	selectedCategory: PropTypes.bool,
	selectedStatus: PropTypes.bool,
	selectedStock: PropTypes.bool,
};
