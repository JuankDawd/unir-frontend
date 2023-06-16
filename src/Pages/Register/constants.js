import { z } from 'zod';

export const schema = z.object({
	username: z.string().max(16, 'The Username is too long').min(4, 'The Username is too short'),
	password: z.string().max(16, 'The Password is too long').min(8, 'The Password is too short'),
});

export const registerFormFields = [
	{
		label: 'Username',
		placeholder: 'Username',
		name: 'username',
	},
	{
		label: 'Password',
		placeholder: 'Password',
		name: 'password',
	},
];

export const defaultValues = {
	username: '',
	password: '',
};
