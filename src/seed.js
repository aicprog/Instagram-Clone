// NOTE: replace 'bmjpkU8bBWRse2JwKgzOGTv5tUI3' with your Firebase auth user id (can be taken from Firebase at the auth section! Look for User UID)
export function seedDatabase(firebase) {
	const users = [
		{
			userId: 'BBu6QqvsgWqWOQC5WGSXaHGr8dQS2',
			username: 'Carolwink',
			fullName: 'Carol Hoodwink',
			emailAddress: 'carol@hookwink.com',
			following: ['2'],
			followers: ['2', '3', '4'],
			dateCreated: Date.now(),
		},
		{
			userId: '2',
			username: 'Rueg',
			fullName: 'Rue Gonzalez',
			emailAddress: 'rue@gonzalez.com',
			following: [],
			followers: ['Bu6QqvsgWqWOQC5WGSXaHGr8dQS2'],
			dateCreated: Date.now(),
		},
		{
			userId: '3',
			username: 'salvaemon',
			fullName: 'Salvatori Daemon',
			emailAddress: 'salvadori@daemon.com',
			following: [],
			followers: ['Bu6QqvsgWqWOQC5WGSXaHGr8dQS2'],
			dateCreated: Date.now(),
		},
		{
			userId: '4',
			username: 'gengen',
			fullName: 'Gen Gen',
			emailAddress: 'gen@gen.com',
			following: [],
			followers: ['Bu6QqvsgWqWOQC5WGSXaHGr8dQS2'],
			dateCreated: Date.now(),
		},
	];

	for (let k = 0; k < users.length; k++) {
		firebase.firestore().collection('users').add(users[k]);
	}

	for (let i = 1; i <= 5; ++i) {
		firebase
			.firestore()
			.collection('photos')
			.add({
				photoId: i,
				userId: '2',
				imageSrc: `/images/users/raphael/${i}.jpg`,
				caption: 'Saint George and the Dragon',
				likes: [],
				comments: [
					{
						displayName: 'dali',
						comment: 'Love this place, looks like my animal farm!',
					},
					{
						displayName: 'orwell',
						comment: 'Would you mind if I used this picture?',
					},
				],
				userLatitude: '40.7128°',
				userLongitude: '74.0060°',
				dateCreated: Date.now(),
			});
	}
}
