import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import Metrics from "./Metrics";

describe("Metrics component", () => {
	it("Renders without crashing", async () => {
		render(<Metrics />);
    })
    it("Blood Glucose", async () => {
        const container = render(<Metrics />);
        const title = container.getByText("Blood Glucose");
        const text = container.getAllByText("No available data for this metric.");
        expect(title).toHaveClass("metric-title");
        expect(text).toBeTruthy();
    })
    it("Weight", async () => {
        const container = render(<Metrics />);
        const title = container.getByText("Weight");
        expect(title).toHaveClass("metric-title");
        const text = container.getAllByText("No available data for this metric.");
        expect(text).toBeTruthy();
    })
    it("Blood Pressure", async () => {
        const container = render(<Metrics />);
        const title = container.getByText("Blood Pressure");
        expect(title).toHaveClass("metric-title");
        const text = container.getAllByText("No available data for this metric.");
        expect(text).toBeTruthy();
    })
})