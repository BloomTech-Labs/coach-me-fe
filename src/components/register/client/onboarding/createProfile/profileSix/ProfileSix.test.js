import React from "react";
import { Helper as render } from "../../../../../../utils/helpers";
import ProfileSix from "./ProfileSix";

import "@testing-library/jest-dom/extend-expect";

describe("ProfileOne component", () => {
	it("renders without crashing", async () => {
		await render(<ProfileSix />);
	});
});
