import './Component.scss';

import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenu,
	IonMenuButton,
	IonPage,
	IonSplitPane,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

import { DashboardMenu } from '@components/DashboardMenu/Component';
import { PATHS } from '@utils/Routes';
import PropTypes from 'prop-types';
import { SessionButton } from '@components/SessionButton/Component';
import { homeOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';

export function PageWrapper({ children, title }) {
	const navigate = useNavigate();

	const goHome = () => navigate(PATHS.HOME);
	return (
		<IonPage>
			<IonSplitPane contentId="main">
				<IonMenu contentId="main" className="sideBar">
					<IonHeader>
						<IonToolbar color="secondary">
							<IonButtons collapse={true} slot="start">
								<IonButton onClick={() => goHome()}>
									<IonIcon slot="icon-only" icon={homeOutline}></IonIcon>
								</IonButton>
							</IonButtons>
							<IonTitle>Menu</IonTitle>
							<IonButtons collapse={true} slot="end">
								<IonButton disabled={true}></IonButton>
							</IonButtons>
						</IonToolbar>
					</IonHeader>

					<DashboardMenu />
				</IonMenu>
				<div className="ion-page" id="main">
					<IonHeader>
						<IonToolbar color={'secondary'}>
							<IonButtons slot="start">
								<IonMenuButton></IonMenuButton>
							</IonButtons>
							<IonTitle>{title}</IonTitle>
							<IonButtons slot="end">
								<SessionButton />
							</IonButtons>
						</IonToolbar>
					</IonHeader>
					<IonContent class="ion-padding">{children}</IonContent>
				</div>
			</IonSplitPane>
		</IonPage>
	);
}

PageWrapper.propTypes = {
	children: PropTypes.any,
	title: PropTypes.string.isRequired,
};
