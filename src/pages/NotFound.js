import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../constants/routes';

const NotFound = () => {
	useEffect(() => {
		document.title = '404 - Not Found';
	}, []);

	return (
		<div className="bg-gray-20 h-screen-3/4 py-52">
			<div className="mx-auto max-w-screen-lg text-center">
				<p className="text-5xl py-10 text-slate-600">Not Found</p>
				<Link
					to={Routes.DASHBOARD}
					className="bg-blue-200 p-3 rounded hover:bg-blue-300 text-slate-500"
				>
					Return Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
