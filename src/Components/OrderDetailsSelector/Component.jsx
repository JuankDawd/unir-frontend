import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/react';

import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyledSelector } from '@components/StyledSelector/Component';
import { orderStatus } from './constants';

export function OrderDetailsSelector({ selector, handleSelector, statusChange }) {
	return (
		<Fragment>
			<IonGrid>
				<IonRow>
					<IonCol size="9">
						<StyledSelector
							label="Estado:"
							selectorOptions={orderStatus}
							setValue={(x) => handleSelector(x)}
							value={selector}
						/>
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
	statusChange: PropTypes.func,
};
