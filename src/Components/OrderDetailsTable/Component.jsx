import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonToolbar,
} from '@ionic/react';

import PropTypes from 'prop-types';

export function OrderDetailsTable({ items }) {
	return (
		<IonCard>
			<IonCardHeader>
				<IonToolbar>
					<IonCardTitle>
						<IonLabel className="order-title center-align full-width">Items Ordenados</IonLabel>
					</IonCardTitle>
				</IonToolbar>
			</IonCardHeader>
			<IonCardContent>
				<IonList>
					<IonListHeader lines="full">
						<IonLabel className="left-align">Descripción</IonLabel>
						<IonLabel>Ciclo de pagos</IonLabel>
						<IonLabel className="right-align">Cantidad</IonLabel>
					</IonListHeader>

					{items.map((item, key) => {
						return (
							<IonItem lines="none" key={key}>
								<IonLabel>{item.name}</IonLabel>
								<IonLabel className="center-align">{item.billingCycle}</IonLabel>
								<IonLabel className="right-align">{item.quantity}</IonLabel>
							</IonItem>
						);
					})}
				</IonList>
			</IonCardContent>
		</IonCard>
	);
}

OrderDetailsTable.propTypes = {
	items: PropTypes.any,
};
