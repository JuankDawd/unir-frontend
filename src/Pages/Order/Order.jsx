/* eslint-disable no-console */
import { IonCard } from '@ionic/react';
import { OrderHeader } from '@components/OrderHeader/Component';
import { OrderTable } from '@components/OrderTable/Component';
import { PageWrapper } from '@components/PageWrapper/Component';
import { segments } from './Constants';
import useOrdersFilter from '@utils/hooks/useOrdersFilter';
import useOrdersSearch from '@utils/hooks/useOrdersSearch';
import { useState } from 'react';

const Order = () => {
	const [status, setStatus] = useState('all');
	const [selector, setSelector] = useState('newest');
	const [searchTerm, setSearchTerm] = useState('');
	const { data: orders } = useOrdersSearch({});
	const { ordersFiltered } = useOrdersFilter({ status, selector, orders });

	const handleSegments = (segment) => {
		setStatus(segment);
	};

	const handleSelector = (x) => {
		setSelector(x.detail.value);
		setStatus('all');
	};

	return (
		<PageWrapper title="Pedidos">
			<IonCard>
				<OrderHeader
					Segments={segments}
					status={status}
					handleSegments={(x) => handleSegments(x)}
					selector={selector}
					handleSelector={(x) => handleSelector(x)}
					searchTerm={searchTerm}
					setSearchTerm={(x) => setSearchTerm(x)}
				/>
				<OrderTable searchTerm={searchTerm} orders={ordersFiltered ?? orders} />
			</IonCard>
		</PageWrapper>
	);
};

export default Order;
