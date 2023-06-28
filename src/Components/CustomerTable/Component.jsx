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

import { CustomerController } from '@api/Customer.Controller';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { trashBinOutline } from 'ionicons/icons';

export function CustomerTable({ items }) {
	const handleUserDelete = async (id) => {
		await CustomerController.deleteCustomer(id);
	};

	const handleOrdersAmount = (orders) => orders.length;

	const handleOrdersTotalPrice = (orders) => orders.reduce((a, b) => a + b.totalAmount, 0);

	return (
		<Fragment>
			<IonList>
				<IonListHeader class="list-header">
					<IonGrid>
						<IonRow>
							<IonCol size="2.4">
								<IonLabel className="item-label left-align">Nombre</IonLabel>
							</IonCol>
							<IonCol size="2.4">
								<IonLabel className="item-label left-align">Correo Electronico</IonLabel>
							</IonCol>
							<IonCol size="2.4">
								<IonLabel className="item-label center-align">Pedidos</IonLabel>
							</IonCol>
							<IonCol size="2.4">
								<IonLabel className="item-label center-align">Costos</IonLabel>
							</IonCol>
							<IonCol size="2.4">
								<IonLabel className="item-label center-align">Acciones</IonLabel>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonListHeader>
				{items.map((customer) => {
					return (
						<IonItem key={customer.id} className="no-padding">
							<IonGrid>
								<IonRow>
									<IonCol size="2.4">
										<IonText className="item-label">
											<h3 className="item-label center-align">{customer.name}</h3>
										</IonText>
									</IonCol>
									<IonCol size="2.4">
										<IonText className="item-label">
											<h3 className="item-label center-align">{customer.email}</h3>
										</IonText>
									</IonCol>
									<IonCol size="2.4">
										<IonText className="item-label">
											<h3 className="item-label center-align">{handleOrdersAmount(customer.orders)}</h3>
										</IonText>
									</IonCol>
									<IonCol size="2.4">
										<IonText className="item-label">
											<h3 className="item-label center-align">{handleOrdersTotalPrice(customer.orders)}</h3>
										</IonText>
									</IonCol>
									<IonCol size="2.4">
										<IonButton color="danger" className="item-btn" onClick={() => handleUserDelete(customer.id)}>
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

CustomerTable.propTypes = {
	items: PropTypes.any,
};
