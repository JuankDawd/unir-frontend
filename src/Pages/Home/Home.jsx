import { getusername, logout } from '@services/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '@components/Card/Component';
import { Fragment } from 'react';
import { PATHS } from '@utils/Routes';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const username = useSelector(getusername);

	const sessionHandler = () => {
		dispatch(logout());
	};

	const goTo = (path) => {
		navigate(path);
	};

	return (
		<Fragment>
			<h1>{'Home'}</h1>
			{username === '' ? 'User not logged in' : `Welcome Home ${username}`}
			{username ? (
				<Card>
					<button onClick={() => sessionHandler()}>LogOut</button>
				</Card>
			) : null}
			<Card>
				<button onClick={() => goTo(PATHS.LOGIN)}>LogIn</button>
				<button onClick={() => goTo(PATHS.REGISTER)}>Register</button>
			</Card>
		</Fragment>
	);
};

export default Home;
