import { IonCard, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/react';

import { OrderHeader } from '@components/OrderHeader/Component';
import { OrderTable } from '@components/OrderTable/OrderTable';
import { PageWrapper } from '@components/PageWrapper/Component';
import { add } from 'ionicons/icons';
import { segments } from './Constants';
import useOrdersFilter from '@utils/hooks/useOrdersFilter';
import { useState } from 'react';

const Order = () => {
	const [status, setStatus] = useState('all');
	const { orders } = useOrdersFilter({ status });
	const handleSegments = (segment) => {
		setStatus(segment);
	};
	return (
		<PageWrapper title="Pedidos">
			<IonContent>
				<IonCard>
					<OrderHeader Segments={segments} handleSegments={(x) => handleSegments(x)} />
					<OrderTable orders={orders} />
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
