import { OrderDetailsItem } from '@components/OrderDetailsItem/Component';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItemGroup, IonLabel, IonToolbar } from '@ionic/react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { OrderDetailsCustomer } from '@components/OrderDetailsCustomer/Component';
import { OrderDetailsSelector } from '@components/OrderDetailsSelector/Component';
import { useEffect, useState } from 'react';
import numeral from 'numeral';

export function OrderDetailsList({ order }) {
	const handleDate = (date) => format(date, 'dd/MM/yyyy HH:mm');
	const handleAmount = (amount, currency) => numeral(amount).format(`${currency}0,0.00`);

	const [selector, setSelector] = useState('');
	const handleSelector = (x) => {
		setSelector(x.detail.value);
	};

	const handleStatusChange = () => selector === order.status;

	useEffect(() => {
		setSelector(order.status);
	}, [order]);

	return (
		<IonCard>
			<IonCardHeader>
				<IonToolbar>
					<IonCardTitle>
						<IonLabel className="order-title center-align full-width">Información Básica</IonLabel>
					</IonCardTitle>
				</IonToolbar>
			</IonCardHeader>
			<IonCardContent>
				<IonItemGroup>
					<OrderDetailsItem title="ID" value={order.id} />
					<OrderDetailsCustomer customer={order.customer} />
					<OrderDetailsItem title="Factura" value={order.number} />
					<OrderDetailsItem title="Fecha" value={handleDate(order.createdAt)} />
					<OrderDetailsItem title="Cantidad Total" value={handleAmount(order.totalAmount, order.currency)} />

					<OrderDetailsSelector
						selector={selector}
						handleSelector={(x) => handleSelector(x)}
						statusChange={handleStatusChange}
					/>
				</IonItemGroup>
			</IonCardContent>
		</IonCard>
	);
}

OrderDetailsList.propTypes = {
	order: PropTypes.any,
};
