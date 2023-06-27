import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
import { OrderCards, ReviewCards } from './Constants';

import { OrderCard } from '@components/OrderCard/Component';
import { PageWrapper } from '@components/PageWrapper/Component';
import { ReviewCard } from '@components/ReviewCard/Component';
import useLogisticSearch from '@utils/hooks/useLogisticSearch';

const Logistic = () => {
	const { data } = useLogisticSearch({});
	return (
		<PageWrapper title="Logistica">
			<IonGrid className="no-padding">
				<IonRow>
					{data.map((card, key) => {
						return (
							<IonCol
								key={key}
								size="3"
								sizeXs="12"
								sizeMd="12"
								sizeSm="12"
								sizeLg="6"
								sizeXl="3"
								className="no-padding"
							>
								<OrderCard Amount={card.quantity} Message={card.status} Icon={OrderCards[card.status]} />
							</IonCol>
						);
					})}
				</IonRow>
			</IonGrid>

			<IonCard>
				<IonCardHeader className="logistic-current_balance">
					<IonCardTitle>Reseñas de Clientes</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					<IonGrid>
						<IonRow>
							{ReviewCards.map((card, key) => {
								return (
									<IonCol key={key} sizeXs="12" sizeMd="12" sizeSm="12" sizeLg="12" sizeXl="4">
										<ReviewCard Amount={card.Amount} Message={card.Message} Title={card.Title} />
									</IonCol>
								);
							})}
						</IonRow>
					</IonGrid>
				</IonCardContent>
			</IonCard>
		</PageWrapper>
	);
};

export default Logistic;
