import { logRoles } from '@testing-library/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../constants/routes';
import logo from '../images/logo.png';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';

const Header = () => {
	const { user } = useContext(UserContext);
	const { auth } = useContext(FirebaseContext);
	//const user = {uid: '2kjaskdjasd'}

	console.log("UER", user);
	return (
		<header className="bg-white border-b h-16 mb-8">
			<div className="container mx-auto max-width-lg h-full">
				<div className="flex justify-between h-full">
					<div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
						<h1>
							<Link to={Routes.DASHBOARD}>
								<img src={logo} alt="Instagram" className="mt-2 w-7/12" />
							</Link>
						</h1>
					</div>
					<div className="text-gray text-center flex items-center align-items">
						{user ? (
							<>
								<Link to={Routes.DASHBOARD} arial-label="Home">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-8 mr-6 text-black cursor-pointer"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
								</Link>
								<button
									type="button"
									title="Sign Out"
									onClick={() => auth.getAuth().signOut()}
									onKeyDown={(e) => {
										if (e.key === 'enter') {
											auth.getAuth().signOut();
										}
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-8 mr-6 text-black cursor-pointer"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										/>
									</svg>
								</button>
								<div className="flex items-center cursor-pointer border-2 border-blue-300 hover:border-blue-500 rounded-full transition ease-in delay-75">
									<Link to={`/p/${user.displayName}`}>
										<img
											className="rounded-full h-8 w-8 flex"
											src={`../images/avatars/${user.displayName}.jpg`}
											alt={`${user.displayName} profile`}
										/>
									</Link>
								</div>
							</>
						) : (
							<>
								<Link to={Routes.LOGIN}>
									<button
										type="button"
										className="bg-blue-400 bg-blue font-bold text-sm rounded w-20 h-8 text-white"
									>
										Log In
									</button>
								</Link>
								<Link to={Routes.SIGN_UP}>
									<button
										type="button"
										className=" font-bold text-sm rounded text-blue w-20 h-8"
									>
										Sign Up
									</button>
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
