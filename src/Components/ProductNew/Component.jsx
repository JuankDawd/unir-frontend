import React, { useState } from 'react';
import { IonButton, IonInput, IonLabel } from '@ionic/react';
import './Component.scss';

const CreateProductForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui tocariia agregar la api de creacion de producto
    setName('');
    setCategory('');
    setPrice(0);
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit} className="create-product-form" onSubmit={handleSubmit}>
      <IonLabel>
        Nombre:
        <IonInput
          type="text"
          value={name}
          onIonChange={(e) => setName(e.target.value)}
          required
        ></IonInput>
      </IonLabel>

      <IonLabel>
        Categoría:
        <IonInput
          type="text"
          value={category}
          onIonChange={(e) => setCategory(e.target.value)}
          required
        ></IonInput>
      </IonLabel>

      <IonLabel>
        Precio:
        <IonInput
          type="number"
          value={price}
          onIonChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        ></IonInput>
      </IonLabel>

      <IonLabel>
        Cantidad:
        <IonInput
          type="number"
          value={quantity}
          onIonChange={(e) => setQuantity(parseInt(e.target.value))}
          required
        ></IonInput>
      </IonLabel>

      <IonButton type="submit">Guardar Producto</IonButton>
    </form>
  );
};

export default CreateProductForm;