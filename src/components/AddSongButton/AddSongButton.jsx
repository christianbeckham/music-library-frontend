import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SongModalForm from "../SongModalForm/SongModalForm";

const AddSongButton = (props) => {
	const { addSong } = props;
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => setShowModal(!showModal);

	return (
		<div>
			<Button className="mx-2" variant="success" onClick={toggleModal}>
				<i className="bi-plus-lg" role="img" aria-label="add icon"></i>
			</Button>
			{showModal && (
				<SongModalForm
					header={"Add Song"}
					show={showModal}
					toggle={toggleModal}
					callbackFunction={addSong}
				/>
			)}
		</div>
	);
};

export default AddSongButton;
