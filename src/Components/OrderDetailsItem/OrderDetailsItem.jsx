import { IonItem, IonLabel } from '@ionic/react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

export function OrderDetailsItem({ title, value }) {
	return (
		<Fragment>
			<IonItem lines="none">
				<IonLabel>{title}</IonLabel>
			</IonItem>
			<IonItem>
				<IonLabel>{value}</IonLabel>
			</IonItem>
		</Fragment>
	);
}
OrderDetailsItem.propTypes = {
	title: PropTypes.string,
	value: PropTypes.string,
};
