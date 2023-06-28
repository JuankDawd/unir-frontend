import './Component.scss';

import { IonButton, IonButtons, IonCardContent } from '@ionic/react';
import { useEffect, useState } from 'react';

import { CustomerTable } from '@components/CustomerTable/Component';
import PropTypes from 'prop-types';
import useCustomerSearch from '@utils/hooks/useCustomerSearch';

export function CustomerList({ searchTerm }) {
	const [filteredData, setFilteredData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	const { data } = useCustomerSearch({});

	useEffect(() => {
		const filterData = () => {
			const filtered = data.filter((customer) => customer.name.includes(searchTerm));
			setFilteredData(filtered);
		};

		filterData();
	}, [searchTerm, data]);

	const goToPreviousPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const goToNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

	return (
		<IonCardContent>
			<CustomerTable items={currentItems} />
			<IonButtons>
				<IonButton disabled={currentPage === 1} onClick={goToPreviousPage} className="pagination-button">
					Previous
				</IonButton>
				<IonButton
					disabled={indexOfLastItem >= filteredData.length}
					onClick={goToNextPage}
					className="pagination-button"
				>
					Next
				</IonButton>
			</IonButtons>
		</IonCardContent>
	);
}

CustomerList.propTypes = {
	searchTerm: PropTypes.string,
};
