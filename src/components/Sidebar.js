import React from 'react';
import useUser from '../hooks/useUser';

const Sidebar = () => {
	const {
		user: { docId, userId, following, username, fullName } = {},
	} = useUser();
	console.log(docId, userId, following, username, fullName);
	// console.log(docId, userId, following, username, fullName);
	return <div>Sidebar</div>;
};

export default Sidebar;
