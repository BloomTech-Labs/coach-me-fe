import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import ResourceCenter from "./ResourceCenter";

describe("ResourceCenter component", () => {
	it("Renders without crashing", async () => {
		render(<ResourceCenter />);
	})
	it("ResourceCenter Page", async () => {
		const container = render(<ResourceCenter />);
		const page = container.getByTestId("rc-page");
		const pageTop = container.getByTestId("rc-top");
		const header = container.getByTestId("rc-header")
		expect(page).toHaveClass('resources-container');
		expect(pageTop).toHaveClass('top-section');
		expect(header).toBeTruthy();
	})
	it("Resource 1", async () => {
		const container = render(<ResourceCenter />);
        const title = container.getByText("Overview of Diabetes and Treatments");
        const article = container.getByText("https://www.medicalnewstoday.com/articles/323627");
		expect(title).toBeTruthy();
		expect(article).toBeTruthy();
	})
	it("Resource 2", async () => {
		const container = render(<ResourceCenter />);
        const title = container.getByText("Managing High Blood Pressure");
        const article = container.getByText("https://www.gethealthystayhealthy.com/articles/managing-high-blood-pressure");
		expect(title).toBeTruthy();
		expect(article).toBeTruthy();
	})
})