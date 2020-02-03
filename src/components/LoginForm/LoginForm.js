import React, { useState } from 'react';
import { userLogin, getCatalogs, getPalettes } from '../../util/apiCalls.js';
import './LoginForm.scss';
import { useDispatch } from 'react-redux';

const LoginForm = ({ isMenuOpen }) => {
	const [emailValue, handleEmailChange] = useState('');
	const [passwordValue, handlePasswordChange] = useState('');
	const dispatch = useDispatch();

	const fetchPalettes = async (loginResponse, catalogsForFetch) => {
		if (loginResponse.id && catalogsForFetch.length) {
			const allPalettes = catalogsForFetch.map(async catalog => {
				return await getPalettes(catalog);
			});
			const allResolvedPalettes = await Promise.all(allPalettes);
			return allResolvedPalettes.flat();
		}
	};

	const handleSubmit = async event => {
		event.preventDefault();
		const newUser = { email: emailValue, password: passwordValue };
		const loginResponse = await userLogin(newUser);
		const catalogs = await getCatalogs(loginResponse);
		const palettes = await fetchPalettes(loginResponse, catalogs);
		if (loginResponse.error) {
		} else {
			logInUser(loginResponse, catalogs, palettes);
			resetInputs();
			dispatch({
				type: 'TOGGLE_MENU',
				boolean: !isMenuOpen
			});
		}
	};

	const logInUser = (user, catalogs, palettes) => {
		const { firstName, id } = user;
		dispatch({ type: 'UPDATE_CATALOGS', catalogs: catalogs });
		dispatch({ type: 'UPDATE_PALETTES', palettes: palettes });
		dispatch({ type: 'UPDATE_USERNAME', name: firstName });
		dispatch({ type: 'UPDATE_USER_ID', id: id });
	};

	const resetInputs = () => {
		handleEmailChange('');
		handlePasswordChange('');
	};

	const checkEmail = () => {
		const emailSplit = emailValue.split('');
		const startIncludesSearch = emailSplit.findIndex(
			character => character === '@'
		);
		return emailSplit.includes('@') &&
			emailSplit.includes('.', startIncludesSearch)
			? true
			: false;
	};

	const canBeSubmitted = () => {
		return checkEmail() && passwordValue.length > 6;
	};

	const isEnabled = canBeSubmitted();

	return (
		<form className='LoginForm' onSubmit={e => handleSubmit(e)}>
			<label htmlFor='email' className='form-login email-login__label'>
				Email
			</label>
			<input
				className='emailForm'
				id='email'
				type='text'
				name='email'
				placeholder='ex. hello@email.com'
				onChange={e => handleEmailChange(e.target.value)}
				value={emailValue}
			/>
			<label htmlFor='password' className='form-login password-login__label'>
				Password
			</label>
			<input
				className='emailForm'
				id='password'
				type='password'
				name='password'
				placeholder='ex. •••••••••••'
				onChange={e => handlePasswordChange(e.target.value)}
				value={passwordValue}
			/>
			<button
				className='loginFormBtn'
				disabled={!isEnabled}
				onClick={e => handleSubmit(e)}>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
