import { IonCardHeader, IonSearchbar, IonToolbar } from '@ionic/react';

import PropTypes from 'prop-types';

export function CustomerHeader({ searchTerm, setSearchTerm }) {
	return (
		<IonCardHeader>
			<IonToolbar>
				<IonSearchbar value={searchTerm} onIonChange={(e) => setSearchTerm(e.detail.value)} placeholder="Buscar" />
			</IonToolbar>
			<IonToolbar></IonToolbar>
		</IonCardHeader>
	);
}
CustomerHeader.propTypes = {
	searchTerm: PropTypes.string,
	setSearchTerm: PropTypes.func,
};
