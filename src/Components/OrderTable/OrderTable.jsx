import { IonCardContent, IonItem, IonList } from '@ionic/react';

import { OrderItem } from '@components/OrderItem/Component';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@utils/Routes';

export function OrderTable({ orders }) {
	const navigate = useNavigate();

	const goTo = (id) => {
		navigate(`${PATHS.ORDER}/${id}`);
	};
	return (
		<IonCardContent className="ion-padding">
			<IonList>
				{orders.map((order, key) => {
					return (
						<IonItem key={key} button={true} lines="full" onClick={() => goTo(order.id)}>
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
