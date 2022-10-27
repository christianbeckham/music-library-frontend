import React from "react";
import Song from "../Song/Song";

const SongList = (props) => {
	const { songs, updateSong, deleteSong } = props;

	return (
		<>
			<h1>Songs</h1>
			<table className="table table-dark table-hover table-borderles align-middle">
				<thead className="table-dark">
					<tr>
						<th>Title</th>
						<th>Artist</th>
						<th>Album</th>
						<th>Genre</th>
						<th>Release Date</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{songs.map((song) => (
						<Song
							key={song.id}
							song={song}
							updateSong={updateSong}
							deleteSong={deleteSong}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default SongList;
