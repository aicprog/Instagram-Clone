import { fireBase, FieldValue, auth } from '../lib/firebase';

export async function doesUsernameExist(username) {
	const result = await fireBase
		.firestore()
		.collection('users')
		.where('username', '==', username)
		.get();

	return result.docs.map((user) => user.data().length > 0);
}
