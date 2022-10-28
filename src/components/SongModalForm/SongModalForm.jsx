import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const SongModalForm = (props) => {
	const { header, show, toggle, songObject, callbackFunction } = props;
	const [values, setValues] = useState(songObject || {});
	const [validated, setValidated] = useState(false);

	const handleOnChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleOnClose = () => {
		setValues({});
		setValidated(false);
		toggle();
	};

	const hanldeOnSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity()) {
			e.stopPropagation();
			callbackFunction(values);
			handleOnClose();
		} else {
			setValidated(true);
		}
	};

	return (
		<Modal
			contentClassName="modal-bg-dark"
			show={show}
			onHide={toggle}
			backdrop="static"
		>
			<Modal.Header closeButton closeVariant="white">
				<Modal.Title>{header}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form noValidate validated={validated} onSubmit={hanldeOnSubmit}>
					<Form.Group className="mb-3" controlId="formTitleInput">
						<Form.Label>Title</Form.Label>
						<Form.Control
							size="sm"
							type="text"
							name={"title"}
							value={values.title || ""}
							onChange={handleOnChange}
							required
							data-test="title-input"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formArtistInput">
						<Form.Label>Artist</Form.Label>
						<Form.Control
							size="sm"
							type="text"
							name={"artist"}
							value={values.artist || ""}
							onChange={handleOnChange}
							required
							data-test="artist-input"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formAlbumInput">
						<Form.Label>Album</Form.Label>
						<Form.Control
							size="sm"
							type="text"
							name={"album"}
							value={values.album || ""}
							onChange={handleOnChange}
							required
							data-test="album-input"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGenreInput">
						<Form.Label>Genre</Form.Label>
						<Form.Control
							size="sm"
							type="text"
							name={"genre"}
							value={values.genre || ""}
							onChange={handleOnChange}
							required
							data-test="genre-input"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formDateInput">
						<Form.Label>Release Date</Form.Label>
						<Form.Control
							size="sm"
							type="date"
							name={"release_date"}
							value={values.release_date || ""}
							onChange={handleOnChange}
							required
							data-test="date-input"
						/>
					</Form.Group>
					<Modal.Footer>
						<Button
							variant="success"
							type="submit"
							data-test="modalFormSaveBtn"
						>
							Save
						</Button>
						<Button
							variant="danger"
							onClick={handleOnClose}
							data-test="modalFormCancelBtn"
						>
							Cancel
						</Button>
					</Modal.Footer>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default SongModalForm;
