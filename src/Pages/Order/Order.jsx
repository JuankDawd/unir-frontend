import { IonCard, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/react';

import { OrderHeader } from '@components/OrderHeader/Component';
import { OrderTable } from '@components/OrderTable/OrderTable';
import { PageWrapper } from '@components/PageWrapper/Component';
import { add } from 'ionicons/icons';
import { segments } from './Constants';
import useOrdersFilter from '@utils/hooks/useOrdersFilter';
import useOrdersSearch from '@utils/hooks/useOrdersSearch';
import { useState } from 'react';

const Order = () => {
	const [status, setStatus] = useState('all');
	const [selector, setSelector] = useState('newest');
	const { orders } = useOrdersSearch({});
	const { ordersFiltered } = useOrdersFilter({ status, selector, ordersOld: orders });

	const handleSegments = (segment) => {
		setStatus(segment);
	};
	const handleSelector = (x) => {
		setSelector(x.detail.value);
		setStatus('all');
	};

	return (
		<PageWrapper title="Pedidos">
			<IonContent>
				<IonCard>
					<OrderHeader
						Segments={segments}
						status={status}
						handleSegments={(x) => handleSegments(x)}
						selector={selector}
						handleSelector={(x) => handleSelector(x)}
					/>
					<OrderTable orders={ordersFiltered ?? orders} />
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
