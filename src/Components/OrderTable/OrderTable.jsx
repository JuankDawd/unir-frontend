import { IonCardContent, IonItem, IonList } from '@ionic/react';

import { OrderItem } from '@components/OrderItem/Component';
import PropTypes from 'prop-types';

export function OrderTable({ orders }) {
	return (
		<IonCardContent className="ion-padding">
			<IonList>
				{orders.map((order, key) => {
					return (
						<IonItem key={key}>
							<OrderItem item={order} />
						</IonItem>
					);
				})}
			</IonList>
		</IonCardContent>
	);
}

OrderTable.propTypes = {
	orders: PropTypes.any,
};
