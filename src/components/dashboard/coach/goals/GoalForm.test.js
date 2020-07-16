import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import GoalForm from "./GoalForm";

describe("GoalForm component", () => {
	it("Renders without crashing", async () => {
		render(<GoalForm />);
	})
	it("Form", async () => {
		const container = render(<GoalForm />);
		const form = container.getByTestId("goal-form");
		const header = container.getByTestId("form-header");
		const date = container.getByTestId("date-field");
		const title = container.getByTestId("title-field");
		const submitButton = container.getByText("Create")
		const description = container.getByTestId("description-field");
		expect(form).toHaveClass("closed");
		expect(form).toContainElement(header);
		expect(form).toContainElement(date);
		expect(form).toContainElement(title);
		expect(form).toContainElement(description);
		expect(form).toContainElement(submitButton);
	})
})