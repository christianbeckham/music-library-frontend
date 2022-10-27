import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import AddSongButton from "../AddSongButton/AddSongButton";

const NavBar = (props) => {
	const { addSong, filterSongs } = props;
	return (
		<header className="row my-2 w-100">
			<div className="col col-3 text-center">
				<span>
					<i className="bi-volume-up logo" role="img" aria-label="Logo"></i>
				</span>
			</div>
			<div className="col col-9 d-flex align-self-center">
				<AddSongButton addSong={addSong} />
				<SearchBar filterSongs={filterSongs} />
			</div>
		</header>
	);
};

export default NavBar;
