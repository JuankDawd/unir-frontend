import { loginFormFields, schema } from './constants';

import { AuthController } from '@api/Auth.Controller';
import { Card } from '@components/Card/Component';
import { Fragment } from 'react';
import { InputField } from '@components/Input/Component';
import { PATHS } from '@utils/Routes';
import { login } from '@services/userSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { control, handleSubmit } = useForm({
		resolver: zodResolver(schema),
	});

	const goTo = (path) => {
		navigate(path);
	};

	const onSubmit = (data) => {
		const [__message, uuid] = AuthController.login(data);

		if (uuid) {
			const payload = {
				...data,
				uuid,
			};

			dispatch(login(payload));

			setTimeout(() => navigate(PATHS.HOME), 1500);
		}
	};

	return (
		<Fragment>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="form">
				{loginFormFields.map((formFieldProps) => (
					<InputField {...formFieldProps} key={formFieldProps.name} control={control} />
				))}
				<button type="submit">Login</button>
			</form>

			<Card>
				<button onClick={() => goTo(PATHS.HOME)}>Home</button>
				<button onClick={() => goTo(PATHS.REGISTER)}>Register</button>
			</Card>
		</Fragment>
	);
};

export default Login;
