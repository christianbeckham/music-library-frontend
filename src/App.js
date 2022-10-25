import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import SongList from "./components/SongList/SongList";

const App = () => {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		const fetchSongs = async () => {
			try {
				const response = await axios.get("http://localhost:8000/api/music/");
				setSongs(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchSongs();
	}, []);

	return (
		<div>
			<NavBar />
			<div className="container m-auto">
				<SongList songs={songs} />
			</div>
		</div>
	);
};

export default App;
