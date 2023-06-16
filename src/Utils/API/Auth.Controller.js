import { v4 as uuidv4 } from 'uuid';

class AuthControllerApi {
	register(form) {
		try {
			const localStorageItem = localStorage.getItem('users');
			if (localStorageItem !== null) {
				const userList = JSON.parse(localStorageItem);
				const resp = userList.find((u) => u.username === form.username);
				if (resp === undefined) {
					const newUser = { ...form, uuid: uuidv4() };
					userList.push(newUser);
					const usersJson = JSON.stringify(userList);
					localStorage.setItem('users', usersJson);
					return 'Username created successfully'; // , 'Success'
				} else {
					return 'The username already exist'; // , 'Fail'
				}
			} else {
				return "The mocked data hasn't been created yet"; // , 'Fail'
			}
		} catch (err) {
			return 'Fatal Warning'; // , 'Fail'
		}
	}

	login(form) {
		try {
			const localStorageItem = localStorage.getItem('users');
			if (localStorageItem !== null) {
				const userList = JSON.parse(localStorageItem);

				const resp = userList.find((u) => u.username === form.username && u.password === form.password);

				if (resp !== undefined) {
					return ['Login successfully', resp.uuid]; // , 'Success'
				} else {
					return ['The username or the password are wrong']; // , 'Fail'
				}
			} else {
				return ["The mocked data hasn't been created yet"]; // , 'Fail'
			}
		} catch (err) {
			return ['Fatal Warning']; // , 'Fail'
		}
	}
}

const AuthController = new AuthControllerApi();

export { AuthController };
