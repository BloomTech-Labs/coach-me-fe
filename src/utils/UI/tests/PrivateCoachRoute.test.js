import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import PrivateCoachRoute from "../../PrivateCoachRoute";

describe("PrivateCoachRoute component and texts", () => {
	it("Renders without crashing", async () => {
		render(<PrivateCoachRoute />);
    })
})