import { IonCardHeader, IonSearchbar, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react';
import { categoryOptions, statusOptions, stockOptions } from '@utils/Constants/products';

import PropTypes from 'prop-types';

export function ProductHeader({
	searchTerm,
	setSearchTerm,
	selectedCategory,
	setSelectedCategory,
	selectedStatus,
	setSelectedStatus,
	selectedStock,
	setSelectedStock,
}) {
	return (
		<IonCardHeader>
			<IonToolbar>
				<IonSearchbar value={searchTerm} onIonChange={(e) => setSearchTerm(e.detail.value)} placeholder="Buscar" />
			</IonToolbar>
			<IonToolbar>
				<IonSelect
					fill="outline"
					label="Categoria:"
					labelPlacement="floating"
					interface="popover"
					value={selectedCategory}
					onIonChange={(x) => setSelectedCategory(x)}
				>
					{categoryOptions.map(({ label, value }, key) => {
						return (
							<IonSelectOption value={value} key={key}>
								{label}
							</IonSelectOption>
						);
					})}
				</IonSelect>
				<IonSelect
					fill="outline"
					label="Estado:"
					labelPlacement="floating"
					interface="popover"
					value={selectedStatus}
					onIonChange={(x) => setSelectedStatus(x)}
				>
					{statusOptions.map(({ label, value }, key) => {
						return (
							<IonSelectOption value={value} key={key}>
								{label}
							</IonSelectOption>
						);
					})}
				</IonSelect>
				<IonSelect
					fill="outline"
					label="Stock:"
					labelPlacement="floating"
					interface="popover"
					value={selectedStock}
					onIonChange={(x) => setSelectedStock(x)}
				>
					{stockOptions.map(({ label, value }, key) => {
						return (
							<IonSelectOption value={value} key={key}>
								{label}
							</IonSelectOption>
						);
					})}
				</IonSelect>
			</IonToolbar>
		</IonCardHeader>
	);
}

ProductHeader.propTypes = {
	searchTerm: PropTypes.string,
	setSearchTerm: PropTypes.func,
	selectedCategory: PropTypes.string,
	setSelectedCategory: PropTypes.func,
	selectedStatus: PropTypes.string,
	setSelectedStatus: PropTypes.func,
	selectedStock: PropTypes.string,
	setSelectedStock: PropTypes.func,
};
