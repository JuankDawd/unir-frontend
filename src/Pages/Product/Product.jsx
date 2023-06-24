import { IonLabel } from '@ionic/react';
import { PageWrapper } from '@components/PageWrapper/Component';
import ProductsList from '@components/ProductsList/Component';
const Product = () => {
	return (
		<PageWrapper title="Home">
			<IonLabel>Productos</IonLabel>
			<ProductsList/>
		</PageWrapper>
	);
};

export default Product;
