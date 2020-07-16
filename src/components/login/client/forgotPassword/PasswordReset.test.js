import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import PasswordReset from "./PasswordReset";

describe("PasswordReset Header", () => {
	it("Renders without crashing", async () => {
		render(<PasswordReset />);
	});
	it("Header text", () => {
		const container = render(<PasswordReset />);
		const text = container.getByText("Forgot Password");
		expect(text).toBeTruthy();
	});
})

describe("PasswordReset Form", () => {
	it("New Password input field", async () => {
		const container = render(<PasswordReset />);
		const text = container.getByText("New Password");
		expect(text).toBeTruthy();
	});
	it("Password input field", async () => {
		const container = render(<PasswordReset />);
		const text = container.getByText("Repeat Password");
		expect(text).toBeTruthy();
	});
	it("Reset Password button", async () => {
		const container = render(<PasswordReset />);
		const text = container.getByText("Reset Password");
		expect(text).toBeTruthy();
	});
})

describe("PasswordReset redirect link", () => {
	it("Signup link ", async () => {
		const container = render(<PasswordReset />);
		const prompt = container.getByText("Don't have an account?");
		const text = container.getByText("Signup");
		expect(prompt).toBeTruthy();
		expect(text).toBeTruthy();
	});
})