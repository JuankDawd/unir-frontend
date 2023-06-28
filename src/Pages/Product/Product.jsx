import { IonCard, IonFab, IonFabButton, IonIcon } from '@ionic/react';

import { PATHS } from '@utils/Routes';
import { PageWrapper } from '@components/PageWrapper/Component';
import { ProductHeader } from '@components/ProductHeader/Component';
import { ProductsList } from '@components/ProductsList/Component';
import { add } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Product = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [selectedStatus, setSelectedStatus] = useState('all');
	const [selectedStock, setSelectedStock] = useState('all');

	const navigate = useNavigate();
	const goTo = () => navigate(PATHS.PRODUCT_CREATE);
	return (
<<<<<<< HEAD
		<PageWrapper title="Home">
			<IonLabel>Productos</IonLabel>
			<ProductsList/>
=======
		<PageWrapper title="Productos">
			<IonCard>
				<ProductHeader
					searchTerm={searchTerm}
					setSearchTerm={(x) => setSearchTerm(x)}
					selectedCategory={selectedCategory}
					setSelectedCategory={(x) => setSelectedCategory(x)}
					selectedStatus={selectedStatus}
					setSelectedStatus={(x) => setSelectedStatus(x)}
					selectedStock={selectedStock}
					setSelectedStock={(x) => setSelectedStock(x)}
				/>
				<ProductsList
					searchTerm={searchTerm}
					selectedCategory={selectedCategory}
					selectedStatus={selectedStatus}
					selectedStock={selectedStock}
				/>
			</IonCard>
			<IonFab slot="fixed" horizontal="end" vertical="bottom">
				<IonFabButton onClick={() => goTo()}>
					<IonIcon icon={add}></IonIcon>
				</IonFabButton>
			</IonFab>
>>>>>>> origin/dev
		</PageWrapper>
	);
};

export default Product;
