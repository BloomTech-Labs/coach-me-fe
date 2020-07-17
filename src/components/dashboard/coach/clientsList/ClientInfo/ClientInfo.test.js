import React from "react";
import { Helper as render } from "../../../../../utils/helpers";
import "@testing-library/jest-dom/extend-expect";
import ClientInfo from "./ClientInfo";

describe("ClientInfo component", () => {
	it("Renders without crashing", async () => {
		render(<ClientInfo />);
    })
})