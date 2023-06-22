import './Component.scss';

import { IonCard, IonCardContent, IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react';

import PropTypes from 'prop-types';

export function ReviewCard({ Title, Amount, Message }) {
	const handleTitle = () => `title ${Title.toLowerCase()}`;

	return (
		<IonCard>
			<IonCardContent>
				<IonGrid>
					<IonRow>
						<IonCol className="container">
							<IonLabel className={handleTitle()}>{Title}</IonLabel>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="container">
							<IonLabel className="amount">{Amount}</IonLabel>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="container">
							<IonLabel className="message">{Message}</IonLabel>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCardContent>
		</IonCard>
	);
}

ReviewCard.propTypes = {
	Title: PropTypes.string.isRequired,
	Amount: PropTypes.number.isRequired,
	Message: PropTypes.string.isRequired,
};
