import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import LoginCoach from "./LoginCoach";

describe("LoginCoach component", () => {
	it("Renders without crashing", async () => {
		render(<LoginCoach />);
    })
})