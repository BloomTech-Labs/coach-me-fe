import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import Notifications from "./Notifications";

describe("Notifications component", () => {
	it("Renders without crashing", async () => {
		render(<Notifications />);
	})
	it("Notifications Page", async () => {
		const container = render(<Notifications />);
		const page = container.getByTestId("notification-page");
		const pageTop = container.getByTestId("notification-top");
		const header = container.getByTestId("notification-header")
		expect(page).toHaveClass('notification-container');
		expect(pageTop).toHaveClass('top-section');
		expect(header).toBeTruthy();
	})
	it("Notification 1", async () => {
		const container = render(<Notifications />);
        const title = container.getByText("Welcome to CoachMe!!");
        const text = container.getByText("To get you started fill out a health status form! You can view your health graphs by cliking on Track Progress in your dashboard.");
		expect(title).toBeTruthy();
		expect(text).toBeTruthy();
	})
	it("Notification 2", async () => {
		const container = render(<Notifications />);
        const title = container.getByText("Next Steps");
        const text = container.getByText("Your coach will message you shortly if not already! Go to Coach Messages and start a conversation with your coach.");
		expect(title).toBeTruthy();
		expect(text).toBeTruthy();
	})
})