import './Component.scss';

import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonRow, IonSearchbar } from '@ionic/react';
import { categoryOptions, statusOptions, stockOptions } from '@utils/Constants/products';
import { useEffect, useState } from 'react';

import { pencilOutline } from 'ionicons/icons';
import useProductFilter from '@utils/hooks/useProductFilter';
import useProductSearch from '@utils/hooks/useProductSearch';

export function ProductsList() {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedStatus, setSelectedStatus] = useState('');
	const [selectedStock, setSelectedStock] = useState('all');
	const [filteredData, setFilteredData] = useState([]);

	const { data } = useProductSearch({});
	const { _filteredData } = useProductFilter({ data, searchTerm, selectedCategory, selectedStatus, selectedStock });

	const goToPreviousPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const goToNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

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

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

	return (
		<IonContent>
			<IonGrid>
				<IonRow>
					<IonCol></IonCol>
					<IonCol>
						<IonButton routerLink="/product/create" expand="full">
							Crear Nuevo Producto
						</IonButton>
					</IonCol>
				</IonRow>
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
						<select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
							<option value="">All Categories</option>
							{categoryOptions.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</IonCol>
					<IonCol>
						<select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
							<option value="">All Statuses</option>
							{statusOptions.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</IonCol>
					<IonCol>
						<select value={selectedStock} onChange={(e) => setSelectedStock(e.target.value)}>
							{stockOptions.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<table className="table">{/* Rest of the table code */}</table>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<div className="pagination">{/* Pagination buttons */}</div>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<table className="table">
							<thead>
								<tr>
									<th>Imagen</th>
									<th>Nombre</th>
									<th>Categoría</th>
									<th>Estado</th>
									<th>Precio</th>
									<th>Cantidad</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{currentItems.map((product) => (
									<tr key={product.id}>
										<td>
											{product.image ? <img src={product.image} alt={product.name} /> : <span>No image available</span>}
										</td>
										<td>{product.name}</td>
										<td>{product.category}</td>
										<td>{product.status}</td>
										<td>
											{product.currency}
											{product.price.toFixed(2)}
										</td>
										<td>{product.quantity}</td>
										<td>
											<IonButton color="primary" fill="clear">
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
						<div className="pagination">
							<IonButton color="primary" fill="outline" onClick={goToPreviousPage} disabled={currentPage === 1}>
								Previous
							</IonButton>
							<IonButton
								color="primary"
								fill="outline"
								onClick={goToNextPage}
								disabled={currentItems.length < itemsPerPage}
							>
								Next
							</IonButton>
						</div>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>
	);
}
