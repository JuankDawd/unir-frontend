/* eslint-disable react/prop-types */

import './Component.scss';

import { IonChip, IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react';

import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import { severityMap } from './Constants';
import { useNavigate } from 'react-router-dom';

export function OrderItem({ item }) {
	const navigate = useNavigate();

	const _goTo = (path) => navigate(path);
	return (
		<Fragment>
			<IonGrid>
				<IonRow>
					<IonCol size="1">
						<IonGrid className="no-margin no-padding">
							<IonRow className="no-margin no-padding">
								<IonLabel className="center-align full-width">{format(item.createdAt, 'LLL').toUpperCase()}</IonLabel>
							</IonRow>
							<IonRow className="no-margin no-padding">
								<IonLabel className="center-align full-width">{format(item.createdAt, 'd').toUpperCase()}</IonLabel>
							</IonRow>
						</IonGrid>
					</IonCol>
					<IonCol size="9.5">
						<IonGrid className="no-margin no-padding">
							<IonRow className="no-margin no-padding">
								<IonLabel className="left-align full-width">{item.number}</IonLabel>
							</IonRow>
							<IonRow className="no-margin no-padding">
								<IonLabel className="left-align full-width">{`Su total es de ${numeral(item.totalAmount).format(
									`${item.currency}0,0.00`,
								)}`}</IonLabel>
							</IonRow>
						</IonGrid>
					</IonCol>
					<IonCol size="1.5">
						<IonGrid className="no-margin no-padding">
							<IonRow className="no-margin no-padding full-width">
								<IonChip className="full-width center-align" outline={true} color={severityMap[item.status]}>
									<IonLabel className="full-width center-align caps-on">{item.status}</IonLabel>
								</IonChip>
							</IonRow>
						</IonGrid>
					</IonCol>
				</IonRow>
			</IonGrid>
		</Fragment>
	);
}
// Fix Here+
OrderItem.propTypes = {
	item: PropTypes.any,
};
