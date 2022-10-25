import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SongModalForm from "../SongModalForm/SongModalForm";

const EditSongButton = (props) => {
	const { songObject, updateSong } = props;
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => setShowModal(!showModal);

	return (
		<div>
			<Button variant="primary" onClick={toggleModal}>
				Edit
			</Button>
			{showModal && (
				<SongModalForm
					header="Edit Song"
					show={showModal}
					toggle={toggleModal}
					songObject={songObject}
					callbackFunction={updateSong}
				/>
			)}
		</div>
	);
};

export default EditSongButton;
