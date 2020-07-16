import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import CoachNotificationCenter from "./CoachNotificationCenter";

describe("CoachNotificationCenter component", () => {
	it("Renders without crashing", async () => {
		render(<CoachNotificationCenter />);
	})
})