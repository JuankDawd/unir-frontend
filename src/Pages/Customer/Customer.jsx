import { CustomerList } from '@components/CustomerList/Component';
import { IonLabel } from '@ionic/react';
import { PageWrapper } from '@components/PageWrapper/Component';

const Customer = () => {
	return (
		<PageWrapper title="Clientes">
			<IonLabel>Clientes</IonLabel>
			<CustomerList />
		</PageWrapper>
	);
};

export default Customer;
