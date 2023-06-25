import {
	IonCardHeader,
	IonCol,
	IonGrid,
	IonLabel,
	IonRow,
	IonSearchbar,
	IonSegment,
	IonSegmentButton,
	IonSelect,
	IonSelectOption,
	IonToolbar,
} from '@ionic/react';

import PropTypes from 'prop-types';

export function OrderHeader({ Segments, status, handleSegments, selector, handleSelector }) {
	return (
		<IonCardHeader>
			<IonToolbar>
				<IonSegment value={status}>
					{Segments.map(({ title, value }, key) => {
						return (
							<IonSegmentButton key={key} value={value} onClick={() => handleSegments(value)}>
								<IonLabel>{title}</IonLabel>
							</IonSegmentButton>
						);
					})}
				</IonSegment>
			</IonToolbar>
			<IonToolbar>
				<IonGrid>
					<IonRow>
						<IonCol size="9">
							<IonSearchbar />
						</IonCol>
						<IonCol size="3">
							<IonSelect
								fill="outline"
								label="Ordenar por:"
								labelPlacement="stacked"
								interface="action-sheet"
								value={selector}
								onIonChange={(x) => handleSelector(x)}
							>
								<IonSelectOption value="oldest">Lo mas viejo</IonSelectOption>
								<IonSelectOption value="newest">Lo mas nuevo</IonSelectOption>
							</IonSelect>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonToolbar>
		</IonCardHeader>
	);
}

OrderHeader.propTypes = {
	Segments: PropTypes.any,
	status: PropTypes.string,
	handleSegments: PropTypes.func,
	selector: PropTypes.string,
	handleSelector: PropTypes.func,
};
