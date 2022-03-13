import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

//images
import iphone from '../images/iphone.jpg';
import logo from '../images/logo.png';
import appStore from '../images/appStore.png';
import playStore from '../images/playStore.png';
import fb from '../images/fb.png';

//context
import FirebaseContext from '../context/firebase';

const Login = () => {
	const { fireBase } = useContext(FirebaseContext);
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const isInvalid = emailAddress === '' || password === '';
	let navigator = useNavigate();

	useEffect(() => {
		document.title = 'Instagram';
	}, []);

	//handle input change for userName and password
	const handleInputChange = (e) => {
		let val = e.target.value;

		e.target.name === 'emailAddress' ? setEmailAddress(val) : setPassword(val);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			await fireBase.auth().signInWithEmailAndPassword(emailAddress, password);
			navigator(ROUTES.DASHBOARD);
		} catch (error) {
			setError(error.message);
			setEmailAddress('');
			setPassword('');
		}
	};

	return (
		<div className="container flex mx-auto max-w-screen-md items-center h-screen-3/4">
			{/* left */}
			<div className="flex w-3/5">
				<img src={iphone} alt="iphone" />
			</div>
			{/* right-top-top */}
			<div className="py-4 px-4 w-2/5 flex flex-col">
				<div className="flex flex-col items-center bg-white p-4 border mb-4">
					<h1 className="flex justify-center w-full">
						<img src={logo} alt="logo" className="mt-2 w-6/12 mb-4" />
					</h1>
					<form
						method="POST"
						onSubmit={handleLogin}
						action=""
						className="form "
					>
						<input
							name="emailAddress"
							aria-label="Enter you email address "
							type="text"
							className="border rounded text-sm w-full py-5 px-4 h-2 mb-2"
							placeholder="Phone number, username, or email"
							value={emailAddress}
							style={{ fontSize: 12 }}
							onChange={(e) => {
								handleInputChange(e);
							}}
						/>
						<input
							name="password"
							type="password"
							aria-label="Enter your Password"
							className="border rounded text-xxs w-full py-5 px-4 h-2 mb-2"
							placeholder="Password"
							value={password}
							onChange={(e) => {
								handleInputChange(e);
							}}
						/>

						<button
							disabled={isInvalid}
							type="submit"
							className={`${
								isInvalid ? 'bg-blue-200 cursor-default' : 'bg-blue-600'
							} rounded text-md w-full text-white h-8 font-bold`}
						>
							Log In
						</button>
					</form>
					{/* right-top-bottom */}
					<div className="flex flex-col justify-center items-center">
						<div className="w-full border-b-2 text-center my-5 py-5 relative">
							{/* style="font-size: 40px; background-color: #F3F5F6; padding: 0 10px;" */}
							<span className="absolute text-sm bg-white ml-auto mr-auto mt-2 left-0 right-0 w-10 text-gray-600 font-bold">
								OR
							</span>
						</div>
						<button className="text-blue-800 text-sm font-bold flex justify-center items-center">
							<img src={fb} alt="facebool" className="w-4 mr-2 rounded-sm" />
							<p>Log in with Facebook</p>
						</button>
						{error ? (
							<p className="mb-4 mt-4 text-xs text-red-500 text-center w-full">
								{error}
							</p>
						) : null}
						<br />
						<a href="/" className="forgot-password text-blue-800 text-sm">
							Forgot Password?
						</a>
					</div>
				</div>
				{/* right-middle */}
				<div className="flex justify-flex items-center flex-col w-full bg-white p-4 border">
					<p className="text-sm">
						Don't have an account?{' '}
						<Link to={ROUTES.SIGN_UP} className="font-bold text-blue-500">
							Sign up
						</Link>
					</p>
				</div>
				{/* right-bottom */}
				<div className="flex flex-col w-full items-center mt-4">
					<p className="text-sm">Get the app.</p>
					<div className="flex mt-4 justify-center">
						<a href="/">
							<img
								src={appStore}
								alt="AppStore"
								className="w-28 mr-2 rounded"
							/>
						</a>
						<a href="/">
							<img src={playStore} alt="PlayStore" className="w-28" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
