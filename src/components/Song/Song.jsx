import React from "react";

const Song = (props) => {
	const { title, artist, album, genre, release_date, likes_count } = props;

	return (
		<div>
			<span>{title}</span>
			<span>{artist}</span>
			<span>{album}</span>
			<span>{genre}</span>
			<span>{release_date}</span>
			<span>{likes_count}</span>
		</div>
	);
};

export default Song;
