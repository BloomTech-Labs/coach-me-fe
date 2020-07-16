import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import CoachDashboard from "./CoachDashboard";

describe("CoachDashboard component", () => {
	it("Renders without crashing", async () => {
		render(<CoachDashboard />);
    })
    it("Clientlist", async () => {
        const container = render(<CoachDashboard />);
        const searchForm = container.getByTestId("search-form");
        const clientList = container.getByTestId("clientlist");
        expect(clientList).toHaveClass("clientlist-container");
        expect(clientList).toContainElement(searchForm);
        expect(searchForm).toHaveClass("search-container");
    })
    it("Clientinfo name", async () => {
        const container = render(<CoachDashboard />);
        const clientInfo = container.getByTestId("clientinfo");
        const coachName = container.getByTestId("coach-name");
        expect(clientInfo).toHaveClass("clientinfo-container");
        expect(clientInfo).toContainElement(clientInfo);
        expect(coachName).toHaveClass("coach-name");
    })
})