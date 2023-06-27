import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonToolbar } from '@ionic/react';
import { defaultValues, registerFormFields, schema } from './constants';

import { InputField } from '@components/Input/Component';
import { PATHS } from '@utils/Routes';
import { PageWrapper } from '@components/PageWrapper/Component';
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

	const onSubmit = (_data) => {
		// eslint-disable-next-line no-console
	};

	return (
		<PageWrapper title="Register">
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Register</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					<form onSubmit={handleSubmit(onSubmit)} className="form">
						{registerFormFields.map((formFieldProps) => (
							<InputField {...formFieldProps} key={formFieldProps.name} control={control} />
						))}
						<IonButton type="submit">Register</IonButton>
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
					<IonButton onClick={() => goTo(PATHS.LOGIN)} fill="solid" color="primary">
						Log In
					</IonButton>
				</IonButtons>
			</IonToolbar>
		</PageWrapper>
	);
};

export default Register;
