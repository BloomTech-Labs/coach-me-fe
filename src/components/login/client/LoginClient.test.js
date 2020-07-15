import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import LoginClient from "./LoginClient";

describe("LoginClient component and texts", () => {
	it("Renders without crashing", async () => {
		render(<LoginClient />);
	})
	it("Header text", () => {
		const container = render(<LoginClient />);
		const text = container.getByText("Login");
		expect(text).toBeTruthy();
	})
})

describe("LoginClient Form", () => {
	it("Email input field", async () => {
		const container = render(<LoginClient />);
		const emailText = container.getByText("Email");
		expect(emailText).toBeTruthy();
	});
	it("Password input field", async () => {
		const container = render(<LoginClient />);
		const passText = container.getByText("Password");
		expect(passText).toBeTruthy();
	});
	it("Password eye", () => {
		const container = render(<LoginClient />);
		const image = container.getByAltText("eye");
		expect(image.src).toBe("http://localhost/show_password.png");
	});
	it("Submit button", async () => {
		const container = render(<LoginClient />);
		const text = container.getByText("Log in");
		expect(text).toBeTruthy();
	});
})

describe("LoginClient redirect links", () => {
	it("Signup link ", async () => {
		const container = render(<LoginClient />);
		const prompt = container.getByText("Don't have an account?");
		const link = container.getByText("Signup");
		expect(prompt).toBeTruthy();
		expect(link).toBeTruthy();
	});
	it("Get New link", async () => {
		const container = render(<LoginClient />);
		const link = container.getByText("Forgot Password?");
		expect(link).toBeTruthy();
	});
})
