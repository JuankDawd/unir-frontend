import './Component.scss';

import {
	IonButton,
	IonCol,
	IonGrid,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonRow,
	IonText,
} from '@ionic/react';

import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { trashBinOutline } from 'ionicons/icons';

export function ProductTable({ items }) {
	const handleUserDelete = (id) => {
		alert(`We can't delete the customer with the ID: ${id} at the moment`);
	};
	return (
		<Fragment>
			<IonList>
				<IonListHeader class="list-header">
					<IonGrid>
						<IonRow>
							<IonCol size="2">
								<IonLabel className="item-label left-align">Nombre</IonLabel>
							</IonCol>

							<IonCol size="2">
								<IonLabel className="item-label center-align">Categoría</IonLabel>
							</IonCol>

							<IonCol size="2">
								<IonLabel className="item-label center-align">Estado</IonLabel>
							</IonCol>

							<IonCol size="2">
								<IonLabel className="item-label center-align">Precio</IonLabel>
							</IonCol>
							<IonCol size="2">
								<IonLabel className="item-label center-align">Cantidad</IonLabel>
							</IonCol>
							<IonCol size="2">
								<IonLabel className="item-label center-align">Acciones</IonLabel>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonListHeader>
				{items.map((product) => {
					return (
						<IonItem key={product.id} className="no-padding">
							<IonGrid>
								<IonRow>
									<IonCol size="2">
										<IonText className="item-label">
											<h3 className="item-label center-align">{product.name}</h3>
										</IonText>
									</IonCol>
									<IonCol size="2">
										<IonText className="item-label">
											<h3 className="item-label center-align">{product.category}</h3>
										</IonText>
									</IonCol>
									<IonCol size="2">
										<IonLabel className="item-label center-align">{product.status}</IonLabel>
									</IonCol>
									<IonCol size="2">
										<IonLabel className="item-label center-align">
											{product.currency}
											{product.price.toFixed(2)}
										</IonLabel>
									</IonCol>
									<IonCol size="2">
										<IonLabel className="item-label center-align">{product.quantity}</IonLabel>
									</IonCol>
									<IonCol size="2">
										<IonButton color="danger" className="item-btn" onClick={() => handleUserDelete(product.id)}>
											<IonIcon icon={trashBinOutline} />
										</IonButton>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonItem>
					);
				})}
			</IonList>
		</Fragment>
	);
}

ProductTable.propTypes = {
	items: PropTypes.any,
};
