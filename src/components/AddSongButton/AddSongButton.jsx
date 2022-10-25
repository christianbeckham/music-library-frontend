import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SongModalForm from "../SongModalForm/SongModalForm";

const AddSongButton = (props) => {
	const { addSong } = props;
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => setShowModal(!showModal);

	return (
		<div>
			<Button className="" variant="success" onClick={toggleModal}>
				+
			</Button>
			<SongModalForm
				header={"New Song"}
				show={showModal}
				toggle={toggleModal}
				addSong={addSong}
			/>
		</div>
	);
};

export default AddSongButton;
