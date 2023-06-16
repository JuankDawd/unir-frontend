import { defaultValues, registerFormFields, schema } from './constants';

import { AuthController } from '@api/Auth.Controller';
import { Card } from '@components/Card/Component';
import { Fragment } from 'react';
import { InputField } from '@components/Input/Component';
import { PATHS } from '@utils/Routes';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

const Register = () => {
	const navigate = useNavigate();
	const { control, handleSubmit } = useForm({
		resolver: zodResolver(schema),
		defaultValues,
	});
	const goTo = (path) => {
		navigate(path);
	};

	const onSubmit = (data) => {
		const [__message, header] = AuthController.register(data);

		if (header === 'Success') {
			setTimeout(() => navigate(PATHS.HOME), 1500);
		}
	};

	return (
		<Fragment>
			<h1>Register</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="form">
				{registerFormFields.map((formFieldProps) => (
					<InputField {...formFieldProps} key={formFieldProps.name} control={control} />
				))}
				<button type="submit">Register</button>
			</form>
			<Card>
				<button onClick={() => goTo(PATHS.HOME)}>Home</button>
				<button onClick={() => goTo(PATHS.LOGIN)}>LogIn</button>
			</Card>
		</Fragment>
	);
};

export default Register;
