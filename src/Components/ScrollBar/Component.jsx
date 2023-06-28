import '@ionic/react/css/core.css'; // Asegúrate de importar los estilos de Ionic

import { IonContent } from '@ionic/react';
import { forwardRef } from 'react';

const Scrollbar = forwardRef(function ScrollbarComponent(props, ref) {
	return <IonContent ref={ref} className="custom-scrollbar" {...props} />;
});

Scrollbar.displayName = 'Scrollbar';

export default Scrollbar;
