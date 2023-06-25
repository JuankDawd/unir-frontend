import { IonItem, IonLabel } from '@ionic/react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

export function OrderDetailsCustomer({ customer }) {
	return (
		<Fragment>
			<IonItem lines="none">
				<IonLabel>Cliente</IonLabel>
			</IonItem>
			<IonItem lines="none">
				<IonLabel>{customer.name}</IonLabel>
			</IonItem>

			<IonItem lines="none">
				<IonLabel>{customer.address1}</IonLabel>
			</IonItem>
			<IonItem lines="none">
				<IonLabel>{customer.city}</IonLabel>
			</IonItem>
			<IonItem>
				<IonLabel>{customer.country}</IonLabel>
			</IonItem>
		</Fragment>
	);
}
OrderDetailsCustomer.propTypes = {
	customer: PropTypes.any,
};
