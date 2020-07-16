import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import GoalCardModal from "./GoalCardModal";

describe("GoalCardModal component", () => {
	it("Renders without crashing", async () => {
		render(<GoalCardModal />);
	})
	it("Goal Modal", async () => {
		const container = render(<GoalCardModal />);
		const cardModal = container.getByTestId("goalcard-modal");
		const goalModal = container.getByTestId("goal-modal");
		const iconSection = container.getByTestId("icon-section");
		const icon = container.getByTestId("icon");
		const info = container.getByTestId("info");
		const startDate = container.getByTestId("start-date");
		const title = container.getByTestId("title");
		const description = container.getByTestId("description");
		const buttons = container.getByTestId("buttons");
		const editBtn = container.getByText("Edit");
		const delBtn = container.getByText("Delete")
		expect(cardModal).toContainElement(goalModal);
		expect(iconSection).toHaveClass("icon-container");
		expect(iconSection).toContainElement(icon);
		expect(info).toContainElement(startDate);
		expect(info).toContainElement(title);
		expect(info).toContainElement(description);
		expect(buttons).toHaveClass("buttons");
		expect(buttons).toContainElement(editBtn);
		expect(buttons).toContainElement(delBtn);
		expect(editBtn).toHaveClass("edit");
		expect(delBtn).toHaveClass("delete");
	})
})