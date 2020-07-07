import React from "react";
import { Helper as render } from "../../../../../../utils/helpers";
import ProfileFive from "./ProfileFive";
import Weekends from "./Weekends";
import Weekdays from "./Weekdays";
import "@testing-library/jest-dom/extend-expect";

describe("ProfileOne component", () => {
	it("renders without crashing", async () => {
		await render(<ProfileFive />);
	});

	it("Displays correct Header text", async () => {
		const container = render(<ProfileFive />);
		const title = container.getByTestId("title");
		expect(title.textContent).toEqual("When are you usually available?");
	});
});

it("Displays correct Header text", async () => {
	const container = render(<ProfileFive />);
	const scheduling = container.getByTestId("scheduling");
	const helpText = container.getByTestId("help-text");
	expect(scheduling).toContainElement(helpText);
	expect(helpText.textContent).toEqual(
		"As part of Coach Me you'll regularly chat with your coach. Select what time(s) work best for you."
	);
});

it("Displays Weekends correctly", () => {
	const container = render(<Weekends />);
});

it("Displays Weekdays correctly", () => {
	const container = render(<Weekdays />);
});
