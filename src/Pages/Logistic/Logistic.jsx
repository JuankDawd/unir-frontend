import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';

import { Fragment } from 'react';
import { PageWrapper } from '@components/PageWrapper/Component';
import { StyledCard } from '@components/StyledCard/Component';
import { StyledCards } from './Constants';

const Logistic = () => {
	return (
		<PageWrapper title="Logistica">
			<Fragment>
				<IonGrid>
					<IonRow>
						{StyledCards.map((card, key) => {
							return (
								<IonCol key={key} size="3" sizeXs="12" sizeMd="12" sizeSm="12" sizeLg="6" sizeXl="3">
									<StyledCard Amount={card.Amount} Message={card.Message} Icon={card.Icon} />
								</IonCol>
							);
						})}
					</IonRow>
				</IonGrid>
			</Fragment>
			<IonCard>
				<IonCardHeader className="logistic-current_balance">
					<IonCardTitle>Reseñas de Clientes</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>Reseñas</IonCardContent>
			</IonCard>
		</PageWrapper>
	);
};

export default Logistic;
