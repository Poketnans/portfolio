import { screen } from "@testing-library/react";
import Home from "../../pages/Home";
import { render } from "../test-utils";

describe("Home component Tests", () => {
  it("Should have navbar HTML tag", () => {
    render(<Home />);

    const navbar = screen.getByRole("navigation");

    expect(navbar).toBeInTheDocument();
  });
});
