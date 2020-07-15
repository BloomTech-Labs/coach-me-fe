import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import GoalForm from "./GoalForm";

describe("GoalForm component", () => {
	it("Renders without crashing", async () => {
		render(<GoalForm />);
    })
})