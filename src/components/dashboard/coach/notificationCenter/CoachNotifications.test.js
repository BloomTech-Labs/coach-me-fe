import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import CoachNotifications from "./CoachNotifications";

describe("CoachNotifications component", () => {
	it("Renders without crashing", async () => {
		render(<CoachNotifications />);
	})
})