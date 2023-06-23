import React, { forwardRef } from 'react';
import { IonContent } from '@ionic/react';
import '@ionic/react/css/core.css'; // Asegúrate de importar los estilos de Ionic

const Scrollbar = forwardRef((props, ref) => {
  return (
    <IonContent ref={ref} className="custom-scrollbar" {...props} />
  );
});

export default Scrollbar;