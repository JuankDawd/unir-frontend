import './Component.scss';

import { IonButton, IonIcon, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';

import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { trashBinOutline } from 'ionicons/icons';

export function CustomerTable({ items }) {
	const handleUserDelete = (id) => {
		alert(`We can't delete the customer with the ID: ${id} at the moment`);
	};
	return (
		<Fragment>
			<IonList>
				<IonListHeader class="list-header">
					<IonLabel className="item-label left-align">Nombre</IonLabel>
					<IonLabel className="item-label left-align">Correo Electronico</IonLabel>
					<IonLabel className="item-label center-align">Pedidos</IonLabel>
					<IonLabel className="item-label center-align">Valor</IonLabel>
					<IonLabel className="item-label center-align">Acciones</IonLabel>
				</IonListHeader>
				{items.map((customer) => {
					return (
						<IonItem key={customer.id} className="no-padding">
							<IonLabel className="item-label left-align">{customer.name}</IonLabel>
							<IonLabel className="item-label">{customer.email}</IonLabel>
							<IonLabel className="item-label center-align">{customer.totalOrders}</IonLabel>
							<IonLabel className="item-label center-align">{customer.totalAmountSpent}</IonLabel>
							<IonButton color="danger" className="item-btn" onClick={() => handleUserDelete(customer.id)}>
								<IonIcon icon={trashBinOutline} />
							</IonButton>
						</IonItem>
					);
				})}
			</IonList>
		</Fragment>
	);
}

CustomerTable.propTypes = {
	items: PropTypes.any,
};
