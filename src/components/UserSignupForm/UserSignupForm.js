import React, { useState } from 'react';
import { createUser } from '../../util/apiCalls.js';
import './UserSignupForm.scss';

const UserSignupForm = ({ updateCurrentUser, toggleMenu }) => {
	const [firstNameValue, handleFirstNameChange] = useState('');
	const [lastNameValue, handleLastNameChange] = useState('');
	const [emailValue, handleEmailChange] = useState('');
	const [passwordValue, handlePasswordChange] = useState('');
	const [userSignupStatus, handleSignupAttempt] = useState('');

	const handleSubmit = async event => {
		event.preventDefault();
		const newUser = {
			firstName: firstNameValue,
			lastName: lastNameValue,
			email: emailValue,
			password: passwordValue
		};
		const accountCreationResponse = await createUser(newUser);
		if (accountCreationResponse.error) {
			console.log('hit error', accountCreationResponse);

			handleSignupAttempt(accountCreationResponse.error);
		} else {
			console.log('successful account creation', accountCreationResponse);
			updateCurrentUser(accountCreationResponse);
			resetInputs();
			toggleMenu(false);
		}
	};

	const resetInputs = () => {
		handleFirstNameChange('');
		handleLastNameChange('');
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
		return (
			checkEmail() &&
			passwordValue.length > 5 &&
			firstNameValue.length > 0 &&
			lastNameValue.length > 0
		);
	};

	const isEnabled = canBeSubmitted();

	return (
		<form className='UserSignupForm'>
			<label htmlFor='firstName' className='form-login email-login__label'>
				First Name
			</label>
			<input
				className='inputForm'
				id='firstName'
				type='text'
				name='firstName'
				placeholder='ex. Walter'
				onChange={e => handleFirstNameChange(e.target.value)}
				value={firstNameValue}
			/>
			<label htmlFor='lastName' className='form-login email-login__label'>
				Last Name
			</label>
			<input
				className='inputForm'
				id='lastName'
				type='text'
				name='lastName'
				placeholder='ex. White'
				onChange={e => handleLastNameChange(e.target.value)}
				value={lastNameValue}
			/>
			<label htmlFor='email' className='form-login email-login__label'>
				Email
			</label>
			<input
				className='inputForm'
				id='email'
				type='text'
				name='email'
				placeholder='ex. me@email.com'
				onChange={e => handleEmailChange(e.target.value)}
				value={emailValue}
			/>
			<label htmlFor='password' className='form-login password-login__label'>
				Password
			</label>
			<input
				className='inputForm'
				id='password'
				type='password'
				name='password'
				placeholder='At least 8 characters'
				onChange={e => handlePasswordChange(e.target.value)}
				value={passwordValue}
			/>
			<div
				type='button'
				className='loginFormBtn'
				disabled={!isEnabled}
				onClick={e => handleSubmit(e)}>
				Sign Up
			</div>
		</form>
	);
};

export default UserSignupForm;
