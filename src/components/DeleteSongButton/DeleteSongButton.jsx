import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteSongButton = (props) => {
	const { song, deleteSong } = props;
	const [showAlertModal, setShowAlertModal] = useState(false);
	const toggleAlert = () => setShowAlertModal(!showAlertModal);

	const handleOnClickDelete = () => {
		deleteSong(song.id);
		setShowAlertModal(false);
	};
	const handleOnClickCancel = () => {
		setShowAlertModal(false);
	};

	return (
		<div>
			<Button className="mx-1" variant="danger" size="sm" onClick={toggleAlert}>
				<i className="bi-x-lg" role="img" aria-label="delete icon"></i>
			</Button>
			{showAlertModal && (
				<Modal
					contentClassName="modal-bg-dark"
					show={showAlertModal}
					onHide={handleOnClickCancel}
					backdrop="static"
				>
					<Modal.Header closeButton closeVariant="white">
						<Modal.Title>Delete Confirmation</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p className="fs-5">Are you sure you want to delete this song?</p>
						<p className="alert alert-danger text-center">
							<span className="text-uppercase">{song.title}</span>
							<span> by </span>
							<span className="text-uppercase">{song.artist}</span>
						</p>
						<p className="fw-lighter fst-italic">
							*This action is permanent and cannot be undone.
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="danger" onClick={handleOnClickDelete}>
							Delete
						</Button>
						<Button variant="secondary" onClick={handleOnClickCancel}>
							Cancel
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</div>
	);
};

export default DeleteSongButton;
