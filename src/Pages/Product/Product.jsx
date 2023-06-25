import { IonCard } from '@ionic/react';
import { PageWrapper } from '@components/PageWrapper/Component';
import { ProductHeader } from '@components/ProductHeader/Component';
import { ProductsList } from '@components/ProductsList/Component';
import { useState } from 'react';
const Product = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedStatus, setSelectedStatus] = useState('');
	const [selectedStock, setSelectedStock] = useState('all');
	return (
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
		</PageWrapper>
	);
};

export default Product;
