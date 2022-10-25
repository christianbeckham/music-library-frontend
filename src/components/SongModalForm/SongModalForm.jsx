import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const SongModalForm = (props) => {
	const { header, show, toggle, song, addSong } = props;
	const [values, setValues] = useState(song || {});
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
			addSong(values);
			handleOnClose();
		} else {
			setValidated(true);
		}
	};

	return (
		<Modal show={show} onHide={toggle} backdrop="static">
			<Modal.Header closeButton>
				<Modal.Title>{header}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form noValidate validated={validated} onSubmit={hanldeOnSubmit}>
					<Form.Group className="mb-3" controlId="formTitleInput">
						<Form.Label>Song</Form.Label>
						<Form.Control
							size="sm"
							type="text"
							name={"title"}
							value={values.title || ""}
							onChange={handleOnChange}
							required
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
						/>
					</Form.Group>
					<Modal.Footer>
						<Button variant="success" type="submit">
							Save
						</Button>
						<Button variant="danger" onClick={handleOnClose}>
							Cancel
						</Button>
					</Modal.Footer>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default SongModalForm;
