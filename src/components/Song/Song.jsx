import React from "react";
import EditSongButton from "../EditSongButton/EditSongButton";

const Song = (props) => {
  const { updateSong } = props;
	const { title, artist, album, genre, release_date } = props.song;

	return (
		<tr>
			<td>{title}</td>
			<td>{artist}</td>
			<td>{album}</td>
			<td>{genre}</td>
			<td>{release_date}</td>
			<td>
				<EditSongButton songObject={props.song} updateSong={updateSong} />
			</td>
		</tr>
	);
};

export default Song;
