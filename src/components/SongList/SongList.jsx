import React from "react";
import Song from "../Song/Song";

const SongList = (props) => {
	const { songs, updateSong } = props;

	return (
		<table className="table table-hover">
			<thead>
				<tr>
					<th>Song</th>
					<th>Artist</th>
					<th>Album</th>
					<th>Genre</th>
					<th>Release Date</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{songs.map((song) => (
					<Song key={song.id} song={song} updateSong={updateSong} />
				))}
			</tbody>
		</table>
	);
};

export default SongList;
