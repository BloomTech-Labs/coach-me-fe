import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import GoalsDisplay from "./GoalsDisplay";

describe("GoalsDisplay component", () => {
	it("Renders without crashing", async () => {
		render(<GoalsDisplay />);
    })
})