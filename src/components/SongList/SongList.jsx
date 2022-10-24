import React from "react";
import Song from "../Song/Song";

const SongList = (props) => {
	const { songs } = props;

	return (
		<div>
			{songs.map((song) => (
				<Song key={song.id} {...song} />
			))}
		</div>
	);
};

export default SongList;
