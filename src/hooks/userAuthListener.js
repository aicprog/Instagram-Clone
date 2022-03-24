import { useState, useContext, useEffect } from 'react';
import FirebaseContext from '../context/firebase';

//listener to get user to use for userContext
export default function useAuthListener() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('authUser'))
	);
	const { fireBase, auth } = useContext(FirebaseContext);

	useEffect(() => {
		const listener = auth.getAuth().onAuthStateChanged((authUser) => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser));
				setUser(authUser);
			} else {
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});

		return () => listener();
	}, [fireBase]);

	return { user };
}
