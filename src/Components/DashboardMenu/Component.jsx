import './Component.scss';

import { IonContent, IonLabel, IonList, IonListHeader } from '@ionic/react';

import { DashboardMenuItem } from '@components/DashboardItem/Component';
import { Sections } from './constants';

export function DashboardMenu() {
	return (
		<IonContent class="ion-padding" color={'secondary'}>
			{Sections.map(({ title, items }, key) => {
				return (
					<IonList color="secondary" key={key}>
						<IonListHeader color="secondary">
							<IonLabel>{title}</IonLabel>
						</IonListHeader>

						<DashboardMenuItem title={title} items={items} />
					</IonList>
				);
			})}
		</IonContent>
	);
}
// Fix Here+
