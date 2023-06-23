import { IonLabel } from '@ionic/react';
import { PageWrapper } from '../../../Components/PageWrapper/Component';
import CreateProductForm from '../../../Components/ProductNew/Component';
const Create = () => {
	return (
		<PageWrapper title="Home">
			<IonLabel>Crear un producto</IonLabel>
			<CreateProductForm/>
		</PageWrapper>
	);
};

export default Create;