import { IonButton, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption } from '@ionic/react';
import PropTypes from 'prop-types';
import { orderStatus } from './constants';
import { Fragment } from 'react';

export function OrderDetailsSelector({ selector, handleSelector, statusChange }) {
	return (
		<Fragment>
			<IonGrid>
				<IonRow>
					<IonCol size="9">
						<IonSelect
							fill="outline"
							label="Estado:"
							labelPlacement="floating"
							interface="popover"
							value={selector}
							onIonChange={(x) => handleSelector(x)}
						>
							{orderStatus.map(({ title, value }, key) => {
								return (
									<IonSelectOption value={value} key={key}>
										{title}
									</IonSelectOption>
								);
							})}
						</IonSelect>
					</IonCol>
					<IonCol size="3">
						<IonButton disabled={statusChange()}>Actualizar</IonButton>
					</IonCol>
				</IonRow>
			</IonGrid>
		</Fragment>
	);
}

OrderDetailsSelector.propTypes = {
	selector: PropTypes.string,
	handleSelector: PropTypes.func,
	statusChange: PropTypes.bool,
};
