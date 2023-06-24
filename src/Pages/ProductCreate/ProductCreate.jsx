import { CreateProductForm } from '@components/ProductNew/Component';
import { PageWrapper } from '../../Components/PageWrapper/Component';
const ProductCreate = () => {
	return (
		<PageWrapper title="Añadir Producto">
			<CreateProductForm />
		</PageWrapper>
	);
};

export default ProductCreate;
