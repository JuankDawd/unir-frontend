import { IonButton, IonIcon } from '@ionic/react';
import { getusername, logout } from '@services/userSlice';
import { logInOutline, logOutOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';

import { PATHS } from '@utils/Routes';
import { useNavigate } from 'react-router-dom';

export function SessionButton() {
	const username = useSelector(getusername);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSession = () => {
		if (username !== '') {
			dispatch(logout());
		} else {
			navigate(PATHS.LOGIN);
		}
	};

	return (
		<IonButton onClick={() => handleSession()}>
			<IonIcon slot="icon-only" icon={username !== '' ? logOutOutline : logInOutline}></IonIcon>
		</IonButton>
	);
}
