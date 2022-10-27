import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SongModalForm from "../SongModalForm/SongModalForm";

const EditSongButton = (props) => {
	const { songObject, updateSong } = props;
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => setShowModal(!showModal);

	return (
		<div>
			<Button
				className="mx-1"
				variant="primary"
				size="sm"
				onClick={toggleModal}
			>
				<i className="bi-pencil" role="img" aria-label="edit icon"></i>
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
