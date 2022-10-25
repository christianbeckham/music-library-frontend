import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import SongList from "./components/SongList/SongList";

const App = () => {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		fetchSongs();
	}, []);

	const fetchSongs = async () => {
		try {
			const response = await axios.get("http://localhost:8000/api/music/");
			setSongs(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const addSong = async (data) => {
		try {
			const response = await axios.post(
				"http://localhost:8000/api/music/",
				data
			);
			if (response.status === 201) fetchSongs();
		} catch (error) {
			console.log(error);
		}
	};

	const filterSongs = (input) => {
		if (input.length > 2) {
			const filteredSongs = songs.reduce((arr, song) => {
				Object.keys(song).forEach((key) => {
					if (typeof song[key] === "string") {
						if (song[key].toLowerCase().includes(input.toLowerCase())) {
							arr.push(song);
						}
					}
				});
				return arr;
			}, []);
			setSongs(filteredSongs);
		} else {
			fetchSongs();
		}
	};

	return (
		<div>
			<NavBar addSong={addSong} filterSongs={filterSongs} />
			<div className="container m-auto">
				<SongList songs={songs} />
			</div>
		</div>
	);
};

export default App;
