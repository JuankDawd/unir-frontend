import {
	IonCardHeader,
	IonCol,
	IonGrid,
	IonLabel,
	IonRow,
	IonSearchbar,
	IonSegment,
	IonSegmentButton,
	IonToolbar,
} from '@ionic/react';

import PropTypes from 'prop-types';
import { StyledSelector } from '@components/StyledSelector/Component';
import { selectorOptions } from './Constants';

export function OrderHeader({ Segments, status, handleSegments, selector, handleSelector, searchTerm, setSearchTerm }) {
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
							<IonSearchbar
								value={searchTerm}
								onIonChange={(e) => setSearchTerm(e.detail.value)}
								placeholder="Buscar"
							/>
						</IonCol>
						<IonCol size="3">
							<StyledSelector
								selectorOptions={selectorOptions}
								label="Estado:"
								setValue={(x) => handleSelector(x)}
								value={selector}
							/>
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
	searchTerm: PropTypes.string,
	setSearchTerm: PropTypes.func,
};
