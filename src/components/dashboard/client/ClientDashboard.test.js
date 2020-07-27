import React from "react";
import { Helper as render } from "../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import ClientDashboard from "./ClientDashboard";

describe("ClientDashboard component", () => {
	it("Renders without crashing", async () => {
		render(<ClientDashboard />);
	})
})