import React from "react";
import { Helper as render } from "../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

describe("Footer component", () => {
	it("Renders without crashing", async () => {
		render(<Footer />);
    })
})