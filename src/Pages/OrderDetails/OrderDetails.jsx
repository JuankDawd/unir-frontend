import { IonContent } from '@ionic/react';
import { OrderDetailsHeader } from '@components/OrderDetailsHeader/Component';
import { OrderDetailsList } from '@components/OrderDetailsList/Component';
import { OrderDetailsTable } from '@components/OrderDetailsTable/Component';
import { PageWrapper } from '@components/PageWrapper/Component';
import useOrderProductsFetch from '@utils/hooks/useOrderProductsFetch';
import useOrderSearch from '@utils/hooks/useOrderSearch';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
	const params = useParams();

	const { order } = useOrderSearch({ id: params.id });
	const { products } = useOrderProductsFetch({ orderProducts: order?.orderProducts });

	return (
		<PageWrapper title="Detalles de Pedido">
			<IonContent>
				<OrderDetailsHeader number={order.number} date={order.createdAt} />
				<OrderDetailsList order={order} />
				<OrderDetailsTable items={products} />
			</IonContent>
		</PageWrapper>
	);
};

export default OrderDetails;
