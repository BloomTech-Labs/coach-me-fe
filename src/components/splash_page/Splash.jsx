import React from "react";
import AboutUs from "./AboutUs";
import Login from "./Login";
import happy from "../../utils/assets/img/happy_girl.jpg";
import "../../sass/splash_page/splash.scss";

const Splash = () => {
	return (
		<div data-testid="splash" className="splash-screen">
			<header>
				<div data-testid="hero-text" className="hero-text">
					{/* <h1>Coach Me.</h1> */}
					<p data-testid="about">
						We're a{" "}
						<span data-testid="about-bold">patient-first</span>{" "}
						non-profit fighting <span>chronic disease</span>.
					</p>
					<p data-testid="small-text" className="small-text">
						Improving the health of low-income Americans with
						diabetes and heart disease with health coaching for
						those who need it most.
					</p>
					<Login />
				</div>

				<div className="hero-img">
					<img src={happy} alt="A happy Woman in Fall" />
				</div>
			</header>
			<AboutUs />
		</div>
	);
};

export default Splash;
