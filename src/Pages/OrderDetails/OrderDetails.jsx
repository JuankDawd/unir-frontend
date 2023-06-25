import { OrderDetailsList } from '@components/OrderDetailsList/OrderDetailsList';
import { PageWrapper } from '@components/PageWrapper/Component';

import {
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonItem,
	IonItemGroup,
	IonLabel,
	IonToolbar,
} from '@ionic/react';
import { PATHS } from '@utils/Routes';
import useOrderSearch from '@utils/hooks/useOrderSearch';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
const OrderDetails = () => {
	const params = useParams();
	const navigate = useNavigate();
	const { order } = useOrderSearch({ id: params.id });

	const handleSubtiltle = (date) => format(date, 'dd/MM/yyyy HH:mm');

	const goTo = () => navigate(PATHS.ORDER);

	return (
		<PageWrapper title="Detalles de Pedido">
			<IonContent>
				<IonCard>
					<IonCardHeader>
						<IonToolbar>
							<IonButtons collapse={true} slot="start">
								<IonButton onClick={() => goTo()}>Go Back</IonButton>
							</IonButtons>
							<IonCardTitle>
								<IonLabel className="order-title center-align full-width">{order.number}</IonLabel>
							</IonCardTitle>
							<IonCardSubtitle>{handleSubtiltle(order.createdAt)}</IonCardSubtitle>
							<IonButtons collapse={true} slot="end">
								<IonButton disabled={true}></IonButton>
							</IonButtons>
						</IonToolbar>
					</IonCardHeader>
				</IonCard>
				<IonCard>
					<IonCardHeader>
						<IonToolbar>
							<IonCardTitle>
								<IonLabel className="order-title center-align full-width">Información Básica</IonLabel>
							</IonCardTitle>
						</IonToolbar>
					</IonCardHeader>
					<IonCardContent>
						<OrderDetailsList order={order} />
					</IonCardContent>
				</IonCard>

				<IonCard>
					<IonCardHeader>
						<IonToolbar>
							<IonCardTitle>
								<IonLabel className="order-title center-align full-width">Información Básica</IonLabel>
							</IonCardTitle>
						</IonToolbar>
					</IonCardHeader>
					<IonCardContent>
						<IonItemGroup>
							<IonItem lines="none">
								<IonLabel>Descripción</IonLabel>
								<IonLabel>Ciclo de pagos</IonLabel>
								<IonLabel>Cantidad</IonLabel>
							</IonItem>
							{order.items.map((item, key) => {
								return (
									<IonItem lines="none" key={key}>
										<IonLabel>{item.name}</IonLabel>
										<IonLabel>{item.billingCycle}</IonLabel>
										<IonLabel>{item.quantity}</IonLabel>
									</IonItem>
								);
							})}
						</IonItemGroup>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</PageWrapper>
	);
};

export default OrderDetails;
