import { CustomerHeader } from '@components/CustomerHeader/Component';
import { CustomerList } from '@components/CustomerList/Component';
import { IonCard } from '@ionic/react';
import { PageWrapper } from '@components/PageWrapper/Component';
import { useState } from 'react';

const Customer = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
<<<<<<< HEAD
		<PageWrapper title="Home">
			<IonLabel>Clientes</IonLabel>
			<CustomerList/>
=======
		<PageWrapper title="Clientes">
			<IonCard>
				<CustomerHeader searchTerm={searchTerm} setSearchTerm={(x) => setSearchTerm(x)} />
				<CustomerList searchTerm={searchTerm} />
			</IonCard>
>>>>>>> origin/dev
		</PageWrapper>
	);
};

export default Customer;
