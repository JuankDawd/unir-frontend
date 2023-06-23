import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCol,
	IonContent,
	IonFab,
	IonFabButton,
	IonGrid,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonRow,
	IonSearchbar,
	IonSegment,
	IonSegmentButton,
	IonSelect,
	IonSelectOption,
	IonToolbar,
} from '@ionic/react';
import { orders, segments } from './Constants';

import { OrderItem } from '@components/OrderItem/Component';
import { PageWrapper } from '@components/PageWrapper/Component';
import { add } from 'ionicons/icons';

const Order = () => {
	const handleSegments = (segment) => {
		alert(segment);
	};
	return (
		<PageWrapper title="Pedidos">
			<IonContent>
				<IonCard>
					<IonCardHeader>
						<IonToolbar>
							<IonSegment value="all">
								{segments.map(({ title, value }, key) => {
									return (
										<IonSegmentButton key={key} value={value} onClick={() => handleSegments(value)}>
											<IonLabel>{title}</IonLabel>
										</IonSegmentButton>
									);
								})}
							</IonSegment>
						</IonToolbar>
						<IonToolbar>
							<IonGrid>
								<IonRow>
									<IonCol size="9">
										<IonSearchbar></IonSearchbar>
									</IonCol>
									<IonCol size="3">
										<IonSelect fill="outline" label="Ordenar por:" labelPlacement="stacked" interface="action-sheet">
											<IonSelectOption value="oldest">Lo mas viejo</IonSelectOption>
											<IonSelectOption value="newest">Lo mas nuevo</IonSelectOption>
										</IonSelect>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonToolbar>
					</IonCardHeader>
					<IonCardContent className="ion-padding">
						<IonList>
							{orders.map((order, key) => {
								return (
									<IonItem key={key}>
										<OrderItem item={order} />
									</IonItem>
								);
							})}
						</IonList>
					</IonCardContent>
				</IonCard>
				<IonFab slot="fixed" horizontal="end" vertical="bottom">
					<IonFabButton>
						<IonIcon icon={add}></IonIcon>
					</IonFabButton>
				</IonFab>
			</IonContent>
		</PageWrapper>
	);
};

export default Order;
