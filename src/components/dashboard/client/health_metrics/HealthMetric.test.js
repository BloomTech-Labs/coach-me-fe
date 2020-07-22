import React from "react";
import { Helper as render } from "../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import HealthMetric from "./HealthMetric";

describe("HealthMetric component", () => {
	it("Renders without crashing", async () => {
		render(<HealthMetric />);
    })
})