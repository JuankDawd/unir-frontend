import { IonButton, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';

import { PATHS } from '@utils/Routes';
import { PageWrapper } from '@components/PageWrapper/Component';
import { getusername } from '@services/userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
	const navigate = useNavigate();

	const username = useSelector(getusername);

	const goTo = (path) => {
		navigate(path);
	};

	return (
		<PageWrapper title="Home">
			<IonCard>
				<IonCardHeader>{username === '' ? 'User not logged in' : `Welcome Home ${username}`}</IonCardHeader>
				<IonCardContent>
					<IonButton onClick={() => goTo(PATHS.LOGIN)}>LogIn</IonButton>
					<IonButton onClick={() => goTo(PATHS.REGISTER)}>Register</IonButton>
				</IonCardContent>
			</IonCard>
		</PageWrapper>
	);
};

export default Home;
