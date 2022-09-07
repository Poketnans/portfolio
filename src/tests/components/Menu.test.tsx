import { screen } from "@testing-library/react";
import Menu from "../../components/Menu";
import { render } from "../test-utils";

describe("Menu Component Tests", () => {
  it("Should render Home nav option", () => {
    render(<Menu />);

    const home_option = screen.getByText("Home");

    expect(home_option).toBeInTheDocument();
  });

  it("Should render About Me nav option", () => {
    render(<Menu />);

    const about_me_option = screen.getByText("About Me");

    expect(about_me_option).toBeInTheDocument();
  });

  it("Should render Projects nav option", () => {
    render(<Menu />);

    const projects_option = screen.getByText("Projects");

    expect(projects_option).toBeInTheDocument();
  });

  it("Should render Contact nav option", () => {
    render(<Menu />);

    const contact_option = screen.getByText("Contact");

    expect(contact_option).toBeInTheDocument();
  });
});
