import React, { useState } from "react";
//Component Imports
import Routes from "./Routes/Routes";
import Navigation from "./components/navigation/Navigation";
import SideDrawer from "./components/sidedrawer/SideDrawer";
import Footer from "./components/footer/Footer";
import UIContext from "./utils/context/UIContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Styling
import "./App.css";

// Test commit

function App() { 
	const [drawerOpen, setDrawerOpen] = useState(false);
	const backdropHandler = () => {
		setDrawerOpen(!drawerOpen);
	};
	return (
		<UIContext.Provider value={{ drawerOpen, backdropHandler }}>
			<Router>
				<div className="App">
					<SideDrawer />
					<Navigation />
					<Routes />
					<Footer />
				</div>
			</Router>
		</UIContext.Provider>
	);
}

export default App;
