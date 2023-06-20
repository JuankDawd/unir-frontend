import { Card } from '@components/Card/Component';
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
			{username === '' ? 'User not logged in' : `Welcome Home ${username}`}

			<Card>
				<button onClick={() => goTo(PATHS.LOGIN)}>LogIn</button>
				<button onClick={() => goTo(PATHS.REGISTER)}>Register</button>
			</Card>
		</PageWrapper>
	);
};

export default Home;
