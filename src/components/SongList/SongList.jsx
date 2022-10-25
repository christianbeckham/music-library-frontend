import React from "react";
import Song from "../Song/Song";

const SongList = (props) => {
	const { songs } = props;

	return (
		<table>
			<thead>
				<tr>
					<th>Song</th>
					<th>Artist</th>
					<th>Album</th>
					<th>Genre</th>
					<th>Release Date</th>
					<th>Likes</th>
				</tr>
			</thead>
			<tbody>
				{songs.map((song) => (
					<Song key={song.id} {...song} />
				))}
			</tbody>
		</table>
	);
};

export default SongList;
