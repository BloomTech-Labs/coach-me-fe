import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import GoalsContainer from "./GoalsContainer";

describe("GoalsContainer component", () => {
	it("Renders without crashing", async () => {
		render(<GoalsContainer />);
	})
	it("GoalContainer Contents", async () => {
		const container = render(<GoalsContainer />);
		const goalContainer = container.getByTestId("goal-container");
		const name = container.getByTestId("clients-name");
		const createBtn = container.getByText("Create Goal");
		expect(goalContainer).toHaveClass("hidden");
		expect(goalContainer).toContainElement(name);
		expect(name).toHaveClass("client-name");
		expect(goalContainer).toContainElement(createBtn);
	})
})