import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import GoalsDisplay from "./GoalsDisplay";
import GoalCard from "./GoalCard";

describe("GoalsDisplay component", () => {
	it("Renders without crashing", async () => {
		render(<GoalsDisplay />);
	})
	it("Goal Wrapper", async () => {
		const container = render(<GoalsDisplay />);
		const goals = container.getByTestId("goals");
		expect(goals).toHaveClass("goals-wrapper");
	})
})