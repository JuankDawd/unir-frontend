import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: { username: '', password: '', uuid: '' },
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},

		logout: (state) => {
			state.user = initialState.user;
		},
	},
});

export const { login, logout } = userSlice.actions;

export const getusername = (state) => {
	return state.user.user.username;
};

export default userSlice.reducer;
