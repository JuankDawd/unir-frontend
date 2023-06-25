import { OrderDetailsItem } from '@components/OrderDetailsItem/OrderDetailsItem';
import { IonItem, IonItemGroup, IonLabel } from '@ionic/react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { OrderDetailsCustomer } from '@components/OrderDetailsCustomer/Component';

export function OrderDetailsList({ order }) {
	const handleDate = (date) => format(date, 'dd/MM/yyyy HH:mm');
	return (
		<IonItemGroup>
			<OrderDetailsItem title="ID" value={order.id} />

			<OrderDetailsCustomer customer={order.customer} />

			<OrderDetailsItem title="Factura" value={order.number} />
			<OrderDetailsItem title="Fecha" value={handleDate(order.createdAt)} />
			<OrderDetailsItem title="Cantidad Total" value={order.totalAmount} />

			{/* This is a selector */}
			<IonItem lines="none">
				<IonLabel>Status</IonLabel>
			</IonItem>
			<IonItem>
				<IonLabel>{order.status}</IonLabel>
			</IonItem>
		</IonItemGroup>
	);
}

OrderDetailsList.propTypes = {
	order: PropTypes.any,
};
