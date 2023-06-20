import './Component.scss';

import { IonCard, IonCardContent, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';

import PropTypes from 'prop-types';

export function StyledCard({ Icon, Amount, Message }) {
	return (
		<IonCard>
			<IonCardContent>
				<IonGrid>
					<IonRow>
						<IonCol size="3" className="container">
							<IonIcon className="container-icon" icon={Icon} size="large"></IonIcon>
						</IonCol>
						<IonCol size="9">
							<IonGrid>
								<IonRow>
									<IonLabel className="SecondaryText amount">{Amount}</IonLabel>
								</IonRow>
								<IonRow>
									<IonLabel className="SecondaryText message">{Message}</IonLabel>
								</IonRow>
							</IonGrid>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCardContent>
		</IonCard>
	);
}

StyledCard.propTypes = {
	Icon: PropTypes.string.isRequired,
	Amount: PropTypes.number,
	Message: PropTypes.string.isRequired,
};
