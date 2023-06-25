import { CustomerList } from '@components/CustomerList/Component';
import { PageWrapper } from '@components/PageWrapper/Component';

const Customer = () => {
	return (
		<PageWrapper title="Clientes">
			<CustomerList />
		</PageWrapper>
	);
};

export default Customer;
