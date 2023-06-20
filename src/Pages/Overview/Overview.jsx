import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { PageWrapper } from '@components/PageWrapper/Component';

const Overview = () => {
	return (
		<PageWrapper title="Descripción General">
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Bienvenido Nuevamente</IonCardTitle>
					<IonCardSubtitle>
						¡Tu tablero ha sido mejorado! Explore nuevas funciones como notificaciones, búsqueda, plataforma de trabajos
						y más.
					</IonCardSubtitle>
				</IonCardHeader>
			</IonCard>
			<IonCard>
				<IonCardHeader className="overview-current_balance">
					<IonCardSubtitle>BALANCE TOTAL</IonCardSubtitle>
					<IonCardTitle>$3,787,681.00</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>Variables</IonCardContent>
			</IonCard>
		</PageWrapper>
	);
};

export default Overview;
