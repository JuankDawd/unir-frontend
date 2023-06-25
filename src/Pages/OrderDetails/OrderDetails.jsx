import { IonContent } from '@ionic/react';
import { OrderDetailsHeader } from '@components/OrderDetailsHeader/Component';
import { OrderDetailsList } from '@components/OrderDetailsList/Component';
import { OrderDetailsTable } from '@components/OrderDetailsTable/Component';
import { PageWrapper } from '@components/PageWrapper/Component';
import useOrderSearch from '@utils/hooks/useOrderSearch';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
	const params = useParams();

	const { order } = useOrderSearch({ id: params.id });

	return (
		<PageWrapper title="Detalles de Pedido">
			<IonContent>
				<OrderDetailsHeader number={order.number} date={order.createdAt} />
				<OrderDetailsList order={order} />
				<OrderDetailsTable items={order.items} />
			</IonContent>
		</PageWrapper>
	);
};

export default OrderDetails;
