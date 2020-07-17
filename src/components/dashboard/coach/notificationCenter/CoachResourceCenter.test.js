import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import CoachResourceCenter from "./CoachResourceCenter";

describe("CoachResourceCenter component", () => {
	it("Renders without crashing", async () => {
		render(<CoachResourceCenter />);
	})
})