import {
	IonButton,
	IonButtons,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonLabel,
	IonToolbar,
} from '@ionic/react';

import { PATHS } from '@utils/Routes';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export function OrderDetailsHeader({ number, date }) {
	const navigate = useNavigate();
	const goTo = () => navigate(PATHS.ORDER);
	const handleSubtiltle = (date) => format(date, 'dd/MM/yyyy HH:mm');

	return (
		<IonCard>
			<IonCardHeader>
				<IonToolbar>
					<IonButtons collapse={true} slot="start">
						<IonButton onClick={() => goTo()}>Go Back</IonButton>
					</IonButtons>
					<IonCardTitle>
						<IonLabel className="order-title center-align full-width">{number}</IonLabel>
					</IonCardTitle>
					<IonCardSubtitle>{handleSubtiltle(date)}</IonCardSubtitle>
					<IonButtons collapse={true} slot="end">
						<IonButton disabled={true}></IonButton>
					</IonButtons>
				</IonToolbar>
			</IonCardHeader>
		</IonCard>
	);
}

OrderDetailsHeader.propTypes = {
	number: PropTypes.string,
	date: PropTypes.number,
};
