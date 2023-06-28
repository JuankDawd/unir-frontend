import { IonCardHeader, IonCol, IonGrid, IonRow, IonSearchbar, IonToolbar } from '@ionic/react';
import { categoryOptions, statusOptions, stockOptions } from '@utils/Constants/products';

import PropTypes from 'prop-types';
import { StyledSelector } from '@components/StyledSelector/Component';

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
				<IonGrid>
					<IonRow>
						<IonCol>
							<StyledSelector
								label="Categoria:"
								selectorOptions={categoryOptions}
								setValue={(x) => setSelectedCategory(x.detail.value)}
								value={selectedCategory}
							/>
						</IonCol>
						<IonCol>
							<StyledSelector
								label="Estado:"
								selectorOptions={statusOptions}
								setValue={(x) => setSelectedStatus(x.detail.value)}
								value={selectedStatus}
							/>
						</IonCol>
						<IonCol>
							<StyledSelector
								label="Stock:"
								selectorOptions={stockOptions}
								setValue={(x) => setSelectedStock(x.detail.value)}
								value={selectedStock}
							/>
						</IonCol>
					</IonRow>
				</IonGrid>
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
