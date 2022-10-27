import React from "react";
import EditSongButton from "../EditSongButton/EditSongButton";
import DeleteSongButton from "../DeleteSongButton/DeleteSongButton";

const Song = (props) => {
	const { updateSong, deleteSong } = props;
	const { title, artist, album, genre, release_date } = props.song;

	return (
		<tr>
			<td>{title}</td>
			<td>{artist}</td>
			<td>{album}</td>
			<td>{genre}</td>
			<td>{release_date}</td>
			<td className="d-flex">
				<EditSongButton songObject={props.song} updateSong={updateSong} />
				<DeleteSongButton song={props.song} deleteSong={deleteSong} />
			</td>
		</tr>
	);
};

export default Song;
