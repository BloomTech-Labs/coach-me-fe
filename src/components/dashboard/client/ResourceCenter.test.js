import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import ResourceCenter from "./ResourceCenter";

describe("ResourceCenter component and texts", () => {
	it("Renders without crashing", async () => {
		render(<ResourceCenter />);
    })
})