import React from "react";

const Song = (props) => {
	const { title, artist, album, genre, release_date, likes_count } = props;

	return (
		<tr>
			<td>{title}</td>
			<td>{artist}</td>
			<td>{album}</td>
			<td>{genre}</td>
			<td>{release_date}</td>
			<td>{likes_count}</td>
		</tr>
	);
};

export default Song;
