/* eslint-disable react/prop-types */

import './Component.scss';

import { IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';

import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export function DashboardMenuItem({ items }) {
	const navigate = useNavigate();

	const goTo = (path) => navigate(path);
	return (
		<Fragment>
			{items.map(({ title, icon, path }, key) => {
				return (
					<IonList key={key}>
						<IonItem button={true} onClick={() => goTo(path)} lines="none">
							<IonIcon icon={icon} slot="start"></IonIcon>
							<IonLabel>{title}</IonLabel>
						</IonItem>
					</IonList>
				);
			})}
		</Fragment>
	);
}
// Fix Here+
DashboardMenuItem.propTypes = {
	items: PropTypes.any,
};
