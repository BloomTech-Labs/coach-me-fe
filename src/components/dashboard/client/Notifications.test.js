import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import Notifications from "./Notifications";

describe("Notifications component and texts", () => {
	it("Renders without crashing", async () => {
		render(<Notifications />);
    })
})