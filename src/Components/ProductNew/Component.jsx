import './Component.scss';

import { IonButton } from '@ionic/react';
import { StyledNumberInput } from '@components/StyledNumberInput/Component';
import { StyledTextInput } from '@components/StyledTextInput/Component';
import { useState } from 'react';

export function CreateProductForm() {
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		// eslint-disable-next-line no-console
		console.log({
			name,
			category,
			price,
			quantity,
		});
		// Aqui tocariia agregar la api de creacion de producto
		setName('');
		setCategory('');
		setPrice(0);
		setQuantity(0);
	};

	return (
		<form onSubmit={handleSubmit} className="create-product-form">
			<StyledTextInput label="Nombre" placeholder="Digite un nombre" setValue={setName} type="text" value={name} />

			<StyledTextInput
				label="Categoría"
				placeholder="Digite una Categoría"
				setValue={setCategory}
				type="text"
				value={category}
			/>

			<StyledNumberInput label="Precio" placeholder="Digite un Precio" setValue={setPrice} type="float" value={price} />
			<StyledNumberInput
				label="Cantidad"
				placeholder="Digite una Cantidad"
				setValue={setQuantity}
				type="int"
				value={quantity}
			/>

			<IonButton type="submit">Guardar Producto</IonButton>
		</form>
	);
}
