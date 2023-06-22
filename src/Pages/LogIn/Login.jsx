import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonToolbar } from '@ionic/react';
import { loginFormFields, schema } from './constants';

import { AuthController } from '@api/Auth.Controller';
import { InputField } from '@components/Input/Component';
import { PATHS } from '@utils/Routes';
import { PageWrapper } from '@components/PageWrapper/Component';
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
		<PageWrapper title="Login">
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Login</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					<form onSubmit={handleSubmit(onSubmit)} className="form">
						{loginFormFields.map((formFieldProps) => (
							<InputField {...formFieldProps} key={formFieldProps.name} control={control} />
						))}
						<IonButton type="submit">Login</IonButton>
					</form>
				</IonCardContent>
			</IonCard>

			<IonToolbar>
				<IonButtons slot="start">
					<IonButton onClick={() => goTo(PATHS.HOME)} fill="solid" color="primary">
						Home
					</IonButton>
				</IonButtons>
				<IonButtons slot="end">
					<IonButton onClick={() => goTo(PATHS.REGISTER)} fill="solid" color="primary">
						Register
					</IonButton>
				</IonButtons>
			</IonToolbar>
		</PageWrapper>
	);
};

export default Login;
