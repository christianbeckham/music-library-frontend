import React, { useState } from "react";

const SearchBar = (props) => {
	const { filterSongs } = props;
	const [searchInput, setSearchInput] = useState("");

	const handleOnChange = (e) => {
		setSearchInput(e.target.value);
		filterSongs(e.target.value);
	};
	return (
		<div className="input-group w-50">
			<input
				className="form-control"
				type="search"
				placeholder="Search..."
				value={searchInput}
				onChange={handleOnChange}
				data-test="search-input"
			/>
		</div>
	);
};

export default SearchBar;
