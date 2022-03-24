import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import appStore from '../images/appStore.png';
import playStore from '../images/playStore.png';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import { doesUsernameExist } from '../services/firebase';
import * as Routes from '../constants/routes';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const { fireBase, auth } = useContext(FirebaseContext);
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const isInvalid =
		email === '' || name === '' || username === '' || password === '';
	let navigator = useNavigate();

	const handleInput = (e) => {
		let type = e.target.name;
		let value = e.target.value;

		switch (type) {
			case 'email':
				setEmail(value);
				break;
			case 'name':
				setName(value);
				break;
			case 'username':
				setUsername(value.toLowerCase());
				break;
			case 'password':
				setPassword(value);
				break;
			default:
				break;
		}
	};

	const handleSignUp = async (e) => {
		e.preventDefault();

		let usernameExists = await doesUsernameExist(username);
		//console.log(usernameExists);

		if (!usernameExists.length) {
			try {
				const createdUserResult = await auth.createUserWithEmailAndPassword(
					auth.getAuth(),
					email,
					password
				);
				//get user and update with username
				const user = await auth.updateProfile(auth.getAuth().currentUser, {
					displayName: username,
				});

				//add to firebase with matching properties of seed
				await fireBase.firestore().collection('users').add({
					userId: createdUserResult.user.uid,
					username: username,
					fullName: name,
					emailAddress: email,
					following: [],
					followers: [],
					dateCreated: Date.now(),
				});

				navigator(ROUTES.DASHBOARD);
			} catch (error) {
				setName('');
				setError(error.message);
			}
		} else {
			setUsername('');
			setName('');
			setEmail('');
			setPassword('');
			setError('That username is already taken, please try another.');
		}
	};

	useEffect(() => {
		document.title = 'Login • Instagram';
	}, []);

	return (
		<div className="container flex flex-col mx-auto max-w-screen-md items-center justify-center h-screen-3/4">
			{/* top */}
			<div className="border py-4 px-11 w-96 flex flex-col bg-white">
				<h1 className="flex justify-center">
					<img src={logo} alt="logo" className="mt-2 w-7/12 mb-4" />
				</h1>
				<p className="text-center text-gray-500 font-bold">
					Sign up to see photos and videos from your friends.
				</p>
				<button className="bg-blue-500 rounded text-white font-bold mt-4 p-1.5 text-sm">
					Log in with Facebook
				</button>
				<div className="w-full border-b-2 text-center mb-5 pb-5 mt-1 pt-1 relative">
					<span className="absolute text-sm bg-white ml-auto mr-auto mt-2 left-0 right-0 w-10 text-gray-400 font-bold">
						OR
					</span>
				</div>
				{error ? (
					<p className="mb-4 text-xs text-red-500 text-center">{error}</p>
				) : null}
				<form method="POST" className="" onSubmit={handleSignUp}>
					<input
						className="border rounded text-xxs w-full py-4 px-3 h-2 mb-2 bg-gray-50 font-semibold"
						aria-label="Enter your username"
						name="username"
						type="text"
						value={username}
						placeholder="Username"
						onChange={(e) => handleInput(e)}
					/>
					<input
						className="border rounded text-xxs w-full py-4 px-3 h-2 mb-2 bg-gray-50 font-semibold"
						aria-label="Enter your full name"
						name="name"
						type="text"
						value={name}
						placeholder="Full Name"
						onChange={(e) => handleInput(e)}
					/>
					<input
						className="border rounded text-xxs w-full py-4 px-3 h-2 mb-2 bg-gray-50 font-semibold"
						aria-label="Email Address"
						name="email"
						type="text"
						value={email}
						placeholder="Mobile Number or Email"
						onChange={(e) => handleInput(e)}
					/>
					<input
						className="border rounded text-xxs w-full py-4 px-3 h-2 mb-2 bg-gray-50 font-semibold text-black"
						aria-label="Enter your password"
						name="password"
						type="password"
						value={password}
						placeholder="Password"
						onChange={(e) => handleInput(e)}
					/>
					<button
						className={`${
							isInvalid ? 'bg-blue-200' : 'bg-blue-500'
						} rounded p-1 my-2 w-full font-bold text-white text-sm`}
					>
						Sign Up
					</button>
				</form>
				<p className="text-xxs text-gray-500 text-center mt-3 mb-4">
					By siging up, you agree to our <strong>Terms</strong>,{' '}
					<strong>Data Policy</strong> and <strong>Cookies Policy</strong>.
				</p>
			</div>
			{/* middle */}
			<div className="border px-4 py-6 mt-2 bg-white w-96">
				<p className="text-sm text-center">
					Have an account?{' '}
					<Link to={ROUTES.LOGIN} className="font-bold text-blue-500">
						Log in
					</Link>
				</p>
			</div>
			{/* bottom */}
			<div className="flex flex-col w-full items-center mt-4">
				<p className="text-sm">Get the app.</p>
				<div className="flex mt-4 justify-center">
					<a href="/">
						<img src={appStore} alt="AppStore" className="w-32 mr-2 rounded" />
					</a>
					<a href="/">
						<img src={playStore} alt="PlayStore" className="w-32" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
