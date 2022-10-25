import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import AddSongButton from "../AddSongButton/AddSongButton";

const NavBar = (props) => {
	const { addSong } = props;
	return (
		<header className="row my-5">
			<div className="col col-3 text-center">
				<span>Music Library</span>
			</div>
			<div className="col col-9 d-flex">
				<AddSongButton addSong={addSong} />
				<SearchBar />
			</div>
		</header>
	);
};

export default NavBar;
