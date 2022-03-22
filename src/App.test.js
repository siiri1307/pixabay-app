import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders search input field", () => {
  render(<App />);
  const searchInput = screen.getByLabelText("Image and/or video keyword(s)");
  expect(searchInput).toBeInTheDocument();
});