import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/js/Header.js";
import Home from "./components/js/Home.js";
import Support from "./components/js/Support.js";
import Footer from "./components/js/Footer.js";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="support" element={<Support />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
