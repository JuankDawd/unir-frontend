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
				const matchesCategory = selectedCategory === 'all' ? true : product.category === selectedCategory;
				const matchesStatus = selectedStatus === 'all' ? true : product.status === selectedStatus;
				const matchesStock =
					selectedStock === 'available' ? product.inStock : selectedStock === 'outOfStock' ? !product.inStock : true;

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
				<IonButton onClick={goToPreviousPage} className="pagination-button" disabled={currentPage === 1}>
					Previous
				</IonButton>
				<IonButton className="pagination-button" onClick={goToNextPage} disabled={currentItems.length < itemsPerPage}>
					Next
				</IonButton>
			</IonButtons>
		</IonCardContent>
	);
}

ProductsList.propTypes = {
	searchTerm: PropTypes.string,
	selectedCategory: PropTypes.string,
	selectedStatus: PropTypes.string,
	selectedStock: PropTypes.string,
};
