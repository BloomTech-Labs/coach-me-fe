import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import EmailRequest from "./EmailRequest";

describe("EmailRequest Header", () => {
	it("Renders without crashing", async () => {
		render(<EmailRequest />);
	});
	it("Header text", () => {
		const container = render(<EmailRequest />);
		const text = container.getByText("Forgot Password");
		expect(text).toBeTruthy();
	});
})

describe("EmailRequest Form", () => {
	it("Email input text", async () => {
		const container = render(<EmailRequest />);
		const text = container.getByText("Email");
		expect(text).toBeTruthy();
	});
	it("Request Password button ", async () => {
		const container = render(<EmailRequest />);
		const text = container.getByText("Request Password");
		expect(text).toBeTruthy();
	});
})