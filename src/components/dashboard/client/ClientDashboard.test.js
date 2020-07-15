import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import ClientDashboard from "./ClientDashboard";

describe("ClientDashboard component and texts", () => {
	it("Renders without crashing", async () => {
		render(<ClientDashboard />);
	})
    it("Tabs", () => {
        const container = render(<ClientDashboard />);
        const tab1 = container.getByText("Notifications");
        const tab2 = container.getByText("Resources");
        const tab3 = container.getByText("Messages");
        const tab4 = container.getByText("Health Form");
        expect(tab1).toBeTruthy();
        expect(tab2).toBeTruthy();
        expect(tab3).toBeTruthy();
        expect(tab4).toBeTruthy();
    })
    it("Motivation", () => {
		const container = render(<ClientDashboard />);
		const text = container.getByText("Motivation: client's motivation for coming to the app");
		expect(text).toBeTruthy();
    })
    // it("First Goal", () => {
    //     const container = render(<ClientDashboard />);
    //     const startDate = container.getByText("Started: 6/8/20");
    //     const title = container.getByText("Excerise More");
    //     const description = container.getByText("I will walk 5,000 steps 4 days this week")
    //     expect(startDate).toBeTruthy();
    //     expect(title).toBeTruthy();
	// 	expect(description).toBeTruthy();
    // })
    // it("Second Goal", () => {
    //     const container = render(<ClientDashboard />);
    //     const startDate = container.getByText("Started: 6/15/20");
    //     const title = container.getByText("Excerise More");
    //     const description = container.getByText("I will wall 8,000 steps 4 days this week.")
    //     expect(startDate).toBeTruthy();
    //     expect(title).toBeTruthy();
	// 	expect(description).toBeTruthy();
    // })
    // it("Third Goal", () => {
    //     const container = render(<ClientDashboard />);
    //     const startDate = container.getByText("Started: 6/22/20");
    //     const title = container.getByText("Eat Healthier");
    //     const description = container.getByText("I will eat 2 servings of vegetables 4 days this week.")
    //     expect(startDate).toBeTruthy();
    //     expect(title).toBeTruthy();
	// 	expect(description).toBeTruthy();
    // })
})