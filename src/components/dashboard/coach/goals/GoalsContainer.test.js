import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import GoalsContainer from "./GoalsContainer";

describe("GoalsContainer component", () => {
	it("Renders without crashing", async () => {
		render(<GoalsContainer />);
    })
})