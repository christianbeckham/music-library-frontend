import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import AddSongButton from "../AddSongButton/AddSongButton";

const NavBar = (props) => {
	const { addSong, filterSongs } = props;
	return (
		<header className="row my-5">
			<div className="col col-3 text-center">
				<span>Music Library</span>
			</div>
			<div className="col col-9 d-flex">
				<AddSongButton addSong={addSong} />
				<SearchBar filterSongs={filterSongs} />
			</div>
		</header>
	);
};

export default NavBar;
