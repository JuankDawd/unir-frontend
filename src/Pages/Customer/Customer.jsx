import { IonLabel } from '@ionic/react';
import { PageWrapper } from '@components/PageWrapper/Component';
import CustomerList from '@components/CustomerList/Component';
const Customer = () => {
	return (
		<PageWrapper title="Home">
			<IonLabel>Clientes</IonLabel>
			<CustomerList/>
		</PageWrapper>
	);
};

export default Customer;
