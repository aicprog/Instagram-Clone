import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Timeline = () => {
	const photos = null;
	return (
		<div className="container col-span-2">
			{!photos ? (
				<Skeleton count={4} width={640} height={500} className="mb-5" />
			) : (
				photos.map((photo) => <p>I will be a photo</p>)
			)}
		</div>
	);
};

export default Timeline;
