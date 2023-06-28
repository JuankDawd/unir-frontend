import { IonButton, IonButtons, IonCardContent, IonItem, IonList } from '@ionic/react';
import { useEffect, useState } from 'react';

import { OrderItem } from '@components/OrderItem/Component';
import { PATHS } from '@utils/Routes';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export function OrderTable({ searchTerm, orders }) {
	const navigate = useNavigate();

	const [filteredData, setFilteredData] = useState(() => orders);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	useEffect(() => {
		const filterData = () => {
			const filtered = orders.filter((order) => order.number.toLowerCase().includes(searchTerm.toLowerCase()));
			setFilteredData(filtered);
		};

		filterData();
	}, [searchTerm, orders]);

	const goTo = (id) => {
		navigate(`${PATHS.ORDER}/${id}`);
	};

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
		<IonCardContent className="ion-padding">
			<IonList>
				{currentItems.map((order, key) => {
					return (
						<IonItem key={key} button={true} lines="full" onClick={() => goTo(order.id)}>
							<OrderItem item={order} />
						</IonItem>
					);
				})}
			</IonList>
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

OrderTable.propTypes = {
	searchTerm: PropTypes.string,
	orders: PropTypes.any,
};
