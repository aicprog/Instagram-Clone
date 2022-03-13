import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import appStore from '../images/appStore.png';
import playStore from '../images/playStore.png';
import * as ROUTES from '../constants/routes';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const isInvalid =
		email === '' || name === '' || username === '' || password === '';
	//let navigator = useNavigate();

	useEffect(() => {
		document.title = 'Login • Instagram';
	}, []);

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
				setUsername(value);
				break;
			case 'password':
				setPassword(value);
				break;
			default:
				break;
		}
	};

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
				<form method="POST" className="">
					<input
						className="border rounded text-xxs w-full py-4 px-3 h-2 mb-2 bg-gray-50 font-semibold"
						aria-label="Enter your mobile number or email"
						name="email"
						type="text"
						value={email}
						placeholder="Mobile Number or Email"
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
						aria-label="Enter your username"
						name="username"
						type="text"
						value={username}
						placeholder="Username"
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
