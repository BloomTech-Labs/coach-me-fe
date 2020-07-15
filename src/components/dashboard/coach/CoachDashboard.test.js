import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import CoachDashboard from "./CoachDashboard";

describe("CoachDashboard component", () => {
	it("Renders without crashing", async () => {
		render(<CoachDashboard />);
    })
})