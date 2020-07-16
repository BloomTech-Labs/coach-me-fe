import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import GoalCardModal from "./GoalCardModal";

describe("GoalCardModal component", () => {
	it("Renders without crashing", async () => {
		render(<GoalCardModal />);
	})
})