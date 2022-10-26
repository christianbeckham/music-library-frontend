import React from "react";
import { Button } from "react-bootstrap";

const DeleteSongButton = (props) => {
	const { songId, deleteSong } = props;

	const handleOnClick = () => deleteSong(songId);

	return (
		<div>
			<Button variant="danger" onClick={handleOnClick}>
				Delete
			</Button>
		</div>
	);
};

export default DeleteSongButton;
