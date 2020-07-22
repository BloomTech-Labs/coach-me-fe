import React from "react";
import { Helper as render } from "../../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import HealthMetricForm from "./HealthMetricForm";

describe("HealthMetricForm component", () => {
	it("Renders without crashing", async () => {
		render(<HealthMetricForm />);
    })
})