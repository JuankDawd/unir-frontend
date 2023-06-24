import './Component.scss';

import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonRow, IonSearchbar } from '@ionic/react';
import { useEffect, useState } from 'react';

import { pencilOutline } from 'ionicons/icons';
import useCustomerSearch from '@utils/hooks/useCustomerSearch';

export function CustomerList() {
	const [filteredData, setFilteredData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);
	const [searchTerm, setSearchTerm] = useState('');

	const { data } = useCustomerSearch({});

	useEffect(() => {
		const filterData = () => {
			const filtered = data.filter((customer) => customer.name.toLowerCase().includes(searchTerm.toLowerCase()));
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
		<IonContent>
			<IonGrid>
				<IonRow>
					<IonCol>
						<IonSearchbar
							value={searchTerm}
							onIonChange={(e) => setSearchTerm(e.detail.value)}
							placeholder="Buscar"
						></IonSearchbar>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<table className="table">
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Correo Electronico</th>
									<th>Pedidos</th>
									<th>Valor</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{currentItems.map((customer) => (
									<tr key={customer.id}>
										<td>{customer.name}</td>
										<td>{customer.email}</td>
										<td>{customer.totalOrders}</td>
										<td>{customer.totalAmountSpent}</td>
										<td>
											<IonButton className="edit-button">
												<IonIcon icon={pencilOutline} />
											</IonButton>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonButton disabled={currentPage === 1} onClick={goToPreviousPage} className="pagination-button">
							Previous
						</IonButton>
					</IonCol>
					<IonCol>
						<IonButton
							disabled={indexOfLastItem >= filteredData.length}
							onClick={goToNextPage}
							className="pagination-button"
						>
							Next
						</IonButton>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>
	);
}
